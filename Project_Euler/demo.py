def isPalindrome(num):
    return str(num) == str(num)[::-1]
def largest(bot, top):
    for x in range(top, bot, -1):
        for y in range(top,bot, -1):
            if isPalindrome(x*y):
                return x*y
print largest(100,999)