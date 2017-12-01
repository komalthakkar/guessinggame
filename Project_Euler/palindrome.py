upper_limit = 0
for i in range(1,3):
    upper_limit *= 1000
    upper_limit += 999
lower_limit = 1 + upper_limit/10
m_p = 0
for i in range(999,100,-1):
    for j in range(999,100,-1):
        prod = i*j
        if prod < m_p:
            break
        no = prod
        rev = 0
        while no!= 0:
            rev = rev*10 + no%10
            no/= 10
        if prod == rev and prod > m_p:
            m_p = prod
print "the max prod is", m_p