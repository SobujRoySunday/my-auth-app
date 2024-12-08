'use client';

import Link from 'next/link';
import { useState } from 'react';
import authService from '@/services/Authentication';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [formData, setFormData] = useState({ userid: '', password: '' });
    const router = useRouter();

    const handleLogin = async () => {
        const response = await authService.Login(formData.userid, formData.password);
        if (response.success) {
            router.push('/');
        } else {
            alert(response.message || 'Login Failed!');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-[url('/G12.jpg')] text-black">
            <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
                <h2 className="mb-6 text-2xl font-bold text-center">Sign In</h2>
                <input
                    type="text"
                    placeholder="User ID"
                    value={formData.userid}
                    onChange={(e) => setFormData({ ...formData, userid: e.target.value })}
                    className="w-full px-3 py-1 mb-4 border rounded-md"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-3 py-1 mb-4 border rounded-md"
                />
                <button onClick={handleLogin} className="w-full py-2 text-white bg-purple-700 rounded-md hover:bg-purple-600">
                    Sign In
                </button>
                <p className="mt-4 text-center">
                    Don&apos;t have an account? <Link href="/auth/signup" className="text-blue-500">Sign Up here</Link>
                </p>
            </div>
        </div>
    );
}
