#f=open("tops.txt","r")

#print(f.read())
#f.close()

#f=open("tops.txt","a")
#f.write("good morning")
#f.close()

#f=open("tops.txt","r")
#print(f.readlines()[0])
#f.close()

#f=open("tops.txt","r")
#print(f.readlines()[-1])
#f.close()

#f=open("tops.txt","r")
#line=len(f.readlines())
#print("no of line in file are : ",line)

#f=open("tops.txt","r")
#print(f.read())
#f.close()

f=open("tops.txt","w")
l1=["yes","no","both"]
f.writelines(l1)
f.close()