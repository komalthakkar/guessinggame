def fib():
    a=1
    b=2
    total=0
    while a<4000000:
        a=b
        b=a+b
        if a%2==0:
            total=total+a
    return total
print (fib())