"use client"
import { useRef } from "react";
import { useEffect } from "react";

const humanAIColor = "text-green-700"
const goodBadColor = "text-blue-700"

function generate_component(items, test, sequenceIdx){
    let el = test.sequence[sequenceIdx]

    if (el === "human"){
        return <img src={test.values[sequenceIdx]} className="h-40"/>
    } else if (el === "ai"){
        return <img src={test.values[sequenceIdx]} className="h-40"/>
    } else {
        return <div className={`${goodBadColor} text-xl font-bold`} >{test.values[sequenceIdx]}</div>
    }
}

export default function IATTest({items, totalNumberParts, test, testIdx, setTestIdx, wrong}){
    console.log(test)
    console.log(test.values)

    return (
        <div className="grid grid-cols-2 max-w-2xl m-auto px-5 py-3 border border-sky-500 border-2">
        <div className="flex flex-col min-h-24">
            <div>Press &quot;E&quot; for:</div>
            {test.categoriesLeft.map((category, i) => (
                <div key={i} className="flex flex-col">
                    <div className={`${["human", "ai"].includes(category.toLowerCase()) ? humanAIColor: goodBadColor} text-xl font-bold`}>{category}</div>
                </div>
            ))}
        </div>
        <div className="flex flex-col min-h-24">
            <div className="flex justify-end">Press &quot;I&quot; for:</div>
            {test.categoriesRight.map((category, i) => (
                <div key={i} className="flex flex-col items-end">
                    <div className={`${["human", "ai"].includes(category.toLowerCase()) ? humanAIColor: goodBadColor} text-xl font-bold`}>{category}</div>
                </div>
            ))}
        </div>
        <div className="col-span-2 mb-2 flex justify-center">
            {generate_component(items, test, testIdx)}
        </div>
        <div className="min-h-16 col-span-2 mb-5">
            {wrong ?
            <span className=" flex justify-center text-red-500 font-bold text-[4em]">
                X
            </span>: ""
        }
        </div>
        <div className="col-span-2 mb-2"> If you make a mistake, a red <span className="text-red-500 font-bold"> X </span> will appear. Press the other key to continue.</div>
    </div>
    )
}