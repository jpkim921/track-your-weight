from django.shortcuts import render, get_object_or_404
from django.views.generic import View

from weightpoints.models import WeightPoint


# class HomeView(View):
#     def get(self, request, *args, **kwargs):
#         return render(request, 'frontend/chart.html', {})


# def WeightPointForm(request):
#     return render(request, 'frontend/newWeightForm.html', {})


def IndexView(request):
    weightpoints = WeightPoint.objects.all()

    context = {
        "weightpoints": weightpoints[::-1]
    }
    return render(request, 'frontend/index.html', context)


def DetailView(request, pk):
    try:
        weightpoint = get_object_or_404(WeightPoint, pk=pk)
    except (KeyError, WeightPoint.DoesNotExist):
        weightpoints = WeightPoint.objects.all()
        context = {
            "weightpoints": weightpoints[::-1]
        }
        return render(request, 'frontend/index.html', context)
    else:
        return render(request, 'frontend/detail.html', {'weightpoint': weightpoint})
