from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import User
from posts.models import Post
from django.db import IntegrityError
@api_view(['GET'])
def fun(request):
    print("AUTH")
    return Response(({'message' : 'just for fun'}))

@api_view(['POST'])
def doFun(request):
    print(request.data)
    return Response(({'message' : 'Doing fun'}))

@api_view(['POST'])
def signup(request):
    data=request.data
    try:
      User.objects.create(name=data['fullname'],username=data['username'],password=data['password']) 
      return Response({'message' : 'account created'},status=status.HTTP_200_OK)
    except IntegrityError as e:
        return Response({'message' : "User already exist"}, status=status.HTTP_401_UNAUTHORIZED)
    except:
        return Response({'message' : 'Error occurred'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
def login(request):
  data=request.data
  uname=data['username']
  pswd=data['password']

  try:
    check_user=User.objects.get(username=uname)
    existing_password=check_user.password
    if(pswd==existing_password):
      all_obj= list(Post.objects.all().values())
      return Response({'message' : 'Logged in', 'data': all_obj}, status=status.HTTP_200_OK)
    else:
      return Response({'message' : 'Wrong password'}, status=status.HTTP_401_UNAUTHORIZED)
  except User.DoesNotExist as e:
    return Response({'message' : "User doesn't exist"}, status=status.HTTP_401_UNAUTHORIZED)
  except:
    return Response({'message' : 'Error occurred'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    


    
    

