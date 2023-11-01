"use client";

import { useUserAuth } from "../_utils/auth-context"


export default function Page() {

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();



    return (
        <main className="bg-blue-100 pt-2 pb-2 h-screen">
            <header>
                <h1>Protected Page</h1>
            </header>
            <section>
                { user ? (
                    <p>You are logged in! This page is protected!</p>
                ) : (
                    <p>You must be logged in to view this page.</p>
                )}
            </section>
        </main>
    );
}