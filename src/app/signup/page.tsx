"use client";
import Link from "next/link";
import  {useState, useEffect } from "react";
import {useRouter} from "next/navigation";
import axios, { Axios } from "axios";
import {toast} from "react-hot-toast"
import React from "react";


export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            router.push("/login");
            
        } catch (error:any) {
            console.log("Signup failed", error.message);
            
            toast.error(error.message);
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);


    return (
        
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 place-items-center bg-violet-300 h-screen">
        <div className="bg-violet-100 p-8 rounded-md">
        <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{loading ? "Processing" : "Signup"}</h1>
        
        <hr />
        <form className="space-y-6" action="#" method="POST">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"> 
        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">username</label>
        <input 
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username"
            required
            />
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"> 
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">email</label>
        <input 
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            required
            />
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"> 
        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">password</label>
        <input 
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            required
            />
        </div>
            <button
            onClick={onSignup}
            className="flex min-w-80 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{buttonDisabled ? "No signup" : "Signup"}</button>
        </form>
        <div className="text-center pt-2 ">
            <Link href="/login" className="mt-10 text-center text-sm text-gray-800">Visit login here</Link>
        </div>
        </div>
        </div>
    )

}