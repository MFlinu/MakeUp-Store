import Link from "next/link";
import { Button } from "./ui/button";
import { Facebook, Instagram, Youtube} from "lucide-react";

export default function Footer()
{
    return(
        <>
            {/* Mobile Footer Start */}
            <footer className="md:hidden flex-col w-full py-4 px-5  bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300">
                {/* Logo or Site Name Start */}
                <div className="text-3xl my-3 px-5 py-3">
                    <h2>متجر فانوس</h2>
                </div>
                 {/* Logo or Site Name End */}

                <div className="flex flex-col my-3 text-lg gap-y-2 font-sans">
                    <Link href={'/'}>اسئلة شائعة</Link>
                    <Link href={'/'}>كيف يعمل</Link>
                    <Link href={'/'}>اتصل بنا</Link>
                </div>

                <div>
                    <form className="flex flex-col my-3 py-2 px-3 font-thin">
                        <hr className="border-gray-50 w-full my-3"/>
                        <p className="text-xl">ابق على اتصال لمعرفة احدث المنتجات داخل متجرنا و التي ممكن ان تصلك</p>
                        <input type="email" placeholder="your_email@email.com" className="w-full size-fit my-2  dark:bg-white border-2 border-gray-900 text-gray-900 dark:text-gray-300"/>
                        <Button name="submit" className="mt-1 w-3/12 text-xl">اشترك</Button>
                    </form>
                </div>

                <div className="flex flex-col my-3 text-lg font-sans gap-y-2">
                    <Link href={'/'}>الاحكام والشروط</Link>
                    <Link href={'/'}> سياسة الخصوصية</Link>
                    <Link href={'/'}> سياسة الارجاع</Link>
                </div>

                <div className="flex flex-col">
                    <div className="my-3">
                        <h3 className=" font-sans text-2xl">تابعنا على</h3>
                    </div>
                    <div className="flex p-2 gap-x-2">
                        <div className=" border-gray-200 border-2 rounded-full ">
                            <Link href={"#"}>
                                <Facebook className="size-6 m-1"/>
                            </Link>
                        </div>
                        <div className=" border-gray-200 border-2 rounded-full ">
                            <Link href={"#"}>
                                <Instagram className="size-6 m-1"/>
                            </Link>
                        </div>
                        <div className=" border-gray-200 border-2 rounded-full ">
                            <Link href={"#"}>
                                <Youtube className="size-6 m-1"/>
                            </Link>
                        </div>
                    </div>
                </div>

            </footer>
             {/* Mobile Footer End */}


            {/* PC and Larg Screen Footer Start */}
            <footer className="hidden md:flex w-full py-4 px-5 justify-around  bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300">
                    <div className="flex flex-col">
                        <div className="flex justify-between ">
                            <div className="text-3xl mt-3 p-2 ">
                                <h2>متجر فانوس</h2>
                            </div>
                            <div className="flex flex-col text-md font-light mt-3 p-2  gap-y-1">
                                <Link href={'/'}>اسئلة شائعة</Link>
                                <Link href={'/'}>كيف يعمل</Link>
                                <Link href={'/'}>اتصل بنا</Link>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between mt-3 p-3 text-md font-light  gap-x-4">
                            <Link href={'/'}>الاحكام والشروط</Link>
                            <Link href={'/'}> سياسة الخصوصية</Link>
                            <Link href={'/'}> سياسة الارجاع</Link>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <form className="flex flex-col mt-3 p-2">
                            <p className="text-md">ابق على اتصال لمعرفة احدث المنتجات داخل متجرنا و التي ممكن ان تصلك</p>
                            <div className="flex gap-x-2">
                                <input type="email" placeholder="your_email@email.com" className="w-full my-2  dark:bg-white text-gray-900 dark:text-gray-300"/>
                                <Button name="submit" className="mt-1 w-3/12 text-xl">اشترك</Button>
                            </div>
                        </form>


                        <div className="flex flex-col mt-3 p-2">
                            <div className="p-2">
                                <h3 className=" font-sans text-xl">تابعنا على</h3>
                            </div>
                            <div className="flex p-2 gap-x-2">
                                <div className=" border-gray-200 border-2 rounded-full ">
                                    <Link href={"#"}>
                                        <Facebook className="size-6 m-1"/>
                                    </Link>
                                </div>
                                <div className=" border-gray-200 border-2 rounded-full ">
                                    <Link href={"#"}>
                                        <Instagram className="size-6 m-1"/>
                                    </Link>
                                </div>
                                <div className=" border-gray-200 border-2 rounded-full ">
                                    <Link href={"#"}>
                                        <Youtube className="size-6 m-1"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </footer>
             {/* PC and Larg Screen Footer End */}
        </>

    )
}