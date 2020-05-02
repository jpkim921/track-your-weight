from django.shortcuts import render
from django.views.generic import View


class HomeView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'frontend/chart.html', {})


def WeightPointForm(request):
    return render(request, 'frontend/newWeightForm.html', {})
