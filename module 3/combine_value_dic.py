d1={'item':'item1','amount':400},{'item':'item2','amount':300},{'item':'item1','amount':750}
d={}

for add in d1:
    item=add['item']
    amount=add['amount']

    if item in d:
        d[item] += amount
    else:
        d[item] = amount
    
print(d)
        
