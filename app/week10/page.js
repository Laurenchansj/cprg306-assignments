"use client";

import { useUserAuth } from "./_utils/auth-context"
import Link from "next/link";


export default function Page() {

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <main className="bg-blue-100 p-5 h-screen">
            <header>
                <h1>Login Page</h1>
            </header>
            <section>
                {user ? (
                    <div>
                        <div className="w-1/5 border-8 border-stone-50 m-2 p-2">
                            <p className="m-4">Welcome, {user.displayName}</p>
                            <img src={user.photoURL} className="w-8 h-8 m-4"/>
                            <div className="h-px m-2"></div>
                            <Link className="text-lg m-2 p-2 text-black bg-blue-300 rounded-md hover:underline" href="week10/shopping-list">Continuing Your Shopping List</Link>
                            <div className="h-px m-2 mb-8"></div>
                        </div>
                        <button className="text-lg m-2 p-2 text-white bg-blue-500 rounded-md hover:underline" onClick={handleSignOut}>Sign Out</button>
                    </div>
                ) : (
                    <button className="text-lg m-2 p-2 text-white bg-blue-500 rounded-md hover:underline" onClick={handleSignIn}>Sign In</button> 
                )}
            </section>
        </main>
    )
}