'use client'
import React from "react";
import {useSelector} from "react-redux";
import {CartCard} from "@/components/CartCard";

export default function page(){
    const items = useSelector( state => state.cart)



    return(
        <main className={"px-32 my-20 relative"}>
            <h2 className={"text-5xl w-fit mx-auto px-10 py-2 text-center border-b-blue-900 border-b-4"}>
                {items.length > 0? "Selected items" : "no items selected"}
            </h2>
            <div>
                {items.map( item =>{
                    return <CartCard item={item}/>
                })}
            </div>
            <div className={" bottom-0 fixed w-full h-20 bg-white border-t-2 border-t-blue-900"}>
                total: {}
            </div>
        </main>
    )
}