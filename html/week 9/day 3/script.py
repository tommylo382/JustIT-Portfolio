name = input("What is your name: ")

def greet(name):
    print(f"Hello there {name}")

greet(name)

def create_greeting_card(occasion, name):
    if occasion == "birthday":
        print(f"Happy Birthday {name}")
    elif occasion == "christmas":
        print(f"Merry Christmas {name}")
    elif occasion == "new year":
        print(f"Happy New Year {name}")
    else:
        print(f"Please input birthday, christmas or new year")

occasion = input("What is the occasion:(birthday, christmas, new year) ").lower()

create_greeting_card(occasion, name)

num1 = int(input("Please enter the first number: "))
num2 = int(input("Please enter the second number: "))
operator = input("Please enter the operator:(+, -, *, /, ^, %, root) ")

def simple_calculator(num1, num2, operator):
    import math
    if operator == "+":
        print(f"{num1} {operator} {num2} = {num1 + num2}")
    elif operator == "-":
        print(f"{num1} {operator} {num2} = {num1 - num2}")
    elif operator == "*":
        print(f"{num1} {operator} {num2} = {num1 * num2}")
    elif operator == "/":
        if num2 == 0:
            print("Cannot divide by 0")
        else:
            print(f"{num1} {operator} {num2} = {num1 / num2}")
    elif operator == "^":
        print(f"{num1} {operator} {num2} = {num1 ** num2}")
    elif operator == "%":
        if num2 == 0:
            print("Cannot divide by 0")
        else:
            print(f"{num1} {operator} {num2} = {num1 % num2}")
    elif operator == "root":
        print(f"{num1}{"⎷"}{num2} = {num2 ** (1 / num1)}")
    else:
        print("Please input +, -, *, /, ^, % or root")

simple_calculator(num1, num2, operator)

# Challenges 1
password = input("Please input the password: ")

def check_password(password):
    if len(password) < 8:
        print("Password too short")
    else:
        print(f"Password: {password}")

check_password(password)

# Challenges 2
num1 = int(input("Please enter a number: "))

def check_divisibility(num):
    if num % 3 == 0 or num % 5 == 0:
        print(f"{num} is divisible by 3 or 5")
    else:
        print(f"{num} is not divisible by either 3 or 5")

check_divisibility(num1)

# Challenges 3
num2 = int(input("Please enter a number: "))

def fizz_buzz(num):
    if num % 3 == 0 and num % 5 == 0:
        print("fizzbuzz")
    elif num % 3 == 0:
        print("fizz")
    elif num % 7 == 0:
        print("buzz")
    else:
        print(num)

fizz_buzz(num2)

# Challenges 4
word = input("Please enter a string: ")

def is_palindrome(word):
    if word[0] == word[-1]:
        print(True)
    else:
        print(False)

is_palindrome(word)

# Challenges 5
time = int(input("Please enter the time: "))
time_of_work = int(input("Please enter the time start working: "))
time_of_home = int(input("Please enter the time stop working: "))

def where_am_i(time, time_of_work, time_of_home):
    if time < time_of_work - 1 or time > time_of_home + 1:
        print("I'm at home")
    elif time < time_of_work or time > time_of_home:
        print("I'm commuting")
    else:
        print("I'm at work")

where_am_i(time, time_of_work, time_of_home)

# Challenges 6
num3 = int(input("Please enter the first number: "))
num4 = int(input("Please enter the second number: "))

def check_sum(num1, num2):
    if (num1 + num2) % 2 == 0:
        print(f"The sum of {num1} and {num2} is a even number")
    else:
        print(f"The sum of {num1} and {num2} is not a even number")

check_sum(num3, num4)

# Challenges 7
num5 = input("Please enter a number: ")

def is_palindrome_number(num):
    palindrome = True

    for i in range(len(num)):
        if num[i] != num[-int(i) - 1]:
            palindrome = False

    if palindrome == True:
        print(f"{num} is a palindrome")
    else:
        print(f"{num} is not a palindrome")

is_palindrome_number(num5)

# Challenges 8
string = input("Please enter a string: ")

