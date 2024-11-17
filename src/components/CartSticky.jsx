

export default function CartSticky(){
    return(
        
        <div>
            {/* Mobile Cart Display Start */}
            <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-3 rounded-full mx-5 mb-4 shadow-lg">
                <div className="flex justify-start">
                    <div className="bg-gray-700 text-sm rounded-full px-3 py-1">
                        $23
                    </div>
                    <div className="">
                        <span className="text-lg font-semibold">4</span>
                        <span className="text-sm">Bought</span>
                    </div>
                </div>
            </div>

            <div className="hidden md:hidden sm:flex fixed left-0 bottom-0 bg-gray-800 text-white p-3 rounded-full mx-10 mb-4 shadow-lg">
                <div className="flex justify-start">
                    <div className="bg-gray-700 text-sm rounded-full px-3 py-1">
                        $23
                    </div>
                    <div className="">
                        <span className="text-lg font-semibold">4</span>
                        <span className="text-sm">Bought</span>
                    </div>
                </div>
            </div>


            {/* Mobile Cart Display End */}

            {/* Larg Screen and PC Cart Display Start */}
            <div className="hidden md:flex flex-col-reverse fixed left-0 bottom-1/3 bg-gray-800 text-white p-3 rounded-md mx-0 mb-4 shadow-lg">
                    <div className="bg-gray-700 text-sm rounded-full px-3 py-1">
                        $23
                    </div>
                    <div className="">
                        <span className="text-lg font-semibold">4</span>
                        <span className="text-sm">Bought</span>
                    </div>
            </div>
            {/* Larg Screen and PC Cart Display End */}

        </div>
    )
}