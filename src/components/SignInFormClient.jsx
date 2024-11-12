'use client'

import Link from "next/link"
import { Button } from "./ui/button"
export default function SignInFormClient(){
    return(
        <div className="w-full max-w-xs mx-auto mt-20">
            <form action="" className="bg-white dark:bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex-col">
                <div className="my-3">
                    <label htmlFor="userName" className="block text-gray-600 text-sm font-bold mb-2">اسم المستخدم:</label>
                    <input className="border rounded w-full p-3 text-gray-600" id="userName" type="text" name="userName" placeholder="اسم المستخدم" required />
                </div>

                <div className="my-3">
                    <label htmlFor="password" className="block text-gray-600 text-sm font-bold mb-2">كلمة المرور:</label>
                    <input className="border rounded w-full p-3 text-gray-600" id="password" type="password" name="password" placeholder="كلمة المرور" required />
                </div>

                <Button type="submit" className="bg-blue-500 hover:bg-gray-700 py-2 px-4">تسجيل الدخول</Button>
                <p className="mt-6 text-lg">اذا لم تكن تملك حساب , <Link href={'/signup'} className="font-bold">انشأ حساب</Link></p>
            </form>
        </div>
    )
}