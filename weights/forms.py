from django import forms

from .models import Weight

class WeightForm(forms.ModelForm):
    class Meta:
        model = Weight
        fields = [
            'weight'
        ]
        widgets = {
            'weight': forms.NumberInput(attrs={'class': 'weight-input', 'placeholder': 'Enter weight in pounds: Ex. 178.3'})
        }
