def common_list(l1,l2):
    result=False
    for x in l1:
        for y in l2:
            if x==y:
                result=True
                return result
print(common_list([1,2,3,4],[4,5,6,7]))
    