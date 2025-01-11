t="my name is okay and okay"
words=t.split()
w={}
for count in words:
    if(count in w):
        w[count]+=1
    else:
        w[count]=1
print(w)