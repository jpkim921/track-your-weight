from django.urls import path
from . import views

app_name = 'trackyourweight'

urlpatterns = [
    path('', views.IndexView, name='index'),
    path('<int:pk>/', views.DetailView, name='detail'),
]
