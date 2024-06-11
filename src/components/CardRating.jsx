import { Rating} from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

export function CardRating({rating, count}){
    return(
        <div className={"w-40 flex justify-center items-center"}>
            <Rating className={"static z-10"} value={rating} readOnly={true}/>{count}
        </div>
    )
}