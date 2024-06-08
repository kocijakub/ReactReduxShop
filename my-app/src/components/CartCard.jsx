import React from "react";
import {useDispatch} from "react-redux";
import {remove} from "@/redux/CartSlice";

export function CartCard({item}){
    const dispatch = useDispatch()
    const removeItem = (id) =>{
        dispatch(remove(id))
    }
    return(
        <div className={"text-2xl w-5/6 px-10 py-5 mx-auto my-10 flex justify-between shadow-custom border-gray-300 border-2 rounded-sm"}>
            <div className={"flex gap-10 items-center"}>
                <img className={"size-32"} src={item.image} alt=""/>
                <strong className={"text-4xl"}>{item.title}</strong>
            </div>
            <div className={"flex gap-5 items-center"}>
                <b>${item.price}</b>
                <button className={"bg-blue-800 text-white rounded-md px-10 py-2 hover:bg-red-500"} onClick={() => removeItem(item.id)}>remove</button>
            </div>
        </div>
    )
}