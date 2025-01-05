voting_age = 18
age = int(input("Please enter your age: "))

if age >= voting_age:
    print("You can vote")
else:
    print("You cannot vote")

drinking_age = 18

if age >= drinking_age:
    print("You can drink")
else:
    print("You cannot drink")

unit = input("Please enter the temperature scale:(F/C) ")
temperature = int(input("Please enter the temperature: "))
weather = input("Please enter raining or not:(yes/no) ")
wind_speed = int(input("Please enter the wind speed: "))

if unit == "F":
    if temperature >= 32:
        print("It is above freezing!")

        if weather == "yes":
            print("It is raining!")

            if wind_speed >= 6:
                print("It is Breezy!")
            elif wind_speed >= 1:
                print("It is Windy!")
            else:
                print("It is Calm!")
        else:
            print("It is not raining!")

            if wind_speed >= 6:
                print("It is Breezy!")
            elif wind_speed >= 1:
                print("It is Windy!")
            else:
                print("It is Calm!")
    else:
        print("It is below freezing!")

        if weather == "yes":
            print("It is raining!")

            if wind_speed >= 6:
                print("It is Breezy!")
            elif wind_speed >= 1:
                print("It is Windy!")
            else:
                print("It is Calm!")
        else:
            print("It is not raining!")

            if wind_speed >= 6:
                print("It is Breezy!")
            elif wind_speed >= 1:
                print("It is Windy!")
            else:
                print("It is Calm!")
elif unit == "C":
    if temperature >= 0:
        print("It is above freezing!")

        if weather == "yes":
            print("It is raining!")

            if wind_speed >= 6:
                print("It is Breezy!")
            elif wind_speed >= 1:
                print("It is Windy!")
            else:
                print("It is Calm!")
        else:
            print("It is not raining!")

            if wind_speed >= 6:
                print("It is Breezy!")
            elif wind_speed >= 1:
                print("It is Windy!")
            else:
                print("It is Calm!")
    else:
        print("It is below freezing!")

        if weather == "yes":
            print("It is raining!")

            if wind_speed >= 6:
                print("It is Breezy!")
            elif wind_speed >= 1:
                print("It is Windy!")
            else:
                print("It is Calm!")
        else:
            print("It is not raining!")

            if wind_speed >= 6:
                print("It is Breezy!")
            elif wind_speed >= 1:
                print("It is Windy!")
            else:
                print("It is Calm!")
else:
    print("Please enter F or C to continue")

# Activity 1
num1 = int(input("Please enter a number: "))

if num1 > 0:
    print("The number is positive")
elif num1 == 0:
    print("The number is zero")
else:
    print("The number is negative")

# Activity 2
num2 = int(input("Please enter a number: "))

if num2 % 2 == 0:
    print(f"{num2} is a even number")
else:
    print(f"{num2} is a odd number")

# Activity 3
num3 = int(input("Please enter the first number: "))
num4 = int(input("Please enter the second number: "))

if num3 > num4:
    print(f"{num3} is larger than {num4}")
elif num3 == num4:
    print("Two numbers are equal")
else:
    print(f"{num4} is larger than {num3}")

# Activity 4
year = int(input("Please enter a year: "))

if year % 4 == 0:
    print(f"{year} is a leap year")
else:
    print(f"{year} is a not leap year")

# Activity 5
score = int(input("Please enter your score: "))

if score >= 90:
    print("Your grade is A")
elif score >= 80:
    print("Your grade is B")
elif score >= 70:
    print("Your grade is C")
elif score >= 60:
    print("Your grade is D")
else:
    print("Your grade is F")

# Activity 6
age = int(input("Please enter your age: "))

if age >= 65:
    print("Your are a Senior")
elif score >= 18:
    print("Your are an Adult")
elif score >= 13:
    print("Your are a Teenager")
else:
    print("Your are a Child")

# Activity 7
temperature = int(input("Please enter the temperature: "))

if temperature >= 20:
    print("You should go outside")
else:
    print("You should stay at home")

# Activity 8
num5 = int(input("Please enter a number: "))

if num5 % 5 == 0 and num5 % 10 == 0:
    print(f"{num5} is divisible by both 5 and 10")
elif num5 % 10 == 0:
    print(f"{num5} is divisible by 10")
elif num5 % 5 == 0:
    print(f"{num5} is divisible by 5")
else:
    print(f"{num5} is not divisible by either 5 or 10")

# Activity 9
num6 = int(input("Please enter the first number: "))
num7 = int(input("Please enter the second number: "))
operator = input("Please enter the operator:(+, -, *, /) ")

if operator == "+":
    print(f"{num6} {operator} {num7} = {num6 + num7}")
elif operator == "-":
    print(f"{num6} {operator} {num7} = {num6 - num7}")
elif operator == "*":
    print(f"{num6} {operator} {num7} = {num6 * num7}")
elif operator == "/":
    print(f"{num6} {operator} {num7} = {num6 / num7}")
else:
    print("Invalid input")

# Activity 10
num8 = int(input("Please enter a number: "))
lower_range = int(input("Please enter the lower range: "))
upper_range = int(input("Please enter the upper range: "))

if lower_range > upper_range:
    print("Error: lower ranage is larger than upper range")
elif num8 >= lower_range and num8 <= upper_range:
    print(f"{num8} is between {lower_range} and {upper_range}")
elif num8 < lower_range:
    print(f"{num8} is smaller than {lower_range}")
else:
    print(f"{num8} is larger than {upper_range}")

# Challenges 1
password = input("Please input the password: ")

if len(password) < 8:
    print("Password too short")
else:
    print(f"Password: {password}")

# Challenges 2
num9 = int(input("Please enter a number: "))

if num9 % 3 == 0 or num9 % 5 == 0:
    print(f"{num9} is divisible by 3 or 5")
else:
    print(f"{num9} is not divisible by either 3 or 5")

# Challenges 3
num10 = int(input("Please enter a number: "))

if num10 % 3 == 0 and num10 % 5 == 0:
    print("fizzbuzz")
elif num10 % 3 == 0:
    print("fizz")
elif num10 % 7 == 0:
    print("buzz")
else:
    print(num10)

# Challenges 4
word = input("Please enter a string: ")

if word[0] == word[-1]:
    print(True)
else:
    print(False)

# Challenges 5
time = int(input("Please enter the time: "))
time_of_work = int(input("Please enter the time start working: "))
time_of_home = int(input("Please enter the time stop working: "))

if time < time_of_work - 1 or time > time_of_home + 1:
    print("I'm at home")
elif time < time_of_work or time > time_of_home:
    print("I'm commuting")
else:
    print("I'm at work")

# Challenges 6
num11 = int(input("Please enter the first number: "))
num12 = int(input("Please enter the second number: "))

if (num11 + num12) % 2 == 0:
    print(f"The sum of {num11} and {num12} is a even number")
else:
    print(f"The sum of {num11} and {num12} is not a even number")

# Challenges 7
num13 = input("Please enter a number: ")
palindrome = True

for i in range(len(num13)):
    if num13[i] != num13[-int(i) - 1]:
        palindrome = False

if palindrome == True:
    print(f"{num13} is a palindrome")
else:
    print(f"{num13} is not a palindrome")

# Challenges 8
string = input("Please enter a string: ")

for i in range(len(string)):
    if ((((((((string[i] == "a" or string[i] == "A") or string[i] == "e") or string[i] == "E") or string[i] == "i") or string[i] == "I") or string[i] == "o") or string[i] == "O") or string[i] == "u") or string[i] == "U":
        index = i

print(f"The {index + 1}th character is the last vowel")