"use client"

import { useSearchParams } from "next/navigation";
import { Main } from "../components/Main";
import { ClickChoco } from "../components/ClickChoco";
import { useRouter } from "next/navigation";
import data from "../assist/data.json"
import { useEffect, useState } from "react";
export default function Chocolate() {
    const [datas, setDatas] = useState([])
    const [clickeddata, setClickeddata] = useState([])
    const params = useSearchParams();
    const router = useRouter();
    //const [loading, setLoading] = useState(true)
    const id = params.get("ChocolateId")
    useEffect(() => {
        if (id) {
            const newdata = data.filter((ele) => ele.id != id)
            const clickdata = data.filter((ele) => ele.id == id)

            setDatas(newdata)
            setClickeddata(clickdata)
            // set
            console.log(datas)
        }

    }, [id])
    function ClickChocolate(id) {
        router.push("/watch?ChocolateId=" + id + "")
    }

    return (
        <div>
            <div className="w-screen  flex justify-center gap-6 flex-wrap">
                <h1 className="text-3xl text-blue-600 italic">"ПРЕМИУМ СВИЙТС" ХХК </h1>
                <h1 className="text-3xl text-blue-600 italic">Ritter Sport Chocolate</h1>
            </div>
            {/* <div>
                <button className="w-16 text-black border-black  border-2 rounded-xl">return</button>
            </div> */}
            <div className="flex flex-wrap justify-around">
                <div >
                    {clickeddata.map((element) => (
                        <ClickChoco photo={element.photo} />
                    ))}
                </div>
                <div>
                    {datas.map((element) => (
                        <Main
                            id={element.id}
                            ClickChocolate={ClickChocolate}
                            photo={element.photo}
                        />
                    ))}
                </div>
            </div>
        </div>

    )
}