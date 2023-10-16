"use client"

import { useState } from "react"
import data from "./assist/data.json"
import { Roboto } from "next/font/google"

import { Box } from "./components/Box"
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

//const [datas, setDatas] = useState(data)
//console.log("ss", data)
export default function Home() {
  const router = useRouter();
  function chocolate(id) {
    router.push("/watch?ChocolateId=" + id + "")
    console.log(id)
  }
  return (
    <div >
      <div className="w-screen  flex justify-center gap-6 flex-wrap">
        <h1 className="text-3xl text-blue-600 italic">"ПРЕМИУМ СВИЙТС" ХХК </h1>
        <h1 className="text-3xl text-blue-600 italic">Ritter Sport Chocolate</h1>
      </div>

      <div>
        <div>

        </div>

        <div className="flex flex-wrap gap-10 justify-center">
          {data.map((element) => (
            <Box photo={element.photo} chocolate={chocolate} id={element.id} />
          ))}
        </div>
      </div>
    </div>
  )
}