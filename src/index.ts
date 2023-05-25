import {v4 as uuidv4} from "uuid";

class Item {
    id: string,
    name: string,
    price: int,
    description: string
};

class User {
    id: string,
    name: string,
    age: int,
    cart: items[]
};

function createUser() {}
