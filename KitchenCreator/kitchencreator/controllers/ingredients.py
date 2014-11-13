import logging
import urllib
import httplib2
import json
import re

from pylons import request, response, session, tmpl_context as c, url
from pylons.controllers.util import abort, redirect

from labtwo.lib.base import BaseController, render

log = logging.getLogger(__name__)

class IngredientsController(BaseController):

    def index(self):
        # Return a rendered template
        #return render('/ingredients.mako')
        # or, return a string
        #return 'Hello World'
        return render('homepage.mako')
    def recipeURL(self):


        print "queary string is " + request.query_string;

        print("TESTING");

        #http://api.yummly.com/v1/api/recipe/recipe-id?_app_id=YOUR_ID&_app_key=YOUR_APP_KEY
        body = {'USERNAME': 'foo', 'PASSWORD': 'bar'}
        headers = {'X-Yummly-App-ID':'d6d7bb65', 'X-Yummly-App-Key':'2cbec192c88e07bee611a4da0dce178f'}

        #print "params are: " + params;
        #make url and add params
        params = request.query_string;
        url = 'http://api.yummly.com/v1/api/recipe/recipe-id?'
        #url += params;
        url += "Hot-Turkey-Salad-Sandwiches-Allrecipes";
        url += '&_app_id=d6d7bb65&_app_key=2cbec192c88e07bee611a4da0dce178f';
        #url += params;
        print "url is :" + url
        #newurl = 'http://api.yummly.com/v1/api/recipes?_app_id=d6d7bb65&_app_key=2cbec192c88e07bee611a4da0dce178f&q=chicken+curry'

        http = httplib2.Http()
        response, content = http.request(url, 'GET',  body=urllib.urlencode(body))
        
        print content;


        variable = "http://www.google.ca";
        return content;





    def recipeInfo(self):
      if request.method == "GET":
        #data = request.data
        #print data

        print"geting info"
        #print request.GET
        #vals = "";
        #vals = request.GET
        new = request.query_string;
        print new
        #for key, value in vals:
          #print key
        testingval = ' ';
        testingval = new;
        #print testingval["ingredients"] + "testingvals";
        params = '&q=';
        #clean the vals
        testingval = re.sub(',', '+', testingval)
        testingval = re.sub(' ', '', testingval)
        testingval = re.sub('%20', '', testingval)

        #add to params
        params += testingval;

        body = {'USERNAME': 'foo', 'PASSWORD': 'bar'}
        headers = {'X-Yummly-App-ID':'d6d7bb65', 'X-Yummly-App-Key':'2cbec192c88e07bee611a4da0dce178f'}

        print "params are: " + params;
        #make url and add params
        url = 'http://api.yummly.com/v1/api/recipes?_app_id=d6d7bb65&_app_key=2cbec192c88e07bee611a4da0dce178f';
        url += params;

        newurl = 'http://api.yummly.com/v1/api/recipes?_app_id=d6d7bb65&_app_key=2cbec192c88e07bee611a4da0dce178f&q=chicken+curry'

        http = httplib2.Http()
        response, content = http.request(url, 'GET',  body=urllib.urlencode(body))
        
        print content;
        return content
