def twos_difference(lst): 
    new_lst=[]
    for i in lst:
        for j in lst:
            if (j-i==2):
                new_lst.append((i,j))
    new_lst.sort()
    return(arr_lst)
