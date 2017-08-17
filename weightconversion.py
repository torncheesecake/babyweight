import math, json, time
from datetime import datetime

lbs = 453.592
oz = 28.3495
date = datetime.now()
date_format =  '%s/%s/%s' % (date.month, date.day, date.year)

while True:
    name = input("Name: ")
    if name == 'Oliver' or name == 'Ethan':
        print("Hello " + name)
        break
    else:
        print("Sorry that name can\'t be processed, please try again...")

current_weight = float(input("Enter the weight in kg: "))
kg_to_grams = current_weight * 1000

def lbs_conv():
    return math.trunc(kg_to_grams / lbs)

def ounces_conv():
    return math.trunc(math.floor(kg_to_grams - lbs_conv() * lbs) / oz)

def output():
    return "\n"+ name + " is: " + str(lbs_conv()) + " lbs " + str(ounces_conv()) + " ozs"

print("\nTodays date is: " + date_format  + output())

time.sleep(5)

results = (
{
    'date_today': date_format,
    'name': name,
    'lbs': lbs_conv(),
    'ozs': ounces_conv()
})
with open('weights.json', 'a') as save:
    json.dump(results, save, indent = 4)
    save.close()
print("Saved to file")
