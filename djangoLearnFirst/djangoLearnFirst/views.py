from django.http import HttpResponse
def fun(request):
    print('12')
    return HttpResponse('message')

