import {v4 as uuidv4} from 'uuid';

type Item = {
    id: string,
    name: string,
    price: number,
    description: string
};

type User = {
    id: string,
    name: string,
    age: number,
    cart: Item[]
};

function createUser(name: string, age: number): User {
    const user: User = {
        id: uuidv4(),
        name,
        age,
        cart: []
    };

    return user;
}

function createItem(name: string, price: number, description: string): Item {
    const item: Item = {
        id: uuidv4(),
        name,
        price,
        description
    };

    return item;
}

function addToCart(item: Item, user: User): void {
    user.cart.push(item);
}

function removeFromCart(item: Item, user: User):void {
    user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
}

function removeQuantityFromCart(item: Item, quantity: number, user: User): void {
    const itemIndex = user.cart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex !== -1) {
        if (user.cart[itemIndex].quantity <= quantity) {
            user.cart.splice(itemIndex,1);
        } else {
            user.cart[itemIndex].quantity -= quantity;
        }
    }
}

function cartTotal(user: User):number {
    let total = 0;
    for (const item of user.cart) {
        total += item.price;
    }
    return total;
}

function printCart(user: User):void {
    console.log(`User: ${user.name}'s Cart:`);
    for (const item of user.cart) {
        console.log(`- ${item.name} (${item.price}$)`)
    }
}
            
const user = createUser("Lois Griffin", 44);

const itemA = createItem("Item A", 10, "Description for Item A");
const itemB = createItem("Item A", 10, "Description for Item B");
const itemC = createItem("Item A", 10, "Description for Item C");

addToCart(itemA, user);
console.log("User's Cart:");
printCart(user);
console.log("Cart Total:", cartTotal(user));

for (let i = 0; i < 3; i++) {
    addToCart(itemB, user);
}
addToCart(itemB, user);
console.log("User's Cart:");
printCart(user);
console.log("Cart Total:", cartTotal(user));

for (let i = 0; i < 3; i++) {
    addToCart(itemC, user);
}
addToCart(itemB, user);
console.log("User's Cart:");
printCart(user);
console.log("Cart Total:", cartTotal(user));

removeFromCart(itemB, user);
console.log("User's Cart:");
printCart(user);
console.log("Cart Total:", cartTotal(user));

removeQuantityFromCart(itemC, 2, user);
console.log("User's Cart:");
printCart(user);
console.log("Cart Total:", cartTotal(user));
