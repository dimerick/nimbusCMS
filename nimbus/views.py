from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import DetailView, ListView

from .models import Partner

# Create your views here.
def index(request):
    return HttpResponse("Hello, world. You're at nimbus app.")


class PartnerListView(ListView):
    template_name = 'partner_list.html'
    context_object_name = 'partner_list'

    def get_queryset(self):
        return Partner.objects.all()
