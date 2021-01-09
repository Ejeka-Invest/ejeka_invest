import requests
import json
from ._secrets import api_token_paystack

"""Note to self, i'm not true with this, i need to verify with the correct endpoint
that is "https://api.paystack.co/transaction/verify/" +str(reference), headers=headers_paystack)
but i'm currently using the make_payment function res.text if status is true

"""

bvn = {
    "status": "true",
    "message": "BVN resolved",
    "data": {
        "first_name": "jay",
        "last_name": "natash",
        "dob": "10-Oct-20",
        "formatted_dob": "1996-11-20",
        "mobile": "32242323034",
        "bvn": "11234574840"
    },

    "meta": {
        "calls_this_month": 2,
        "free_calls_left": 8
    }
}


class GetDetails:

      
    def __init__(self):
        for keys, values in bvn.items():
            if keys == 'data':
                for i, v in values.items():
                    if i == 'first_name':
                        self.first_name = v

                    if i == 'last_name':
                        self.last_name = v

                    if i == 'formatted_dob':
                        self.formatted_dob = v

    def get_first_name(self):
        return self.first_name
                  
    def get_last_name(self):
        return self.last_name
    
    def get_dob(self):
        return self.formatted_dob





class Base:

    def __init__(self):
        self.api_token_paystack = api_token_paystack
        self.headers_paystack = {'Content-Type': 'application/json',
                            'Authorization': 'Bearer {0}'.format(self.api_token_paystack),
                            }

        self.reference = None



    def make_payment(self,email, amount):
        email_str = str(email)
        data = {"email": str(email), "amount": str(amount)}

        res = requests.post(
            "https://api.paystack.co/transaction/initialize", headers=self.headers_paystack, data=json.dumps(data))

        print()
        """
        for i, v in res.json()['data'].items():
            print(i, v)
            if i == 'reference':
                
                #confirm_payment(str(v))
                
                self.reference = v
                print(self.reference)
        """
        print(res.json())
        
        for keys, values in res.json()['data'].items():
            if keys == 'authorization_url':
                url = values
                #print(url)
                return url
        


    def confirm_payment(self, reference):
        res = requests.get(
            "https://api.paystack.co/transaction/verify/" + str(reference), headers=self.headers_paystack)
        print('this is confirmed')
        return res.json()


    def transaction_list(self):
        res = requests.get(
            "https://api.paystack.co/transaction/totals", headers=self.headers_paystack)
        print(res.json())
        return res.json()
