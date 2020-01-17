from rest_framework.views import APIView
from rest_framework.response import Response

from django.http import JsonResponse
from django.shortcuts import render, redirect

from .models import Weight
from .forms import WeightForm
# Create your views here.

def weights_view(request):
    weights_ascending = Weight.objects.all()
    weights_descending = weights_ascending[::-1]


    context = {
        'weights_ascending': weights_ascending,
        'weights_descending': weights_descending
    }
    return render(request, 'weights/weights_view.html', context)


def weight_entry(request):
  if request.method == "POST":

    weight_entry_form = WeightForm(request.POST)

    if weight_entry_form.is_valid():
      weight_entry = weight_entry_form.save(commit=False)

      if len(Weight.objects.all()) != 0:
        previous_weight = Weight.objects.all()[::-1][0]
        weight_entry.change = weight_entry.weight - previous_weight.weight
        weight_entry.save()
      
      weight_entry.save()

      return redirect('/')

  else:
    weight_entry_form = WeightForm()
    
  context = {
    'weight_entry_form': weight_entry_form
  }

  return render(request, 'weights/weight_entry.html', context)


def chart_view(request):
  return render(request, 'chart.html', {})

# make a view to grab the data
def get_data(request, *args, **kwargs):
  data = {
    "sales": 100,
    "customers": 10
  }
  return JsonResponse(data)

dates = []
weights = []
for weight in Weight.objects.all():
  dates.append(weight.date)
  weights.append(weight.weight)

class ChartData(APIView):

    authentication_classes = []
    permission_classes = []

    def get(self, request, format=None):
      # labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]
      # default_items = [] 
      
        data = {
          # 'default': default_items,
          'labels':dates,
          'weights': weights,
          # 'dates': dates,
        }
        return Response(data)
