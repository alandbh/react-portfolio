import Image from "next/image";
import Link from "next/link";
import Heading from "../Heading";
import styles from "./Card.module.css";

function Card() {
  return (
    <div className={styles.wrapper}>
        <Link href="/contact">
            <a className="flex relative box-border text-xs text-white/60 hover:text-white/90  h-44 border hover:border-white/60 border-white/30 min-w-[300px] p-5">
                <Image 
                    className="z-0 transition duration-300 opacity-10" 
                    layout="fill" src="/port-t-fundacaobradesco.jpg" alt="" 
                />
                <div 
                    className="relative z-1 flex justify-between flex-col"
                >
                    <Heading className={'font-bold text-xl'} as={'h2'}>Fundação Bradesco</Heading>
                    <p className="m-0">UX Research, Wireflow, Prototyping</p>

                </div>
            </a>
        </Link>

    </div>
  );
}

export default Card;