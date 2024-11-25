import Link from "next/link";
import { Button } from "./ui/button";


export default function Footer()
{
    return(
        <>
            {/* Mobile Footer Start */}
            <footer className="md:hidden flex-col w-full py-4 px-5 md:px-8  bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300">
                {/* Logo or Site Name Start */}
                <div>
                    <h2 className="text-3xl">متجر فانوس</h2>
                </div>
                 {/* Logo or Site Name End */}

                <div className="flex flex-col my-2 text-2xl">
                    <Link href={'/'}>اسئلة شائعة</Link>
                    <Link href={'/'}>كيف يعمل</Link>
                    <Link href={'/'}>اتصل بنا</Link>
                </div>

                <div >
                    <form className="flex flex-col items-start text-lg">
                        <p>ابق على اتصال لمعرفة احدث المنتجات داحل متجارنا و التي ممكن ان تصلك</p>
                        <input type="email" className="w-full size-fit my-2  dark:bg-white border-2 border-gray-900 text-gray-900 dark:text-gray-300"/>
                        <Button name="submit" className="mt-1 w-3/12">اشترك</Button>
                    </form>
                </div>
                <div></div>
                <div></div>
                <div></div>

            </footer>
             {/* Mobile Footer End */}


            {/* PC and Larg Screen Footer Start */}
            <footer className="hidden md:flex w-full py-4 px-5 md:px-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300">


            </footer>
             {/* PC and Larg Screen Footer End */}
        </>

    )
}