
"use client"

import IATTest from "./test"
import TestIntro from "./test-intro"
import Instructions from "./instructions"
import FinishTest from "./finish-test"

import { useState, useEffect } from "react"
import { set } from "react-hook-form"
import IatForm from "@/components/form/iat-form"
import { v4 as uuidv4 } from 'uuid';

function getValues(items, sequence){
    let values = []
    for (let i = 0; i < sequence.length; i++){
        let category = sequence[i]
        let categoryValues = items[category]
        const randomIndex = Math.floor(Math.random() * categoryValues.length);
        values.push(categoryValues[randomIndex])
    }
    return values
}

const items = {
    "good": ["clear", "applicable", "simple", "complete", "sound", "truthful"],
    "bad": ["convoluted", "irrelevant", "complicated", "incomplete", "invalid", "deceptive"],
    "human": ["/humans/human1.png", "/humans/human2.png", "humans/human3.png", "humans/human4.png", "humans/human5.png", "humans/human6.png", "humans/human7.png", "humans/human8.png", "humans/human9.png", "humans/human10.png"],
    "ai": ["ai/ai1.png", "ai/ai2.png", "ai/ai3.png", "ai/ai4.png", "ai/ai5.png", "ai/ai6.png", "ai/ai7.png", "ai/ai8.png", "ai/ai9.png", "ai/ai10.png"]
}

let testSequences = [
    ["human", "ai", "human", "ai", "human", "ai", "human", "ai", "human", "ai", "human", "ai", "human", "ai", "human", "ai", "human", "ai", "human", "ai"],
    ["good", "bad", "good", "bad","good", "bad", "good", "bad","good", "bad", "good", "bad","good", "bad", "good", "bad","good", "bad", "good", "bad"], 
    ["human","good","ai","bad","ai", "good","human", "bad", "ai", "good", "human", "bad", "human","good", "ai", "bad", "human", "good", "ai", "bad"], 
    [
        "ai", "bad", "human", "good", "ai", "bad", "human", "good",
        "ai", "bad", "human", "good", "human", "good", "ai", "bad",
        "ai", "bad", "human", "good", "human", "good", "ai", "bad",
        "human", "good", "ai", "bad", "human", "good", "ai", "bad",
        "ai", "bad", "human", "good", "human", "good", "ai", "bad"
    ],
    [
        "ai", "human", "human", "ai", "ai", "ai", "human", "human", "human", "ai",
        "human", "ai", "human", "ai", "human", "ai", "human", "ai", "human", "ai",
        "human", "ai", "ai", "human", "ai", "ai", "human", "human"
    ],
    [
        "ai", "bad", "human", "good", "ai", "bad", "human", "good",
        "human", "bad", "ai", "good", "human", "good", "ai", "bad",
        "human", "bad", "ai", "good"
    ],
    [
        "human", "good", "ai", "bad", "human", "bad", "ai", "good",
        "human", "good", "ai", "bad", "ai", "bad", "human", "good",
        "ai", "good", "human", "bad", "human", "bad", "ai", "good",
        "human", "good", "ai", "bad", "ai", "bad", "human", "good",
        "human", "good", "ai", "bad", "human", "bad", "ai", "good"
    ]
]
const tests = [
    {
        "partNumber": 1,
        "categoriesLeft": ["Human"],
        "categoriesRight": ["AI"], 
        "sequence": testSequences[0],
        "values": getValues(items, testSequences[0]),
        "results": []
    },
    {
        "partNumber": 2,
        "categoriesLeft": ["Good"],
        "categoriesRight": ["Bad"], 
        "sequence": testSequences[1],
        "values": getValues(items, testSequences[1]),
        "results": []
    },
    {
        "partNumber": 3,
        "categoriesLeft": ["Bad", "AI"],
        "categoriesRight": ["Good", "Human"],
        "sequence": testSequences[2],
        "values": getValues(items, testSequences[2]),
        "results": []
    },
    {
        "partNumber": 4,
        "categoriesLeft": ["Bad", "AI"],
        "categoriesRight": ["Good", "Human"], 
        "sequence": testSequences[3],
        "values": getValues(items, testSequences[3]),
        "results": []
    },
    {
        "partNumber": 5,
        "categoriesLeft": ["Human"],
        "categoriesRight": ["AI"], 
        "sequence": testSequences[4],
        "values": getValues(items, testSequences[4]),
        "results": []
    },
    {
        "partNumber": 6,
        "categoriesLeft": ["Bad", "Human"],
        "categoriesRight": ["Good", "AI"],
        "sequence": testSequences[5],
        "values": getValues(items, testSequences[5]),
        "results": []
    },
    {
        "partNumber": 7,
        "categoriesLeft": ["Bad", "Human"],
        "categoriesRight": ["Good", "AI"], 
        "sequence": testSequences[6],
        "values": getValues(items, testSequences[6]),
        "results": []
    }
]

