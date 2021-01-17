# How to start up
1. Clone Ejeka invest and enter into the directory
2. Run This commands
````
python manage.py makemigrations

python manage.py migrate

python manage.py runserver

````

The server should be running now.

Now we're going to test our api endpoints

# API Endpoints
## User Management with Djoser + Django Rest Framework
**Create Users(POST)** <br />
```curl -X POST http://127.0.0.1:8000/auth/users/ --data 'first_name=tobi&last_name=john&email=tobi@gmail.com&password=iloveapples' ```

**Login(POST)** <br /> 
```curl -X POST http://127.0.0.1:8000/auth/token/login/ --data 'first_name=tobi&last_name=john&email=tobi@gmail.com&password=iloveapples'```

The auth_token would be returned, you append ```Token <auth_token>``` to use it

**Check User Details(GET)** <br />
```curl -LX GET http://127.0.0.1:8000/auth/users/me/ -H 'Authorization:Token <auth_token>' ``` <br>
Now you can get all the details of the user you need

**Logout(POST)** <br />
```curl -X POST http://127.0.0.1:8088/auth/token/logout/ -H 'Authorization: Token <auth_token>' ```


**Get Dashboard Data(GET)** <br />
```curl -LX GET http://127.0.0.1:8000/api/dashboard/ -H 'Authorization:Token <token>' --data 'action=amount' ``` <br>
The dashboard can be worked on later, you should be able to query the remaining data from the **Check User Details** Endpoint


**Make payment (POST)** <br /> 
```curl -X POST http://127.0.0.1:8000/api/payment/ -H 'Authorization:Token <token>' --data 'amount=50000'```

This returns a url that looks like this: "https://checkout.paystack.com/ggg1g1g1g11g1g1" <br>
This is paystack's endpoint for payment, we've already submitted the amount by a post request<br>
So when working with this endpoint, you're probably using a form. So extract the data from the form and use as a post request <br>

Now check the user Details and see that the current balance of the user has changed# ejeka_invest



**Get Investment Details(GET)** <br />
```curl -LX GET http://127.0.0.1:8000/investmentdetails/ -H 'Authorization:Token <token>'  ``` <br>
This returns something like this

``` [{'amount': 100000, 'date_invested': '2021-01-16', 'maturity_date': None}, {'amount': 100000, 'date_invested': '2021-01-16', 'maturity_date': None}, {'amount': 100000, 'date_invested': '2021-01-16', 'maturity_date': '2021-01-16'}] ```

This represents the different amounts, date of investment and maturity dates

You just need to loop over this to get the result you want

This format is a dictionary inside a list, so to get the data, use this

```
for i in investment_details[0]:
    print(i)

```
my point, you want the first element in the list by using something like ```investment_details[0]```



# EJEKA INVEST
