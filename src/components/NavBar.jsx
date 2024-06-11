'use client'
import Link from "next/link";
import {useSelector} from "react-redux";
import {selectTotalPrice} from "@/redux/selectors";

export function NavBar(){
    const item = useSelector( state => state.cart.cartItems)
    const totalPrice = useSelector(selectTotalPrice);
    return(
        <header className={"fixed z-50 top-0 w-screen bg-blue-900 text-white text-4xl flex justify-between p-5 px-10 items-center shadow-gray-400 shadow-xl"}>
            <Link href={"/"} className={"font-bold rounded-md p-3 hover:bg-white hover:text-blue-900 hover:font-bold"}>Shop, cool shit here</Link>
            <div className={"flex justify-center gap-20"}>
                <Link href={"/cart"} className={"flex justify-center gap-5 rounded-md p-3 hover:bg-white hover:text-blue-900 hover:font-bold"}>
                    <div className={"flex justify-center gap-1"}>
                        Cart:
                        <span>{item.length > 0? item.length : 0}</span>
                    </div>
                    {totalPrice > 0?"$"+totalPrice.toFixed(2):''}
                </Link>
            </div>
        </header>
    )
}