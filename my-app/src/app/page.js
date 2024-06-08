'use client'
import {data} from "@/utils/data";
import {HomeCard} from "@/components/homeCard";

export default function Home() {
    const {products} = data

  return (
    <main className={""}>
      <div className={"flex justify-center flex-wrap gap-8"}>
        {products.map(item =>{
          return <HomeCard item={item}/>
        })}
      </div>
    </main>
  );
}
