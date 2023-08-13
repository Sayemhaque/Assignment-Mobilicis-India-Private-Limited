"use client"
import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'
const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const router = useRouter()
     const handleLogin = async (data) => {
        const res = await axios.post('http://localhost:5000/login', data)
        console.log(res)
        if (res.data.user) {
            router.push("/dashboard/profile")
        }

    }
    const onSubmit = (data) => {
        handleLogin(data)
        console.log(data)
    }
    return (
        <div className="bg-white border border-gray-300 rounded-lg shadow-md p-8 max-w-xl mx-auto w-full">
            <h2 className="text-2xl font-semibold mb-4">User Registration</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        {...register('email')}
                        className="mt-1 px-4 py-2 block w-full border rounded-md focus:ring focus:ring-indigo-200"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        {...register('password')}
                        className="mt-1 px-4 py-2 block w-full border rounded-md focus:ring focus:ring-indigo-200"
                    />
                </div>
                <p>Dont have an account? <Link href='/registation'>Register</Link></p>
                <div className="flex justify-end">
                    <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">Register</button>
                </div>
            </form>
        </div>
    );
};

export default Login;