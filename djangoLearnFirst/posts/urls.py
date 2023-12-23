from django.urls import path
from .views import addpost,postview

urlpatterns=[
    path('addpost', addpost),
    path('postview',postview)
]