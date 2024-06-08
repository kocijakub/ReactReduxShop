'use client'
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";

export function NavBar(){
    const item = useSelector( state => state.cart)
    return(
        <header className={" bg-blue-900 text-white text-4xl flex justify-between p-5 px-10 mb-10 items-center shadow-gray-400 shadow-xl"}>
            <Link href={"/"} className={"font-bold rounded-md p-3 hover:bg-white hover:text-blue-900 hover:font-bold"}>Shop, cool shit here</Link>
            <div className={"flex justify-center gap-20"}>
                <div className={"flex justify-center gap-2 rounded-md p-3 hover:bg-white hover:text-blue-900 hover:font-bold"}>
                    <Link href={"/cart"}>Cart:</Link>
                    <span>{item.length}</span>
                </div>
            </div>
        </header>
    )
}