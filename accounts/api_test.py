import requests


class TestAPI:

    def __init__(self):
        self.url = "http://127.0.0.1:8000/auth/"
        self.create_thought_url = "http://127.0.0.1:8000/thoughts/"
        self.account_url = "http://127.0.0.1:8000/api/accounts/"
        #self.username = "mitchelinaju"
        self.password = "adminmaster"
        self.email = "nathaninaju@gmail.com"
        self.first_name ='mitchel'
        self.last_name = 'inaju'
        

        self.data = {
            #"username": str(self.username),
            "password": str(self.password),
            "email": str(self.email),
            "first_name":str(self.first_name),
            "last_name":str(self.last_name)
        }

        self.headers = {
            'Content-Type': 'application/json',
            
        }

    def get_jwt_token(self):
        create_user_url = "jwt/create/"
        url = self.url+create_user_url
        #print(url)
        response = requests.post(url, data=self.data)
        return response.json()['access']

    def login(self):
        headers = {
            "Authorization": "Bearer "+str(self.get_jwt_token())
        }

        login_url = "user/login/"

        url = self.account_url+login_url

        #print(url)
        response = requests.post(url,  headers=headers, data=self.data)
        return response.json()['token']

    def logout(self):
      
        logout_url = "user/logout/"
        url = self.account_url+logout_url
        #print(url)
        response = requests.get(url, data=self.data)
        return print(response.json())
      
    def create_user(self):

        create_user_url = "users/"
        url = self.url+create_user_url
        #print(url)
        response = requests.post(url, data=self.data)
        return print(response.json(), response.status_code)
    
    def get_user_id(self, token):

        create_user_url = "users/me/"
        url = self.url+create_user_url
        #print(url)
        headers = {
            "Authorization": "Bearer "+str(token)
        }
        
        response = requests.get(url, data=self.data, headers=headers)

        
        return print(response.json(), headers)


    def get_user_detail(self, token):

        create_user_url = "users/me/"
        url = self.url+create_user_url
        #print(url)
        headers = {
            "Authorization": "Bearer "+str(token)
        }
        print(headers)
        response = requests.get(url, data=self.data, headers=headers)

        return print(response.json())

    def update_profile(self):

        data={
            'description': 'I am a very famous game character',
            'location': 'nintendo world', 'is_creator': 'true', }

        id=self.get_user_id()
        create_user_url = "profile/"+str(id)+"/"
        url = self.account_url+create_user_url
        
        response = requests.put(url, data=data)
        return print(url,"update profile"), response.json(), response.status_code
    
    def profile_details(self):
        id = self.get_user_id()
        headers = {
            "Authorization": "Bearer "+str(self.get_jwt_token())
        }
        create_user_url = "profile/"+str(id)+"/"
        url = self.account_url+create_user_url

        response = requests.get(url, headers=headers)
        return print(url,"profile details", response.json(), response.status_code)
    
    def all_profiles(self):
        headers = {
            "Authorization": "Bearer "+str(self.get_jwt_token())
        }
        create_user_url = "all-profiles"
        url = self.account_url+create_user_url

        response = requests.get(url, headers=headers)
        return print(url), response.json(), response.status_code

    def get_location(self):
        id = self.get_user_id()
        headers = {
            "Authorization": "Bearer "+str(self.get_jwt_token())
        }
        create_user_url = "profile/"+str(id)+"/location/"
        url = self.account_url+create_user_url
        print(url)

        response = requests.get(url, headers=headers)
        return print(url, "profile details", response.json(), response.status_code)
        
    def get_username(self):
        id = self.get_user_id()
        headers = {
            "Authorization": "Bearer "+str(self.get_jwt_token())
        }

        create_user_url = "profile/"+str(id)+"/"
        url = self.account_url+create_user_url

        response = requests.get(url, headers=headers)
        return print(url,"username", response.json(), response.status_code)

    def get_user_from_thoughts(self, id):
      
        url = self.create_thought_url+"detail/"+str(id)+"/"
        print(url)
        response = requests.get(url)
        return print(response.json(), response.status_code)

    def create_thoughts(self):
        data = {
            'content': "I want to deposit some amount",
            'like':True,
            'amount':5000
        }
        headers = {
            "Authorization": "Bearer "+str(self.get_jwt_token())
        }

        url = self.create_thought_url
        print(data)
        response = requests.post(url, data=data, headers=headers)
        return print(response.json(), response.status_code)

    def get_user(self):
        headers = {
            "Authorization": "Bearer "+str(self.get_jwt_token())
        }
        url = self.account_url+"get-user/"
        print(url)
        response = requests.get(url, headers=headers)
        return print(response.json(), response.status_code)

testing = TestAPI()
#print(testing.get_jwt_token())
#testing.create_user() 
testing.get_user_detail(testing.get_jwt_token())

#testing.logout()
