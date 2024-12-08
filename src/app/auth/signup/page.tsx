'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Authentication } from '@/services/Authentication';

export default function SignupPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        userID: '',
        headquarter: '',
        designation: '',
        email: '',
        mobileNumber: '',
        password: '',
        confirmPassword: '',
    });

    const handleSignup = async () => {
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        const auth = new Authentication();
        const response = await auth.Register(formData);
        if (response.success) {
            alert('Registration Successful!');
        } else {
            alert(response.message || 'Registration Failed!');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[url('/G12.jpg')] text-black py-4">
            <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
                <h2 className="mb-6 text-2xl font-bold text-center">Sign Up</h2>
                <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-3 py-1 mb-4 border rounded-md"
                />
                <input
                    type="text"
                    placeholder="Middle Name"
                    value={formData.middleName}
                    onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
                    className="w-full px-3 py-1 mb-4 border rounded-md"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-3 py-1 mb-4 border rounded-md"
                />
                <input
                    type="text"
                    placeholder="User ID"
                    value={formData.userID}
                    onChange={(e) => setFormData({ ...formData, userID: e.target.value })}
                    className="w-full px-3 py-1 mb-4 border rounded-md"
                />
                <input
                    type="text"
                    placeholder="Headquarter"
                    value={formData.headquarter}
                    onChange={(e) => setFormData({ ...formData, headquarter: e.target.value })}
                    className="w-full px-3 py-1 mb-4 border rounded-md"
                />
                <input
                    type="text"
                    placeholder="Designation"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full px-3 py-1 mb-4 border rounded-md"
                />
                <input
                    type="email"
                    placeholder="Email ID"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-1 mb-4 border rounded-md"
                />
                <input
                    type="text"
                    placeholder="Mobile Number"
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                    className="w-full px-3 py-1 mb-4 border rounded-md"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-3 py-1 mb-4 border rounded-md"
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full px-3 py-1 mb-4 border rounded-md"
                />
                <button onClick={handleSignup} className="w-full py-2 text-white bg-purple-800 rounded-md hover:bg-purple-600">
                    Sign Up
                </button>
                <p className="mt-4 text-center">
                    Already have an account? <Link href="/auth/login" className="text-blue-500">Sign In here</Link>
                </p>
            </div>
        </div>
    );
}
