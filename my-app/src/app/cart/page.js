'use client'
import React from "react";
import {useSelector} from "react-redux";
import {CartCard} from "@/components/CartCard";
import {selectCartItems, selectTotalPrice} from "@/redux/selectors";
import Link from "next/link";

export default function Page(){


    const items = useSelector(selectCartItems);
    const totalPrice = useSelector(selectTotalPrice);

        return(
        <main className={"px-32 my-32 mb-52"}>
            <h2 className={"text-5xl flex flex-col gap-2 w-fit mx-auto px-10 py-2 text-center border-b-blue-900 border-b-4"}>
                {items.length > 0? "Selected items" : "no items selected"}
                {items.length > 0?
                    <p>total: ${totalPrice.toFixed(2)}</p>
                    :
                    ''
                }
            </h2>
            <div className={"mb-48"}>
                {items.map( item =>{
                    return <CartCard key={item.id} item={item}/>
                })}
            </div>
            {
                items.length > 0?
                    <Link href={"/cart/payment"} className={"fixed bottom-5 bg-blue-900 text-2xl text-white font-bold items-center justify-center flex border-blue-900 border-8 px-8 py-2 rounded-lg mx-auto right-20"}>Continue to payment</Link>
                    :
                    ''
            }
        </main>
    )
}