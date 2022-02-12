from django.shortcuts import render
from django.http.response import HttpResponse, HttpResponseRedirect
from django.http import HttpResponseRedirect
# Create your views here.

def login(request):
    context = {}
    template = 'website/login.html'
    return render(request, template, context)
    # return HttpResponse('home')

def home(request):
    context = {}
    template = 'website/file-manager.html'
    return render(request, template, context)
    # return HttpResponse('home')

def settings(request):
    context = {}
    template = 'website/file-manager.html'
    return render(request, template, context)
    # return HttpResponse('home')

# Test

def chump(request):
    context = {}
    template = 'website/base.html'
    return render(request, template, context)
    # return HttpResponse('home')