from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)
from django.db import models
import uuid
# Create your models here.

class MyUserManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, password=None):
        """
        Creates and saves a User with the given email, date of
        birth and password.
        """
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            first_name=first_name,
            last_name=last_name
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, first_name, last_name, password=None):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(
            email,
            password=password,
            first_name=first_name,
            last_name=last_name
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


class UserPortfolio(AbstractBaseUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    unique_id = models.UUIDField(default=uuid.uuid4)
    date_joined = models.DateTimeField(auto_now=True)
    total_amount_invested = models.IntegerField(default="0")
    roi = models.IntegerField(default="5")
    current_balance = models.IntegerField(default="0")
    bvn = models.IntegerField(default="0")
    jwt_secret = models.UUIDField(default=uuid.uuid4)

    def __str__(self):
        return self.user


    objects = MyUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin


def jwt_get_secret_key(UserPortfolio):
    return UserPortfolio.jwt_secret



class DepositModel(models.Model):
    """make reference number null = false after saving the refernce number from the payviews"""
    user = models.ForeignKey('UserPortfolio', on_delete=models.CASCADE)
    amount = models.IntegerField(default="0")
    date_in = models.DateTimeField(auto_now_add=True)
    reference_number = models.CharField(max_length=50, null=True)
    

    def __str__(self):
        return str(self.amount)


class ReturnsOnInvestments(models.Model):
    agriculture = models.IntegerField(default="5")

    def __str__(self):
        return str(self.agriculture)
