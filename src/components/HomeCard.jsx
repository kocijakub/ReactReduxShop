import React from "react";
import {useDispatch} from "react-redux";
import {add} from "@/redux/CartSlice";
import {CardRating} from "@/components/CardRating";
import Link from "next/link";

export function HomeCard({item}){
    const dispatch = useDispatch()
    const addItem = (item) =>{
        dispatch(add(item))
    }

    return(
        <div className={"h-11/12 text-2xl w-80 p-10 flex flex-col gap-3 items-center justify-between shadow-custom shadow-gray-400"}>
            <div className={"flex flex-col items-center"}>
                <Link href={'/' + item.id}>
                    <img src={item.image} alt="" className={" size-52"}/>
                </Link>
                <CardRating rating={item.rating.rate} count={item.rating.count}/>
            </div>
            <Link href={'/' + item.id} className={"text-3xl text-center font-bold"}>{item.title}</Link>
            <div className={"flex flex-col gap-1 items-center"}>
                <p>${item.price}</p>
                <button onClick={() => addItem(item)} className={"bg-blue-900 border-2 text-white rounded-md px-10 py-2 hover:bg-white hover:text-blue-950 hover:border-blue-800 hover:font-bold"}>Add to cart</button>
            </div>
        </div>
    )
}