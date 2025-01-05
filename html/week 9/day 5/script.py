import random

hr = f"\n{"-" * 30}\n"

locations = []
location_list = ["Forest", "Cave", "Castle", "Village"]
npc_list = ["npc_forest", "npc_cave", "npc_castle", "npc_village"]

class Player:
    def __init__(this, name):
        this.name = name
        this.max_hp = 20
        this.hp = 20
        this.attack = 5
        this.moves = ["Attack", "Defend", "Escape"]

class Npc:
    def __init__(this, name, line):
        this.name = name
        this.line = line

class Quest:
    def __init__(this, name):
        this.name = name
        this.monster = None

class Monster:
    def __init__(this, name):
        this.name = name
        this.hp = random.randrange(5,21)
        this.attack = random.randrange(1,6)
        this.moves = ["Attack"]

class Location:
    def __init__(this, name, i):
        this.name = name
        this.npc = Npc(npc_list[i], f"Welcome to the {name.lower()}, what can I help you")
        this.quests = [Quest(f"{name} quest")]

for i, location in enumerate(location_list):
    locations.append(Location(location, i))

player = Player("")

def game():
    print(f"Journey to The Python Kingdom\n{hr}")

    create_player()

    menu()

def create_player():
    while True:
        name = input("Please enter your name: ")

        while True:
            yes_no = input(f"Is {name} your name?(yes/no) ").lower()
            if ((yes_no == "yes" or yes_no == "y") or yes_no == "no") or yes_no == "n":
                break
            else:
                print("Please enter yes or no")

        if yes_no == "yes" or yes_no == "y":
            break

    player.name = name

    print(f"{hr}\nWelcome to the Python Kingdom, {name}\n")

def menu():
    while True:
        print("Where do you want to go(enter the number)")

        for i, location in enumerate(locations):
            print(f"{i + 1}. {location.name}")

        print(f"{i + 2}. Exit Game")

        try:
            destination = int(input("\n"))
        except:
            print(f"Please enter a number form 1 to {len(locations) + 1}")

        if destination < 1 or destination > len(locations) + 1:
            print(f"Please enter a number form 1 to {len(locations) + 1}")

            continue
        elif destination == len(locations) + 1:
            print(f"\nGood bye, {player.name}\n")

            break

        print(hr)

        location_func(locations[destination - 1])

        break


def location_func(destination):
    while True:
        print(f"{destination.name}\n\n{destination.npc.name}: {destination.npc.line}\n\nWhat do you want to do(enter the number)")

        for i, quest in enumerate(destination.quests):
            print(f"{i + 1}. {quest.name}")

        print(f"{i + 2}. Back")

        try:
            option = int(input("\n"))
        except:
            print(f"Please enter a number form 1 to {len(destination.quests) + 1}")

        if option < 1 or option > len(destination.quests) + 1:
            print(f"Please enter a number form 1 to {len(destination.quests) + 1}")

            continue
        elif option == len(destination.quests) + 1:
            print(hr)

            menu()

            break

        print(hr)

        gameover = quest_func(destination.quests[option - 1])

        if gameover == True:
            game()

            break

def quest_func(quest):
    monster = Monster(f"{quest.name.capitalize()} monster")

    print(f"{quest.name}\n\n{monster.name} appear\n")

    while True:
        print(f"{player.name}'s hp: {player.hp}\n{monster.name}'s hp: {monster.hp}\n\nChoose a move(enter the number)")

        for i, move in enumerate(player.moves):
            print(f"{i + 1}. {move}")

        try:
            move = int(input("\n"))
        except:
            print(f"Please enter a number form 1 to {len(player.moves)}")

        if move < 1 or move > len(player.moves):
            print(f"Please enter a number form 1 to {len(player.moves)}")

            continue
        elif player.moves[move - 1] == "Escape":
            run = random.randrange(1,3)

            if run == 1:
                print("\nFail to escape")
            else:
                print(f"\nEscape successfully\n{hr}")
            
                player.hp = player.max_hp
                
                return False
        elif player.moves[move - 1] == "Attack":
            monster.hp -= player.attack

            print(f"\n{player.name} attack for {player.attack} damage\n")

            if monster.hp <= 0:
                print(f"{player.name} have defeated {monster.name.lower()}\n{hr}")

                player.hp = player.max_hp

                return False
            
        if player.moves[move - 1] == "Defend":
            player.hp -= round(monster.attack / 2)
            
            print(f"\n{player.name} take {round(monster.attack / 2)} damage\n")
        else:
            player.hp -= monster.attack

            print(f"\n{player.name} take {monster.attack} damage\n")

        if player.hp <= 0:
            print(f"{player.name} died\n{hr}{"GAME OVER".center(30)}{hr}")

            return True
        
game()