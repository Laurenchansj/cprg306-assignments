"use client";

import { addNewItem, getItemList } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context"


export default function Page() {

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    if (user) {
        const items = getItemList(user.uid); 
        console.log(items);
    }

    let newItem = {
        name: 'Onions',
        category: 'Produce',
        quantity: 4,
    };
    
    


    return (
        <main className="bg-blue-100 pt-2 pb-2 h-screen">
            <header>
                <h1>Protected Page</h1>
            </header>
            <section>
                { user ? (
                    <div>
                        <p>You are logged in! This page is protected!</p>
                        <button className="text-lg m-2 p-2 text-white bg-blue-500 rounded-md hover:underline" onClick={ ()=> addNewItem(user.uid, newItem)}> Add Test Item </button>
                    </div>
                    
                ) : (
                    <p>You must be logged in to view this page.</p>
                )}
            </section>
        </main>
    );
}