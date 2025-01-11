stri="hello world"
frequency={}
for char in stri:
    if(char==frequency):
    
        frequency[char]+=1
       
    else:
        frequency[char]=1  
print(frequency)