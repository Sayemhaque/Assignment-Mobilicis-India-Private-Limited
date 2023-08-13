"use client"
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'
import Link from 'next/link';

const Registaion = () => {
    const router = useRouter()
    const { register, handleSubmit, reset } = useForm();
    const handleRegistation = async (data) => {
        const res = await axios.post('http://localhost:5000/registation', data)
        console.log(res)
        if (res.data.status === "ok") {
            router.push("/dashboard/profile")
        }

    }

    const onSubmit = (data) => {
        console.log(data.experienceCompany)
        const experienceCom = data.experienceCompany;
        const totalExperience = data.experienceYears
        const universityName = data.university;
        const deg = data.degree;

        const userData = {
            skills: [data.skills],
            experience: { experienceCom, totalExperience },
            education: { universityName, deg },
            ...data
        }
        console.log(userData)

        handleRegistation(userData)
        // reset() // All form data will be available here
    };

    return (
        <div className="bg-white border border-gray-300 rounded-lg shadow-md p-8 max-w-xl mx-auto w-full">
            <h2 className="text-2xl font-semibold mb-4">User Registration</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        type="text"
                        {...register('username')}
                        className="mt-1 px-4 py-2 block w-full border rounded-md focus:ring focus:ring-indigo-200"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">ProfilePhoto</label>
                    <input
                        type="text"
                        {...register('profilePhoto')}
                        className="mt-1 px-4 py-2 block w-full border rounded-md focus:ring focus:ring-indigo-200"
                    />
                </div>


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

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">About</label>
                    <textarea
                        {...register('about')}
                        className="mt-1 px-4 py-2 block w-full border rounded-md focus:ring focus:ring-indigo-200"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Skills</label>
                    <input
                        {...register('skills')}
                        className="mt-1 px-4 py-2 block w-full border rounded-md focus:ring focus:ring-indigo-200"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Professional Details</label>
                    <textarea
                        {...register('professionalDetails')}
                        className="mt-1 px-4 py-2 block w-full border rounded-md focus:ring focus:ring-indigo-200"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Certification</label>
                    <input
                        {...register('certification')}
                        className="mt-1 px-4 py-2 block w-full border rounded-md focus:ring focus:ring-indigo-200"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Experience Company</label>
                    <input
                        {...register('experienceCompany')}
                        className="mt-1 px-4 py-2 block w-full border rounded-md focus:ring focus:ring-indigo-200"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Experience Years</label>
                    <input
                        {...register('experienceYears')}
                        className="mt-1 px-4 py-2 block w-full border rounded-md focus:ring focus:ring-indigo-200"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">University</label>
                    <input
                        {...register('university')}
                        className="mt-1 px-4 py-2 block w-full border rounded-md focus:ring focus:ring-indigo-200"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Degree</label>
                    <input
                        {...register('degree')}
                        className="mt-1 px-4 py-2 block w-full border rounded-md focus:ring focus:ring-indigo-200"
                    />
                </div>
                <p>Already have an account? <Link href='/login'>Login</Link></p>
                <div className="flex justify-end">
                    <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">Register</button>
                </div>
            </form>
        </div>
    );
};

export default Registaion;
