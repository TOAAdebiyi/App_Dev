class person:
    def _int_(self, name, age):
        self.name =name
        self.age = age
        
        # object method
        def printObject(self):
            print(f"Hello! my name is {self.name}")
            
            # create an object and initialize values:
            person1 = person("john", 30)
            print(f'object name - {person1.name}')
            print(f'object age = {person1.age}')
            
            # printing an object method
            
            print(f'\n{person1.printObject()}')
            
            # Delete properties using delkeyword
            del person1.name
            
            # pass statement is used to pass an empty class
            class House:
                pass
            
            print(f'print {House}')
            
            print('\n ------- class chair ----------')
            print(' -------------------------\n')
            
            class Chair:
                def _init_(self, height, width, lenght):
                    
            