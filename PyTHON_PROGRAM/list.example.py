subject_list=[]

status=True

while status:
    subject_name=input("enter subject name:")
    subject_list.append(subject_name)
    choice=input("do you want to add more subject or press y for yes and press n for no")
    if choice=='y' or choice== 'Y':
       staus=True
    else:
        staus=False
        print(subject_list)
        
        