def last_vowel_index(string):
    index = 0
    for i in range(len(string)):
        if ((((((((string[i] == "a" or string[i] == "A") or string[i] == "e") or string[i] == "E") or string[i] == "i") or string[i] == "I") or string[i] == "o") or string[i] == "O") or string[i] == "u") or string[i] == "U":
            index = i

    print(f"The {index + 1}th character is the last vowel")

last_vowel_index(string)

# Activity 1
order_count = 0

def pizza_order():
    print("Pizza Order Function")

    while True:
        print("Choose an option:\n1. Take an order\n2. Exit")

        choice = input("Enter your choice: ")
        
        match choice:
            case "1":
                toppings = input("Please enter the toppings:(split by ,) ")

                if toppings.strip() == "":
                    print("Toppings cannot be empty")
                    continue
                else: 
                    toppings = toppings.split(", ")

                pizza_size = input("Please enter the size: ").lower()

                if (pizza_size != "small" and pizza_size != "medium") and pizza_size != "large":
                    print("Please enter small, medium or large")
                    continue

                customization = input("Please enter the customization: ")

                if customization.strip() == "":
                    customization = "no customization"

                take_order(pizza_size, customization, *toppings)
            case "2":
                break
            case _:
                print("Please enter 1 or 2")

def take_order(pizza_size, customization, *toppings):
    global order_count

    order_count += 1

    print(f"order {order_count}:\n-{", ".join(toppings)}\n-{pizza_size} pizza\n-{customization}")

pizza_order()

# Activity 2
class Account:
    def __init__(this, account_number, pin, balance):
        this.account_number = account_number
        this.pin = pin
        this.balance = balance
        this.logs = []

account1 = Account("0001", "1111", 10000.00)
account2 = Account("0002", "1111", 20000.00)

accounts = [account1, account2]

def cash_machine():
    print("Cash Machine Function")

    while True:
        print("Choose an option:\n1. Login\n2. Exit")

        choice = input("Enter your choice: ")
        
        match choice:
            case "1":
                account_number = input("Please enter your account number: ")

                if len(account_number) != 4:
                    print("Account number should be 4 digits long")
                    continue

                pin = input("Please enter your PIN: ")

                if len(pin) != 4:
                    print("PIN should be 4 digits long")
                    continue

                login(account_number, pin)
            case "2":
                break
            case _:
                print("Please enter 1 or 2")

def login(account_number, pin):
    exist = False

    for account in accounts:
        if account.account_number == account_number:
            exist = True

            if account.pin == pin:
                cash_machine_menu(account)
                break
            else:
                print("Worng PIN")
                break

    if exist == False:
        print("Account does not exist")

def cash_machine_menu(account):
    while True:
        print(f"Account: {account.account_number}\nChoose an option:\n1. Withdraw\n2. Change PIN\n3. Transaction History\n4. Exit")

        choice = input("Enter your choice: ")
        
        match choice:
            case "1":
                withdrawal_amount = input("Please enter the amount you want to withdrawal: ")

                if withdrawal_amount.strip() == "":
                    print("Withdrawal amount cannot be empty")
                    continue
                elif type(withdrawal_amount) == "str":
                    print("Please enter a number")
                    continue
                
                withdrawal_amount = float(withdrawal_amount)

                if withdrawal_amount > account.balance:
                    print(f"Balance to low({account.balance})")
                    continue

                cash_withdraw(account, withdrawal_amount)
            case "2":
                pin = input("Please enter the new PIN: ")

                if len(pin) != 4:
                    print("PIN should be 4 digits long")
                    continue
                else:
                    change_pin(account, pin)
            case "3":
                log(account)
            case "4":
                break
            case _:
                print("Please enter 1, 2, 3 or 4")

def cash_withdraw(account, withdrawal_amount):
    account.balance -= withdrawal_amount

    log = f"Withdrawaled {withdrawal_amount} form {account.account_number}(balance: {account.balance})"
    account.logs.append(log)

    print(log)

def change_pin(account, pin):
    account.pin = pin

    log = f"PIN has been changed(new PIN: {pin})"
    account.logs.append(log)

    print(log)

def log(account):
    print("Transaction History:")

    for log in account.logs:
        print(log)

cash_machine()