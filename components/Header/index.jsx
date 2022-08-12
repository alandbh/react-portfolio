import Image from "next/image";
import Link from "next/link";

function Header({ icons }) {
    return (
        <header className="md:grid grid-cols-14 gap-5 my-8 flex justify-between">
            <h1 className="col-start-2 col-span-5 tracking-[.15rem] md:text-base text-xs text-white/60">
                <b>ALAN</b> VASCONCELOS
            </h1>
            <div className="col-span-7 flex gap-4 justify-end items-center mt-[-1rem] mr-[-1rem]">
                <a
                    className="opacity-50 hover:opacity-90 p-2"
                    href="https://www.linkedin.com/in/alan-vasconcelos-6458ba3/"
                >
                    <Image
                        src="/icon-linkedin.svg"
                        width={24}
                        height={24}
                        alt="My LinkedIn Profile"
                    />
                </a>
                <a
                    className="opacity-50 hover:opacity-90 p-2"
                    href="https://github.com/alandbh"
                >
                    <Image
                        width={24}
                        height={24}
                        src="/icon-github.svg"
                        alt=""
                        className=""
                    />
                </a>
            </div>
        </header>
    );
}

export default Header;
