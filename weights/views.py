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


# def weight_entry(request):
#     return render(request, 'weights/weight_entry.html', {})

def weight_entry(request):
  if request.method == "POST":

    weight_entry_form = WeightForm(request.POST)

    if weight_entry_form.is_valid():
      weight_entry = weight_entry_form.save()
      return redirect('/')

  else:
    weight_entry_form = WeightForm()
    
  context = {
    'weight_entry_form': weight_entry_form
  }

  return render(request, 'weights/weight_entry.html', context)
