export default function TestIntro({totalNumberParts, test}) {
    const humanAIColor = "text-green-700"
    const goodBadColor = "text-blue-700"
    return (
        <div className="grid grid-cols-2 max-w-2xl m-auto px-5 py-3 border border-sky-500 border-2">
        <div className="flex flex-col min-h-32">
            <div>Press &quot;E&quot; for:</div>
            {test.categoriesLeft.map((category, i) => (
                <div key={i} className="flex flex-col">
                    <div className={`${["human", "ai"].includes(category.toLowerCase()) ? humanAIColor: goodBadColor} text-xl font-bold`}>{category}</div>
                </div>
            ))}
        </div>
        <div className="flex flex-col min-h-32">
            <div className="flex justify-end">Press &quot;I&quot; for:</div>
            {test.categoriesRight.map((category, i) => (
                <div key={i} className="flex flex-col items-end">
                    <div className={`${["human", "ai"].includes(category.toLowerCase()) ? humanAIColor: goodBadColor} text-xl font-bold`}>{category}</div>
                </div>
            ))}
        </div>
        <div className="col-span-2 mb-2 flex justify-center underline">Part {test.partNumber} of {totalNumberParts}</div>
        <div className="col-span-2 mb-2">
            Put your Left finger on the <span className="font-bold">E</span> key for items that belong to the category 
            {test.categoriesLeft.map((category, i) => <span className={`${["human", "ai"].includes(category.toLowerCase()) ? humanAIColor: goodBadColor}`} key={i}> {category}</span>)}
        </div>
        <div className="col-span-2 mb-2">
            Put your Right finger on the <span className="font-bold">I</span> key for items that belong to the category 
            {test.categoriesRight.map((category, i ) => <span className={`${["human", "ai"].includes(category.toLowerCase()) ? humanAIColor: goodBadColor}`} key={i}> {category}</span>)}
        </div>
        <div className="col-span-2 mb-2">Items will appear one at a time</div>
        <div className="col-span-2 mb-2"> If you make a mistake, a red <span className="text-red-500 font-bold"> X </span> will appear. Press the other key to continue.</div>
        <div className="col-span-2 flex items-center justify-center">Press the <span className="font-bold">&nbsp;spacebar&nbsp;</span>to start</div>
    </div>
    )
}