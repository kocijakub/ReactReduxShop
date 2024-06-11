'use client'
import {data} from "@/utils/data";
import {HomeCard} from "@/components/HomeCard";

export default function Home() {
    const {products} = data

  return (
    <main>
      <div className={"flex justify-center flex-wrap gap-8 my-48"}>
        {products.map(item =>{
          return <HomeCard key={item.id} item={item}/>
        })}
      </div>
        <div className={"w-full py-5 bg-gray-900 text-white flex justify-center items-center"}>
            <p>some useles info no one is going to read</p>
        </div>
    </main>
  );
}
