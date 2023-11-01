"use client";

import { useUserAuth } from "./_utils/auth-context"


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
        <main className="bg-blue-100 pt-2 pb-2 h-screen">
            <header>
                <h1>Login Page</h1>
            </header>
            <section>
                {user ? (
                    <div>
                        <p>Welcome, {user.displayName}</p>
                        <img src={user.photoURL} className="w-8 h-8"/>
                        <button className="text-lg m-2 p-2 text-white bg-blue-500 rounded-md hover:underline" onClick={handleSignOut}>Sign Out</button>
                    </div>
                ) : (
                    <button className="text-lg m-2 p-2 text-white bg-blue-500 rounded-md hover:underline" onClick={handleSignIn}>Sign In</button> 
                )}
            </section>
        </main>
    )
}