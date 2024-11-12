"use client"

import { Button } from "./ui/button"
import Link from "next/link"
export default function SignupFormClient()
{
    return(
        
            <div className="w-full max-w-xs mx-auto mt-20">
                <form action="" className="bg-white dark:bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="my-3">
                        <label htmlFor="userName" className="block text-gray-600 text-sm font-bold mb-2">اسم المستخدم:</label>
                        <input className="border rounded w-full p-3 text-gray-600" id="userName" type="text" name="userName" placeholder="اسم المستخدم" />
                    </div>

                    <div className="my-3">
                        <label htmlFor="email" className="block text-gray-600 text-sm font-bold mb-2">الربيد الالكتروني:</label>
                        <input className="border rounded w-full p-3 text-gray-600" id="email" type="email" name="email" placeholder="البريد الالكتروني" required />
                    </div>

                    <div className="my-3">
                        <label htmlFor="password" className="block text-gray-600 text-sm font-bold mb-2">كلمة المرور:</label>
                        <input className="border rounded w-full p-3 text-gray-600" id="password" type="password" name="password" placeholder="كلمة المرور" required />
                    </div>

                    <Button type="submit" className="bg-blue-500 hover:bg-gray-700 py-2 px-4">إنشاء حساب</Button>
                    <p className="mt-6 text-lg">اذا كنت تملك حساب , <Link href={'/login'} className="font-bold">سجل دخول</Link></p>
                </form>
            </div>
    )
}