# print("Hello World")

name = input("What is your name?\n")
print(f"Hi {name}")

boolean = True
print(boolean)

null = None
print(null)

num = int(input("Input a number\n"))
print(f"Your number is {num}")

print(" O |   | X\n-----------\n   | O | X\n-----------\n   | X |")

first_name = input("What is your first name?\n").title()
last_name = input("What is your last name?\n").title()
# print(first_name + " " + last_name)
print(f"My first name is {first_name} and my last name is {last_name}")

print("upper".upper())
print("LOWER".lower())
print("hello world".title())

print("Hello World".find("World"))

print("Hello World".replace("World", first_name))

print("hello world".capitalize())

print("hello hello hello".count("hello"))

print("hello world".endswith("world"))

print("hello world".index("world"))

arr = ["hello", "world"]
print(" ".join(arr))

print("hello, world".partition(", "))

print("hello, world".split(", "))

print("hello world".startswith("h"))

print("         hello world       ".strip())

print("Hello World".swapcase())

x = 5
x += 5
print(x)

# Q1
print(5 + 7)

# Q2
print(10 * 3)

# Q3
print(15 / 4)

# Q4
print(20 % 6)

# Q5
print(9 ** 2)

# Activity 2
# Part 1
from datetime import datetime
current_year = datetime.now().year

full_name = input("Full Name: ")
birth_year = int(input("Birth Year: "))
fav_decimal_num = float(input("Favorite Decimal Number: "))
sentence = input("Why You Enjoy Learning Python: ")

print(f"Your age is {current_year - birth_year}, length of your full name is {len(full_name)}")

# Part 2
print(f"Your favorite number multiplied by 5 is {fav_decimal_num * 5}")

import math
print(f"The square root of your favorite number is {math.sqrt(fav_decimal_num)}")

print(f"Your favorite number rounded to two decimal places is {round(fav_decimal_num, 2)}")

# Part 3
print(f"Your sentence in uppercase: {sentence.upper()}")

print(f"Your sentence in lowercase: {sentence.lower()}")

print(f"Your sentence has {len(sentence.split(" "))} words")

if "excited" in sentence:
    exist = "Yes"
else:
    exist = "No"

print(f"Does your sentence mention 'excited'? {exist}")

print(f"Updated sentence: {sentence.replace("Python", "coding")}")

# Part 4
print(f"Summary of Your Details:\n- Full Name: {full_name}\n- Name Length: {len(full_name)} characters\n- Age: {current_year - birth_year} years\n- Favorite Number: {fav_decimal_num}\n* Multiplied by 5: {fav_decimal_num * 5}\n* Square Root: {math.sqrt(fav_decimal_num)}\n- Sentence Analysis:\n* Original: \"{sentence}\"\n* Words: {len(sentence.split(" "))}\n* Contains 'excited': {exist}\n* Updated: \"{sentence.replace("Python", "coding")}\"")

# Bonus Challenge
exit = False
while exit == False:
    print("Choose an option:\n1. View Personal Details\n2. Perform Mathematical Operations\n3. Analyze Your Sentence\n4. Exit")

    choice = input("Enter your choice: ")
    
    match choice:
        case "1":
            print(f"Your Details:\n- Full Name: {full_name}\n- Name Length: {len(full_name)} characters\n- Age: {current_year - birth_year} years\n- Favorite Number: {fav_decimal_num}\n")
        case "2":
            print(f"Your Favorite Number: {fav_decimal_num}\n* Multiplied by 5: {fav_decimal_num * 5}\n* Square Root: {math.sqrt(fav_decimal_num)}\n")
        case "3":
            print(f"Sentence Analysis:\n* Original: \"{sentence}\"\n* Words: {len(sentence.split(" "))}\n* Contains 'excited': {exist}\n* Updated: \"{sentence.replace("Python", "coding")}\"\n")
        case "4":
            exit = True
        case _:
            print("Invalid input\n")