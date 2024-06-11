import { data } from "@/utils/data";
import React from "react";
import {useDispatch} from "react-redux";
import {add} from "@/redux/CartSlice";
import {CardDetail} from "@/components/CardDetail";

export default function Detail({ params }) {
    const itemId = params.id; // Extract the id from params
    const item = data.products.find(i => String(i.id) === itemId);

    return (
        <div>
            <CardDetail key={item.id} item={item}/>
        </div>
    );
}