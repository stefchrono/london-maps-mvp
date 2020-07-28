from .forms import PostCodes
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.views.generic import TemplateView
from ukpostcodeutils import validation
from django.urls import reverse
import requests
import bs4
import json
import datetime
from django import forms
import os


class HomePageView(TemplateView):
    template_name = 'index.html'

    def get(self, request, **kwargs):
        form = PostCodes()

        return render(request, self.template_name, {"form": form})

    def post(self, request, **kwargs):
        form = PostCodes(request.POST)
        print(form)
        if form.is_valid():
            app_id = os.environ.get('TFL_API_ID')
            app_key = os.environ.get('TFL_API_KEY')
            origin = request.POST['origin']
            destination = request.POST['destination']
            # headers = {
            #     'Cookie': '__cfduid=db4d776e939787360085dbbc9990d299e1592294081'
            # }

            routes = []
            stops = []
            little_list = []
            # if validation.is_valid_postcode(origin) & validation.is_valid_postcode(destination):
            url = f"https://api.tfl.gov.uk/Journey/JourneyResults/{origin}/to/{destination}"

            r = requests.get(url, auth=(app_id, app_key))

            json_data = json.loads(r.text)
            #########################################

            if 'fromLocationDisambiguation' in json_data:

                if json_data['fromLocationDisambiguation']['matchStatus'] == 'list' and json_data['toLocationDisambiguation']['matchStatus'] == 'identified':
                    json_from_lat = json_data['fromLocationDisambiguation'][
                        'disambiguationOptions'][0]['place']['lat']
                    json_from_lon = json_data['fromLocationDisambiguation'][
                        'disambiguationOptions'][0]['place']['lon']

                    url = f"https://api.tfl.gov.uk/Journey/JourneyResults/{json_from_lat},{json_from_lon}/to/{destination}"

                    r = requests.get(url, auth=(app_id, app_key))

                    json_data = json.loads(r.text)

                elif json_data['toLocationDisambiguation']['matchStatus'] == 'list' and json_data['fromLocationDisambiguation']['matchStatus'] == 'identified':
                    json_to_lat = json_data['toLocationDisambiguation'][
                        'disambiguationOptions'][0]['place']['lat']
                    json_to_lon = json_data['toLocationDisambiguation'][
                        'disambiguationOptions'][0]['place']['lon']

                    url = f"https://api.tfl.gov.uk/Journey/JourneyResults/{origin}/to/{json_to_lat},{json_to_lon}"

                    r = requests.get(url, auth=(app_id, app_key))

                    json_data = json.loads(r.text)

                elif json_data['fromLocationDisambiguation']['matchStatus'] == 'list' and json_data['toLocationDisambiguation']['matchStatus'] == 'list':

                    json_from_lat = json_data['fromLocationDisambiguation'][
                        'disambiguationOptions'][0]['place']['lat']
                    json_from_lon = json_data['fromLocationDisambiguation'][
                        'disambiguationOptions'][0]['place']['lon']

                    json_to_lat = json_data['toLocationDisambiguation'][
                        'disambiguationOptions'][0]['place']['lat']
                    json_to_lon = json_data['toLocationDisambiguation'][
                        'disambiguationOptions'][0]['place']['lon']

                    url = f"https://api.tfl.gov.uk/Journey/JourneyResults/{json_from_lat},{json_from_lon}/to/{json_to_lat},{json_to_lon}"

                    r = requests.get(url, auth=(app_id, app_key))

                    json_data = json.loads(r.text)

                else:
                    pass

            mini_dict_1 = {
                'numberOfRoutes': len(json_data['journeys']),
            }
            routes.append(mini_dict_1)

            for journ in json_data['journeys']:
                for leg in journ['legs']:
                    mini_dict = {
                        'numOfStops': len(leg['path']['stopPoints']),
                    }

                    little_list.append(mini_dict)

            context = {"form": form, "routes": routes,
                       "little_list": little_list, "json_data": json_data}

        else:
            context = {"form": form}

        return render(request, self.template_name, context)
