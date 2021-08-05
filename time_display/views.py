from django.shortcuts import render, HttpResponse
from time import gmtime, strftime, localtime

# Create your views here.
def index(request):
    return HttpResponse("Hola, bienvenidos a mi página...")

def time_display(request):
    context = {
        "time": strftime("%Y-%m-%d %H:%M", localtime()),
        "time_gmt": strftime("%Y-%m-%d %H:%M %p", gmtime())
    }
    return render(request,'index.html', context)