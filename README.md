# Homework Assignment Day 3

# Not Another Cart Project
## Step 1: Create A Typescript Project
- Create a node project but intializing npm your your project's folder
- Make it a Typescript Project by install TypeScript
- Configure your .tsconfig to align with our recommended options for this project
- Use npm to install uuid and the uuid types

## Step 2: Create Some Types

- Create a Type to describe a Item
   - id as a string
   - name as a string
   - price as an integer
   - description as a string

- Create a Type to describe a User
    - id as a string
    - name as a string
    - age as an integer
    - cart as an array of Items
    
## Step 3: Create some functions
- createUser
    - this function will return an object of type User.  It will autogenerate an UUID for the id.  It will require name, and age to be passed in as arguments.  It will also initialize an empty cart.

- createItem
    - this function will return an object of type Item.  It will autogenerate an UUID for the id.  It will require name, price, and description to be passed in as arguments.
    
- addToCart
    - this function will bring an object of Item Type and an User object and it will add the item to the users cart

- removeFromCart
    - this function will bring an object of Item Type and an User object and it will remove all the instances of the item to the users cart (so the cart would have zero of these items left)

- removeQuantityFromCart
    - this function will bring an object of Item Type and an User object and a quantity of the item to remove and it will remove the quantity amount of instances of the item to the users cart (so if the cart had 5 red hats and we pass inthe red hat item and the number 3 for the quantitiy we would end up with 2 red hats left in the cart)

- cartTotal
    - this function will calculate the total price of all items in our cart and RETURNS that value

- printCart
    - this function will take a user and console log the items in the users cart 

## Step 4: Create Driver Code to emulate a front end user
- use the functions created to accomplish these tasks in order
- Create a User
- Create 3 Items to Sellfor this example we will call them Item A Item B and Item C (you can name them anything that make sense)
- Add Item A to the users Cart
    - print the contents of the user's cart 
    - print the Total of the user's cart
- Add 3 Item B to the users Cart
    - print the contents of the user's cart 
    - print the Total of the user's cart
- Add 3 Item c to the users Cart
    - print the contents of the user's cart 
    - print the Total of the user's cart
- Use your remove (not remove by Quantity  function) to remove all of Item B from your cart
    - print the contents of the user's cart 
    - print the Total of the user's cart
- Use your remove Quantity  function to remove 2 of Item C from the user's cart
    - print the contents of the user's cart 
    - print the Total of the user's cart

- Verify all functions work as expected, if they don't figure out why not and fix your functions.
