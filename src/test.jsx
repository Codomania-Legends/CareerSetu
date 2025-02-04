import React from 'react';
import { ref, set } from 'firebase/database';
import { database } from './Database/firebase';

function addToDatabase() {
    set(ref(database, "custom-app"), { name: "Anshul Vishwa" })
        .then(() => {
            alert("Data Injected");
        })
        .catch((err) => {
            console.error("Error writing to database:", err);
        });
}

function TestData() {
    return (
        <button onClick={addToDatabase}>Test</button>
    );
}

export default TestData;
