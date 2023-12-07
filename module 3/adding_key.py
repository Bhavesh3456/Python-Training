d1={'a':3,'b':5}
d2={'a':4,'b':4}
d3={}

for keys in d1:
    d3[keys]=d2[keys]+d1[keys]
    print(d3[keys])
