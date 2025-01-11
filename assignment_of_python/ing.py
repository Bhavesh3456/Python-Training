user=input("enter your words")
if(len(user)==3 or len(user)>3):
    if(user.endswith("ing")):
        print(user+"ly")
    else:
        print(user+"ing")
else:
    print(user)