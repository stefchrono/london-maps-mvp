import requests
import json


app_id = '03315ccd'
app_key = '20be96920a9a9de7d6f63b72056e69a1'

url = 'https://api.tfl.gov.uk/Journey/JourneyResults/SW63DP/to/NW118RQ'
r = requests.get(url, auth=(app_id, app_key))
json_data = json.loads(r.text)

little_list = []
# for journ in json_data['journeys']:
#     for leg in journ['legs']:
#         print (leg)

# print(json_data['journeys'][0]['legs'][1]['path']['stopPoints'])

for journey in json_data['journeys']:
    for leg in journey['legs']:
        for stop in leg['path']['stopPoints']:

            print((stop))
