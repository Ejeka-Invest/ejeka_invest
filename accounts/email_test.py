from django.core.mail import send_mail

send_mail('Subject here', 'Here is the message.', 'mitchelinajuo@gmail.com',
          ['mitchelinaju@yahoo.com'], fail_silently=False)
