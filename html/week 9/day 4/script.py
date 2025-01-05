for i in range(1, 6, 2):
    print(i)

num = 20
counter = 0

while counter <= num:
    print(counter)
    counter += 1
else:
    print("Loop completed without encountering a break statement")

while True:
    user_input = input("Enter \"quit\" to exit ")

    if user_input == "quit":
        break

numbers = [1, 2, 3, 4, 5]

for num in numbers:
    if num % 2 ==0:
        continue

    print(num)

print("Loop Exited")

# Activity 1
for i in range(1, 21):
    print(i)

# Activity 2
for i in range(20, 0, -1):
    print(i)

# Activity 3
str1 = "Hello World!"

for i in range(1, len(str1), 2):
    print(str1[i])

# Activity 4
nums1 = [1, 2, 3]

for num in nums1:
    print(num * 10)

# Activity 5
sum1 = 0

for i in range(1, 101):
    sum1 += i

print(sum1)

# Activity 6
nums2 = [1, 4, 3, 2, 5]

for num in nums2:
    if num % 2 == 0:
        print(num)

# Activity 7
for num in reversed(nums1):
    print(num)

# Activity 8
for i in range(1, 51):
    if i % 5 == 0:
        print(i)

# Activity 9
words = ["a", "b", "c"]
str2 = ""

for word in words:
    str2 += f"{word} "

print(str2)

# Activity 10
num = 5
result1 = 1

for i in range(1, num + 1):
    result1 *= i

print(result1)

# Activity 11
i = 0
num1 = int(input("Please enter a number: "))

while i < num1:
    i += 1

    print(i)

# Activity 12
i = 0
num2 = int(input("Please enter a number: "))

while i < num2:
    print(num2)

    num2 -= 1

# Activity 13
sum2 = 0
i = 0
num3 = int(input("Please enter a number: "))

while i < num3:
    i += 1
    sum2 += i

print(sum2)

# Activity 14
import random

num4 = random.randrange(1,11)

while True:
    num5 = int(input("Please enter a number:(1-10) "))
    if num5 == num4:
        print("Correct")
        break
    elif num5 < 1 or num5 > 10:
        print("Please enter a number between 1 to 10")
    else:
        print("Incorrect")

# Activity 15
correct_password = "password"

while True:
    input_password = input("Please enter the password: ")
    if correct_password == input_password:
        print("Correct")
        break
    else:
        print("Incorrect")

# Activity 16
i = 0
num6 = int(input("Please enter a number: "))

while i < 10:
    i += 1

    print(f"{num6} * {i} = {num6 * i}")

# Activity 17
i = 0
result2 = 1
num7 = int(input("Please enter a number: "))

while i < num7:
    i += 1
    result2 *= i

print(result2)

# Activity 18
i = 0
patterns = "\n"
num8 = int(input("Please enter a number: "))

while i < num8:
    i += 1
    patterns += f"{" " * (num8 - i)}{"*" * ((i - 1) * 2 + 1)}{" " * (num8 - i)}\n"

print(patterns)

# Activity 19
i = 0
str3 = ""
num9 = input("Please enter a number: ")
length = len(num9)

while i < length:
    length -= 1
    str3 += num9[length]

print(str3)

# Activity 20
i = 0
result3 = [0, 1]
num10 = int(input("Please enter a number: "))

while i < num10:
    i += 1

    if i == 1:
        continue

    result3.append(result3[i -2] + result3[i -1])

print(result3)