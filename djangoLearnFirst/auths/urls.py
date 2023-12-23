from django.urls import path
from .views import fun
from .views import doFun,signup,login
urlpatterns = [
   path('authTest',fun),
   path('dofun',doFun),
   path('signup',signup),
   path('login',login),
]