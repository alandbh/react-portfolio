import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

function Typing({ children, words }) {
    return (
        <b className="text-white/80">
            <Typewriter
                options={{
                    strings: ["intelligence", "strategy", "process"],
                    pauseFor: 4000,
                    autoStart: true,
                    loop: true,
                    cursor: "_",
                }}
            />
        </b>
    );
}

export default Typing;
