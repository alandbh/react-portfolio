import Image from "next/image";
import Heading from "../Heading";
import { useState } from "react";

function Footer() {
    const [copied, setCopied] = useState(false);

    function handleCopy() {
        navigator.clipboard.writeText("alandbh@gmail.com");

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 7000);
    }
    return (
        <footer className="mt-40 mb-20  text-white/60 md:grid md:grid-cols-14 gap-5">
            <div className="flex justify-between items-center col-start-2 col-span-12 border-dotted border-t-2 border-white/50 pt-5">
                <Heading
                    as="h1"
                    className="md:text-4xl text-xl font-light text-white/50"
                >
                    Get in touch
                </Heading>
            </div>

            <div className="col-start-2 col-span-12 mt-10 mb-10">
                <button
                    onClick={handleCopy}
                    className=" text-left hover:text-white/90"
                >
                    <div className="flex flex-col gap-3 w-auto float-left">
                        <picture className="opacity-60">
                            <source srcSet={"/email.svg"} type="image/webp" />
                            <img
                                width={200}
                                src={"/email.svg"}
                                alt="Alan's email"
                            />
                        </picture>
                        <p className="m-0">
                            (tap here to copy the email to clipboard)
                        </p>
                        <p
                            className={`transition-opacity m-0 ${
                                copied ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            ✅ copied {`:)`}
                        </p>
                    </div>
                </button>
            </div>

            <div className="col-start-2 col-span-12 mb-20 flex flex-col items-center">
                <p>Built with React, Next.Js, and Tailwindcss</p>
                <p className="text-center">
                    <a
                        href="https://github.com/alandbh/react-portfolio"
                        className="underline flex items-center gap-3 opacity-60 hover:opacity-100 text-white"
                    >
                        <Image
                            width={24}
                            height={24}
                            src="/icon-github.svg"
                            alt=""
                            className=""
                        />{" "}
                        Source code
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
