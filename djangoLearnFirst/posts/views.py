from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from auths.models import User
from .models import Post
@api_view(['POST'])
def addpost(request):
    # user_obj=User.objects.get() 
    data=request.data
    user_obj = User.objects.get(username=data['username'])
    Post.objects.create(title=data['title'], content=data['content'], author=user_obj)
    return Response(({'message' : 'post-added'}))

@api_view(['GET'])
def postview(request):
    all_obj= list(Post.objects.all().values())
    print(all_obj)
    return Response(({'message' : 'post-updated','data': all_obj}))