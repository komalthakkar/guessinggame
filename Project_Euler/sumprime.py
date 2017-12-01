sum = 0
n=200000
for i in range(1,n):
    while n%i!=0:
        i=i+1
    if i==n:
        print(i)
        sum=sum+i
        n=n+1
print(sum)
