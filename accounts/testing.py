import requests

class UserAPI:

    def __init__(self): 
        self.url = "http://127.0.0.1:8000/auth/"
        self.account_url = "http://127.0.0.1:8000/api/accounts/"
        
        #self.username = "mitchelinaju"
        self.password = "adminmaster"
        self.email = "mitchelballzz@gmail.com"
        self.first_name = 'mitchel'
        self.last_name = 'inaju'

        self.data = {
            #"username": str(self.username),
            "password": str(self.password),
            "email": str(self.email),
            "first_name": str(self.first_name),
            "last_name": str(self.last_name)
        }

        self.headers = {
            'Content-Type': 'application/json',

        }


    def create_user(self):
        create_user_url = "users/"
        url = self.url+create_user_url
        #print(url)
        
        response = requests.post(url, data=self.data)
        return print(response.json(), response.status_code)
   
    def login(self):
        login_url = "token/login/"
        url = self.url+login_url
        #print(url)
        response = requests.post(url, data=self.data)
        return response.json()['auth_token']

    def user_details(self, token):
        user_url = "users/me/"
        url = self.url+user_url
        #print(url)
        headers = {
            "Authorization": "Token "+str(token)
        }

        response = requests.get(url, headers=headers)
        #print(headers)
        return print(response.json(), response.status_code)

    def logout(self, token):
        logout_url = "token/logout/"
        url = self.url+logout_url
        #print(url)

        headers = {
            "Authorization": "Token "+str(token)
        }

        response = requests.post(url, headers=headers)
        return print(response.json(), response.status_code)

#test= UserAPI()
#print(test.create_user())
#print(test.login())
#test.user_details("288aef7065da19d44715069a26bf7f7bda32bf1b")



class MainAPI:
    def __init__(self):
        self.main = "http://127.0.0.1:8000/"

    
    def get_roi(self, token):
        url = self.main+"roi/"

        headers = headers = {
            "Authorization": "Token "+str(token)
        }

        response = requests.get(url, headers=headers)
        return print(response.json(), response.status_code)

    def dashboard(self, token, action):
        url = self.main+"api/dashboard/"

        headers = headers = {
            "Authorization": "Token "+str(token)
        }
        data = {
            "action":action,
        }
        response = requests.get(url, data=data, headers=headers)
        return print(response.json())

    def payment(self, token):
        url = self.main+"main/api/payment/"

        headers = headers = {
            "Authorization": "Token "+str(token)
        }

        data={
            "amount":1000,  
            "callback_url": "main/savepayment/"
        }

        response = requests.post(url, data=data, headers=headers)
        return print(response.json())

    def get_investment_details(self,token):
        url = self.main+"investmentdetails/"

        headers = headers = {
            "Authorization": "Token "+str(token)
        }


        response = requests.get(url, headers=headers)
        return print(response.json())



test_main=MainAPI()
#test_main.dashboard("288aef7065da19d44715069a26bf7f7bda32bf1b", action="amount")
#test_main.payment("fe72c7b63155221bd317b124480948b0208d24a0")
test_main.get_investment_details("fe72c7b63155221bd317b124480948b0208d24a0")
