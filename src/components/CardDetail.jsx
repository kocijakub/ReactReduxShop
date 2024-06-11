'use client'

import {useDispatch} from "react-redux";
import {add} from "@/redux/CartSlice";
import {CardRating} from "@/components/CardRating";

export function CardDetail({item}){

    const dispatch = useDispatch()
    const addItem = (item) =>{
        dispatch(add(item))
    }


    return(
        <div className={"w-9/12 mx-auto mt-40 mb-5 border-blue-900 border-8 flex justify-between items-center gap-5 rounded-xl p-10"}>
            <img src={item.image} className={"size-96"} alt=""/>
            <div className={"w-5 bg-blue-900 h-96"}></div>
            <div className={"flex flex-col gap-5"}>
                <h1 className={"text-6xl"}>{item.title}</h1>
                <p className={"text-xl"}>- {item.category}</p>
                <CardRating rating={item.rating.rate} count={item.rating.count}/>
                <p>{item.description}</p>
                <p className={"text-4xl"}>${item.price}</p>
                <button onClick={() => addItem(item)} className={"bg-blue-900 border-2 text-white rounded-md px-10 py-2 hover:bg-white hover:text-blue-950 hover:border-blue-800 hover:font-bold"}>Add to cart</button>
            </div>
        </div>
    )
}