import uniqid from 'uniqid';
import { ref, set , get } from "firebase/database";
import { database } from "../Database/firebase.js";

async function HandleSetUser(username, password, pos) {
    const id = uniqid();
    const userRef = ref( database , `user/${id}` )

    const allUsers = (await get( ref( database , "user" ) )).val()
    const result = Object.values(allUsers)
    .filter( ( v ) => (
        v.username == username &&
        v.password == password &&
        v.position == pos
    ) )

    if( result || result.length != 0 ){
        alert("User already exists")
        window.location.href = "/login"
    }

    const newUser = {
        _id: id,
        username: username,
        password: password, 
        position: pos
    };

    await set( userRef , newUser)
        .then(() => {
            alert("User Created");
        })
        .catch((err) => {
            console.error("Error creating user:", err);
        });
}

async function HandleGetUser( username , password , pos ) {
    const userRef = ref( database , "user" )
    const AllUsers = await (await get(userRef)).val()
    const result = Object.values( AllUsers )
    .filter( ( v ) => (
        v.username == username &&
        v.password == password &&
        v.position == pos
    ) )
    if( !result || result.length == 0 ){
        alert("User not found")
    } 
    window.location.href = "/"
}

export {
    HandleSetUser,
    HandleGetUser
}