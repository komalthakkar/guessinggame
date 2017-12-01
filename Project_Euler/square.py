import math
sum=0
sum1=0
diff=0
for i in range(1,101):
    i=i*i
    sum=sum+i
print(sum)
for i in range(1,101):
    sum1=sum1+i
    math.pow(sum1,2)
print(math.pow(sum1,2))
diff=math.pow(sum1,2) - sum
print(diff)