export default function IAT() {
    const [state, setState] = useState("start")
    const [partNumber, setPartNumber] = useState(1)
    const [testIdx, setTestIdx] = useState(0)
    const [isInstructions, setIsInstructions] = useState(true)
    const [wrong, setWrong] = useState(false)
    const [timer, setTimer] = useState(0); // State variable for timer
    const [lastClickTime, setLastClickTime] = useState(0);
    const [values, setValues] = useState([])


    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.code === 'Space') {
            console.log("Hey")
            // Handle space bar key press
            console.log(state )
            console.log("What is the state,", state === "testInstructions")
            if (state === "testInstructions") {
                setState("test")
                setLastClickTime(Date.now());
            }
            if (state === "finishTest") {
                fetch("/api/iat", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "uuid": uuidv4(),
                        "commitmentCheck": values.commitmentCheck,
                        "age": values.age,
                        "email": values.email,
                        "gender": values.gender, 
                        "proficiency": values.proficiency,
                        "trust": values.trust,
                        "danger": values.danger,
                        "frequency": values.frequency,
                        "results": tests.map((test) => test.results),
                    }),
                }).then((response) => {
                    console.log("Response", response)
                }).then((data) => {
                    console.log("Data", data)
                })
                setState("end")

            }
          }
          if (state === "finishTest" || state === "end") {
            return
          }
          let currentTest = tests[partNumber-1]
          let categoriesLeftLower = currentTest.categoriesLeft.map((category) => category.toLowerCase())
          let categoriesRightLower = currentTest.categoriesRight.map((category) => category.toLowerCase())
          if (event.code === 'KeyE') {
            if (state === "test") {
                if (categoriesLeftLower.includes(currentTest.sequence[testIdx])) {
                    setTestIdx(testIdx + 1)
                    setWrong(false)
                    if (testIdx + 1 === currentTest.sequence.length){
                        setPartNumber(partNumber + 1)
                        setTestIdx(0)
                        if (partNumber === tests.length){
                            setState("finishTest")
                        }else{
                            setState("testInstructions")
                        }
                    }
                    const currentTime = Date.now();
                    const duration = currentTime - lastClickTime;
                    setTimer(timer + duration);
                    setLastClickTime(currentTime);

                    // Add timing to results array
                    currentTest.results.push(duration);
                }else{
                    setWrong(true)
                }
            }
          }else if(event.code === 'KeyI') {
            if (state === "test") {
                console.log("Test")
                if (categoriesRightLower.includes(currentTest.sequence[testIdx])) {
                    setTestIdx(testIdx + 1)
                    setWrong(false)
                    if (testIdx + 1 === currentTest.sequence.length){
                        setPartNumber(partNumber + 1)
                        setTestIdx(0)
                        if (partNumber === tests.length){
                            setState("finishTest")
                        }else{
                            setState("testInstructions")
                        }
                    }
                    const currentTime = Date.now();
                    const duration = currentTime - lastClickTime;
                    setTimer(timer + duration);
                    setLastClickTime(currentTime);

                    // Add timing to results array
                    currentTest.results.push(duration);
                }else{
                    setWrong(true)
                }
                // setTestIdx(testIdx + 1)
            }
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, [state,testIdx, partNumber]);

    function onSubmit(vals){
        console.log(values)
        setValues(vals)
        setState("instructions")
    }
    
    return (
        <div className="mt-5">
            {
                state === "start"?
                    <IatForm onSubmit={onSubmit}/>
                :""
            }
            {
                state === "instructions"?
                    <Instructions items={items} setState={setState}/>
                :""
            }
            {
                state === "testInstructions"?
                    <TestIntro totalNumberParts={7} test={tests[partNumber-1]} />:""
            }
            {
                state === "test"?
                    <IATTest items={items} totalNumberParts={7} test={tests[partNumber-1]} testIdx={testIdx} setTestIdx={setTestIdx} wrong={wrong}/>:""
            }
            {
                state === "finishTest" ? <FinishTest/>:""
            }
            {
                state === "end" ? 
                <div> 
                    Thank you finishing my survey :D
                </div>:""
            }
        </div>
    )
}