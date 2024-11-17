import { ShoppingBag, ShoppingBasket } from "lucide-react";


export default function CartSticky(){

    const count=0;
    const price=23;
    return(
        <div>
            {/* Mobile Cart Display Start */}
            {/* Mobile Cart Display<640 Start */}
            <div className="sm:hidden flex flex-row-reverse justify-between items-center fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-3 rounded-full mx-5 mb-4">
                <div className="bg-white text-gray-800 text-lg rounded-full w-24 p-2 text-center">
                    ${price}
                </div>
                <div className="flex gap-x-3 mx-3">
                    <ShoppingBasket/>
                    <p className="text-lg font-bold mx-2"> {count} عنصر</p>
                </div>
            </div>
            {/* Mobile Cart Display<640 End */}

            {/* Mobile Cart Display>640 && < 758 Start */}
            <div className="hidden md:hidden sm:flex sm:flex-row-reverse fixed left-0 bottom-0 bg-gray-800 text-white p-1 rounded-full mx-10 mb-4 gap-x-3">
                <div className="bg-white text-gray-800 text-lg rounded-full size-20  flex justify-center items-center">
                    ${price}
                </div>
                <div className="flex gap-x-3 items-center mx-3">
                    <ShoppingBasket/>
                    <p className="text-lg font-bold mx-2 flex"> {count} عنصر</p>
                </div>
            </div>
            {/* Mobile Cart Display>640 && < 758 Start */}

            {/* Mobile Cart Display End */}

            {/* Larg Screen and PC Cart Display Start */}
            <div className="hidden md:flex flex-col-reverse fixed left-0 bottom-1/3 bg-gray-800 text-white p-3 rounded-s-md mx-0 mb-4 gap-y-5">
                    <div className="bg-white text-gray-800 text-md rounded-md px-3 py-2 text-center ">
                        ${price}
                    </div>
                    <div className="flex gap-x-3">
                        <ShoppingBasket/>
                        <p className="text-lg font-bold"> {count} عنصر</p>
                    </div>
            </div>
            {/* Larg Screen and PC Cart Display End */}

        </div>
    )
}