"""
Terence Olayinka Adebiyi
Aug 31, 2023: Python Classes
"""

print('\n-------Class Person--------')
print('\n-----------------------------\n')
    
# create a class, Class Name is always capitalized

class MyClass:
    num = 5
    
    # create an object for class MyClass
    
p1 = MyClass()
print(p1)
print(f'\nobject num = {p1.num}')
    
#: The__init__()function is called automatically every time the is being used to create a new object.

# The self parameter is a reference to the current instance of the class and is used to access variables that belongs to the class.


class person:
    def __init__(self, name, age):
        self.name = name
        self.age = age 
        
        
        # Objects Method
        
    def printObject(self):
            print(f'Hello my name is {self.name}')
        

# create an object and initialize values:

person1 = person("john", 30)
print(f'object name = {person1.name}')
print(f'object age = {person1.age}')

#printing an object method:

print(f'\n{person1.printObject()}')

# Delete Properties using del keyword

print(f"name = {person1.name}")

del person1.name 

# pass statement is used to pass an empty class:

class House:
    pass
    print(f"print {House}")
    
#  print('\n-------Class Animal--------')
#  print('\n-----------------------------\n')
    
    print('\n-------Class Chair-------')
    print('\n-----------------------------\n')
    
    class Chair:
        
        # accessible properties
        
        chair_color = 'brown'
        
        def __init__(self, height, width, lenght):
            self.height = height 
            self.__width = width  # __ makes it a very private property
            self.lenght = lenght
            
            self.lenght *2
            
            # define a method to print result:
            
        def print_result(self):
                print(f'The height of the chair is : {self.height}')
                
        # pass the height
        def  get_height(self):
            return self.height
        
        # pass the accessible property:
        
        def get_color(self):
            return self.chair_color
        
        # update class values:
        
        def set_price(self, price):
            self._price = price  # _ makes a private property
                
        # initialize an object for class Chair
        
        chair1 = Chair(12, 30, 10)
        chair1.print_result()
        
        print(f'The chair height is {chair1.get_height()}')
        print(f'The chair color is: {chair1.get_color()}')
        
        # update the price data:
        chair1.set_price(25)
        print(f'chair price {chair1._price}')
        print(f'\nVery private width = {chair1.__width}')  # makes it very private, wont show
        
                
                