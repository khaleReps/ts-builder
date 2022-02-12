from django.shortcuts import render
from django.http.response import HttpResponse, HttpResponseRedirect
from django.http import HttpResponseRedirect
# Create your views here.


def builder(request):
    context = {}
    template = 'grapejs/builder.html'
    return render(request, template, context)
    # return HttpResponse('builder page')


def sitetest(request):
    context = {}
    template = 'grapejs/w3school.html'
    return render(request, template, context)