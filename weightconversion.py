import math
from datetime import datetime
lbs = 453.592
oz = 28.3495
date = datetime.now()
date_format =  '%s/%s/%s' % (date.month, date.day, date.year)
name = input("Name: ")
current_weight = float(input("Enter the weight in kg"))
kg_to_grams = current_weight * 1000

def lbs_conv():
    return math.trunc(kg_to_grams / lbs)

def ounces_conv():
    return math.trunc(math.floor(kg_to_grams - lbs_conv() * lbs) / oz)

def output():
    return "\n"+ name + " is: " + str(lbs_conv()) + " lbs " + str(ounces_conv()) + " ozs"

print(output(), "\nTodays date is: " + date_format)
