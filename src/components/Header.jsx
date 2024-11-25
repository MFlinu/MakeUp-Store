import Link from "next/link";

import {HoverCard,HoverCardContent,HoverCardTrigger,} from "@/components/ui/hover-card"
import { Facebook, FileLock, FileQuestion, FileText, Heart, History, Home, Instagram, Languages, LayoutList, ListOrdered, LogOut, Mail, Menu, MessageSquareText, Search, Settings, ShoppingCart, User, Youtube} from "lucide-react";
import { Button } from "./ui/button";
import {Sheet,SheetClose,SheetContent,SheetDescription,SheetHeader,SheetTitle,SheetTrigger,SheetFooter} from "@/components/ui/sheet"

export default function Header(){
    const user=false;
    const userName="Fanoos";
    const side="left";
    const count=0;
    return(
        <header>

            {/* Moblie Navbar Start*/}
            <nav className="md:hidden">
                <div>
                    {!user ? (
                        /* Mobile not Logged in Design Start */
                        <div className="flex flex-row-reverse items-center justify-between w-full py-4 px-5 md:px-8  bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300 ">

                            <Button className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300"><Search/></Button>
                            <Link href={"/"}>
                                FanoosStore
                            </Link>
                            <Sheet>
                                <SheetTrigger><Menu/></SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetClose asChild></SheetClose>
                                        <SheetTitle>
                                            <div className="flex justify-around my-1">
                                                <Link href={"/"} className="text-3xl">
                                                    متجر فانوس
                                                </Link>
                                                <Button className=" bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300"><Languages/></Button>
                                            </div>
                                        </SheetTitle>
                                        <SheetDescription>
                                            <p className="text-2xl flex justify-start "> مرحبا بكم في متجر فانوس</p>
                                        </SheetDescription>
                                    </SheetHeader>
                                    <div className="flex justify-end gap-2 mt-2">
                                        <Button  className="w-full"><Link href={"/signin"} className="text-xl">تسجيل الدخول</Link></Button>
                                        <Button  className="w-full"><Link href={"signup"} className="text-xl">إنشاء حساب</Link></Button>
                                    </div>

                                    <div className="flex-col my-5 font-sans">
                                        <div className="flex gap-x-3 p-3">
                                            <LayoutList/>
                                            <Link href={"/"} className="text-lg">الأصناف</Link>
                                        </div>
                                        <hr/>
                                        <div className="flex gap-x-3 p-3">
                                            <Home/>
                                            <Link href={"/"} className="text-lg">الصفحة الرئسية</Link>
                                        </div>
                                        <div className="flex gap-x-3 px-3">
                                            <Heart/>
                                            <Link href={"/"} className="text-lg">المفضلة</Link>
                                        </div>
                                        <hr className="my-3"/>
                                    </div>

                                    <div className="flex-col my-5 font-sans">
                                        <div className="flex gap-x-3 p-3">
                                            <FileQuestion/>
                                            <Link href={"/"} className="text-lg">اسئلة شائعة</Link>
                                        </div>
                                        <div className="flex gap-x-3 p-3">
                                            <Mail/>
                                            <Link href={"/"} className="text-lg">اتصل بنا</Link>
                                        </div>
                                        <div className="flex gap-x-3 p-3">
                                            <FileText/>
                                            <Link href={"/"} className="text-lg">الاحكام و الشروط</Link>
                                        </div>
                                        <div className="flex gap-x-3 p-3">
                                            <FileLock/>
                                            <Link href={"/"} className="text-lg">سياسة الخصوصية</Link>
                                        </div>
                                        <div className="flex gap-x-3 p-3">
                                            <History/>
                                            <Link href={"/"} className="text-lg">سياسة الارجاع</Link>
                                        </div>
                                    </div>
                                    <SheetFooter>
                                        <div className="flex-col w-full">
                                            <hr className="my-3"/>
                                            <p className="text-3xl">تابعنى على</p>
                                            <div className="flex gap-x-2 justify-start mt-2">
                                                <Link href={"#"}><Facebook/></Link>
                                                <Link href={"#"}><Instagram/></Link>
                                                <Link href={"#"}><Youtube/></Link>
                                            </div>
                                        </div>
                                    </SheetFooter>
                                </SheetContent>
                            </Sheet>
                        </div>
                        /* Mobile not Logged in Design End */
                        ) :
                        /* Mobile Logged in Design Start */
                        (
                            <div className="flex flex-row-reverse items-center justify-between w-full py-4 px-5 md:px-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300">

                            <Button className=" bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300"><Search></Search></Button>
                            <Link href={"/"}>
                                FanoosStore
                            </Link>
                            <Sheet>
                                <SheetTrigger><Menu/></SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetClose asChild></SheetClose>
                                        <SheetTitle>
                                            <div className="flex justify-around my-1">
                                                <Link href={"/"} className="text-3xl">
                                                    متجر فانوس
                                                </Link>
                                                <Button className=" bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300"><Languages/></Button>
                                            </div>
                                        </SheetTitle>
                                        <SheetDescription>
                                            <p className="text-2xl flex justify-start"> مرحبا بكم في متجر فانوس</p>
                                        </SheetDescription>
                                    </SheetHeader>
                                    <div className="flex-col my-5 font-sans">
                                        <div className="flex gap-x-3 p-3">
                                            <Settings/>
                                            <Link href={"/"} className="text-lg">اعدادات الحساب</Link>
                                        </div>
                                        <div className="flex gap-x-3 p-3">
                                            <LayoutList/>
                                            <Link href={"/"} className="text-lg">الأصناف</Link>
                                        </div>
                                        <hr/>
                                        <div className="flex gap-x-3 p-3">
                                            <Home/>
                                            <Link href={"/"} className="text-lg">الصفحة الرئسية</Link>
                                        </div>
                                        <div className="flex gap-x-3 px-3">
                                            <Heart/>
                                            <Link href={"/"} className="text-lg">المفضلة</Link>
                                        </div>
                                        <hr className="my-3"/>
                                    </div>

                                    <div className="flex-col my-5 font-sans">
                                        <div className="flex gap-x-3 p-3">
                                            <FileQuestion/>
                                            <Link href={"/"} className="text-lg">اسئلة شائعة</Link>
                                        </div>
                                        <div className="flex gap-x-3 p-3">
                                            <Mail/>
                                            <Link href={"/"} className="text-lg">اتصل بنا</Link>
                                        </div>
                                        <div className="flex gap-x-3 p-3">
                                            <FileText/>
                                            <Link href={"/"} className="text-lg">الاحكام و الشروط</Link>
                                        </div>
                                        <div className="flex gap-x-3 p-3">
                                            <FileLock/>
                                            <Link href={"/"} className="text-lg">سياسة الخصوصية</Link>
                                        </div>
                                        <div className="flex gap-x-3 p-3">
                                            <History/>
                                            <Link href={"/"} className="text-lg">سياسة الارجاع</Link>
                                        </div>
                                    </div>
                                    <SheetFooter>
                                            <div className="flex-col w-full">
                                                <hr className="my-3"/>
                                                <p className="text-3xl">تابعنى على</p>
                                                <div className="flex justify-between">
                                                    <div className="flex gap-x-2 justify-start mt-2">
                                                        <Link href={"#"}><Facebook/></Link>
                                                        <Link href={"#"}><Instagram/></Link>
                                                        <Link href={"#"}><Youtube/></Link>
                                                    </div>
                                                    <Button className="mb-2"><Link href={"signup"} className="text-xl">تسجيل خروج</Link></Button>
                                                </div>
                                            </div>
                                    </SheetFooter>
                                </SheetContent>
                            </Sheet>
                        </div>
                        )
                        /* Mobile Log in Design End */
                        }
                        
                </div>
            </nav>
            {/* Moblie Navbar End*/}


            {/* Larg Screens and PC Navbar Start*/}
            <nav className="hidden md:flex items-center justify-between w-full py-4 px-5 md:px-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300">
                <Link href={"/"} className="text-2xl">
                    شعار متجر فانوس
                </Link>
                <div>
                    {!user ? (
                        /* Larg Screen and PC not Logged in Design Start */
                        <div className="flex gap-x-3">
                            <Button className=" bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300"><Search/></Button>
                            <Sheet key={side}>
                                <SheetTrigger><Button className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300"><Heart/></Button></SheetTrigger>
                                <SheetContent side={side}>
                                    <SheetHeader>
                                        <SheetClose asChild></SheetClose>
                                        <SheetTitle>
                                            <di className="flex gap-x-5 items-center my-2">
                                              <Heart  fill="red" strokeWidth={0}/>
                                              <p>{count} عنصر</p>
                                            </di>
                                        </SheetTitle>
                                        <SheetDescription>
                                        اضغط على أيقونة القلب على أي منتج وستتم إضافته إلى مفضلاتك
                                        </SheetDescription>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                            <Button className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300"><Languages/></Button>
                            <HoverCard openDelay={0} closeDelay={0}>
                                <HoverCardTrigger className="flex items-center cursor-pointer gap-x-1">
                                    <User size={20}/>
                                        <p className="text-lg">تسجيل الدخول</p>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <p className="text-center text-2xl">مرحبا بك في متجر فانوس</p>
                                    <Button asChild className="rounded-full w-full mt-3" size={"sm"}>
                                        <Link href={"/login"} className="text-xl">تسجيل الدخول</Link>
                                    </Button>

                                    <p className="text-center mt-2">-- او يمكن --</p>
                                    <Button asChild className="rounded-full w-full mt-3" size={"sm"}>
                                        <Link href={"/signup"} className="text-xl">إنشاء حساب</Link>
                                    </Button>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                        /* Larg Screen and PC not Logged in Design End */
                        ) :
                        (
                        /* Larg Screen and PC Logged in Design Start */
                        <div className="flex gap-x-3">
                            <Button className=" bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300"><Search/></Button>
                            <Button className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300"><Heart/></Button>
                            <Button className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300"><Languages/></Button>
                            <HoverCard openDelay={0} closeDelay={0}>
                                <HoverCardTrigger className="flex items-center cursor-pointer gap-x-1">
                                    <User size={20}/>
                                        <p className="text-lg">الحساب</p>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <p className="text-lg">مرحبا {userName}</p>
                                    <hr className="my-3"/>

                                    <div className="w-full flex flex-col my-2 gap-y-3">
                                        <Link href={"/"} className="flex gap-2 text-xl"><Settings size={20}/>أعدادات الحساب</Link>
                                        <Link href={"/"} className="flex gap-2 text-xl"><ListOrdered size={20}/>سجل الطلبات</Link>
                                    </div>

                                    <div className="w-full flex flex-col my-2 gap-y-3">
                                        <Link href={"/"} className="flex gap-2 text-xl"><MessageSquareText size={20}/>الرسائل</Link>
                                    </div>

                                    <div className="w-full flex flex-col my-2 gap-y-3">
                                        <Link href={"/"} className="flex gap-2 text-xl"><LogOut size={20}/>تسجيل خروج</Link>
                                    </div>
                                </HoverCardContent>
                            </HoverCard>
                            
                        </div>
                        ) 
                        /* Larg Screen and PC Logged in Design End */
                        }
                </div>
            </nav>
            {/* Larg Screens and PC Navbar End*/}


        </header>
    );
}