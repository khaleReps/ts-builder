from django.shortcuts import render
from django.http.response import HttpResponse, HttpResponseRedirect
from django.http import HttpResponseRedirect
# Create your views here.


def form(request):
    context = {}
    template = 'formbuild/index.html'
    return render(request, template, context)
    # return HttpResponse('home')