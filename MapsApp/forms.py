from django import forms
from wtforms.validators import ValidationError
from ukpostcodeutils import validation

#
# def PostCode_Validator(form, field):
#     if not validation.is_valid_postcode(field.data):
#         raise ValidationError('Invalid UK Post Code')


class PostCodes(forms.Form):

    origin = forms.CharField(label='', max_length=100, widget=forms.TextInput(
        attrs={'placeholder': '  From', 'class': 'mynig-origin'}))
    destination = forms.CharField(label='', max_length=100, widget=forms.TextInput(
        attrs={'placeholder': '  To', 'class': 'mynig-destination'}))

    # def clean_origin(self):
    #     data_origin = self.cleaned_data.get('origin')
    #     # data_origin = (data_origin.upper()).replace(" ", "")
    #     if not validation.is_valid_postcode(data_origin):
    #         raise forms.ValidationError("I don't know where that is, sure it's in London?")
    #     return data_origin

    # def clean_destination(self):
    #     data_destination = self.cleaned_data.get('destination')
    #     # data_destination = (data_destination.upper()).replace(" ", "")
    #     if not validation.is_valid_postcode(data_destination):
    #         raise forms.ValidationError("Why would you want to go there?")
    #     return data_destination
