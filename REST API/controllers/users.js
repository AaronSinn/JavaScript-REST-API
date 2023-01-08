//used for id generation
import { v4 as uuid } from 'uuid';

//array where we the user objects will be kept
let users = [
    
];

export const getUsers = ((req, res) =>{
    res.send(users);
});

export const createUsers = ((req, res) => {
    const user = req.body;
    
    //creates a new object with the properties of user and adds an id to it
    users.push({...user, id: uuid()});

    res.send(`User with the firstName: ${user.firstName}, lastname: ${user.lastName}, age: ${user.age} has been added to database`);
    console.log(`User with the firstName: ${user.firstName}, lastname: ${user.lastName}, age: ${user.age} has been added to database`);
});

export const updateUser = ((req, res) =>{
    //cycles through each element in the users array and returns the user with the correct id
    const user = users.find((user) => user.id === req.params.id);

    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.age = req.body.age;

    res.send(`firstName has been updated to: ${user.firstName}, lastname has been updated to: ${user.lastName}, age has been updated to: ${user.age} has been updated.`);
});

export const deleteUser = ((req, res) => {
    //can't use delete method because it will turn the user into null
    let count = 0;

    //iterates through the array to find a matching ID.
    for(let i = 0; i < users.length; i++){
        if(users[i].id === req.params.id){
            break;
        }
        count++;
    }
    //if no ID is found the funcion will send a message and return
    if(count == users.length){
        res.send("Invalid ID");
        return;
    }

    users = users.filter(user => user.id != req.params.id);
    
    res.send(`User with the id: ${req.params.id} has been deleted.`);
});