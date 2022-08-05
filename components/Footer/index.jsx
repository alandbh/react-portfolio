import Image from "next/image";

function Footer() {
    return (
        <footer className="mt-32 mb-20 flex flex-1 items-center flex-col text-white/60 ">
            <p>Built with React, Next.Js, and Tailwindcss</p>
            <p className="">
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
        </footer>
    );
}

export default Footer;
