import React, { useState, useEffect } from "react";

// import { Container } from './styles';
let letterCount = 0;
let letterInterval;

function Typing({ children, words }) {
    const [finalWord, setFinalWord] = useState("");

    let letterSpans = [];

    const wordsArr = words.split(",");

    const wordsSpansArr = wordsArr.map((word) => {
        let trimmed = word.trim();
        let letterArr = trimmed.split("");

        // let letterSpans = "";

        // letterSpans = letterArr.map((letter) => {
        //     // letterSpans = letterSpans + `<span>${letter}</span>`;
        //     // const letterInterval = setInterval(
        //     //     (prev) => setFinalWord(prev + letter),
        //     //     1000
        //     // );
        //     // setFinalWord()
        //     return letter
        // });

        // array.forEach(element => {

        // });

        return letterArr;
    });

    // wordsSpansArr.forEach((word) => {
    //     word.forEach((letter) => {
    //         letterInterval = setInterval(activeLetter(letter), 1000);
    //     });
    // });

    function activeLetter(letter) {
        letterCount++;

        if (letterCount === 3) {
        }

        setFinalWord(finalWord + letter);
        clearInterval(letterInterval);
        return;
    }
    console.log(wordsSpansArr);

    // letterInterval = setInterval(() => activeLetter("a"), 1000);

    const [count, setCount] = useState("a");
    const [back, setBack] = useState(false);

    useEffect(() => {
        if (count.length < 5 && !back) {
            let timer = setInterval(() => {
                console.log("forward");
                setCount((prev) => prev + "a");
            }, 1000);

            return () => clearInterval(timer);
        } else {
            setBack(true);
            let timer = setInterval(() => {
                console.log("back");
                setCount((prev) => prev.substring(0, count.length - 1));
                setBack(count.length > 0);
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [count, back]);

    // useEffect(() => {}, [count]);

    return (
        <b>
            <u>
                {count} - {count.length > 0 ? "maior" : "menor"}
            </u>
        </b>
    );
    return (
        <b>
            <u
                dangerouslySetInnerHTML={{
                    __html: finalWord,
                }}
            ></u>
        </b>
    );
}

export default Typing;
