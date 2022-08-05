import Image from "next/image";
import Link from "next/link";
import Heading from "../Heading";
import styles from "./Card.module.css";

function Card({tags, title, href, image, className, filter}) {

    let classFilter = 'hide';

    if(String(tags).toLowerCase().includes(filter) || filter === 'all') {
        classFilter = 'show'
    }
    return (
      <div className={`${styles.wrapper} ${styles[classFilter]} flex-1`}>
          <Link href={`/${href}`}>
              <a className={`${className} flex transition duration-300 relative box-border text-xs text-white/60 hover:text-white/90  h-44 border hover:border-white/60 border-white/30 min-w-[200px] p-5`}>
                  <Image 
                      className="z-0 transition duration-300 opacity-10" 
                      layout="fill" src={`/${image}`} alt="" 
                  />
                  <div 
                      className="relative z-1 flex justify-between flex-col"
                  >
                      <Heading className={'font-bold text-lg'} as={'h2'}>{title}</Heading>
                      <p className="m-0">{tags}</p>
  
                  </div>
              </a>
          </Link>
  
      </div>
    );

}

export default Card;