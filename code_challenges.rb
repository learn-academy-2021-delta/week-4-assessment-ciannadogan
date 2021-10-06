# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def is_even_odd = num1, num2, num3 
    if num1 %2 ==0
        p "#{num1} is odd'
    elsif num1 %2 ==1
        p "#{num1} is even"
    end
end


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

p album1.delete "aeiou"
p album2.delete "aeiou"
p album3.downcase.delete "aeiou"



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def is_palindrome = 'racecar'
    if is_palindrome = is_palidrome.reverse
        'racecar is a palidrome'
    elsif
        'racecar is not a palindrome'
    end
end

def is_palindrome = 'LEARN'
    if is_palindrome = is_palidrome.reverse
        'LEARN is a palidrome'
    elsif
        'LEARN is not a palindrome'
    end
end

def is_palindrome = 'rotator'
    if is_palindrome = is_palidrome.reverse
        'rotator is a palidrome'
    elsif
        'rotator is not a palindrome'
    end
end
