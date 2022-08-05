import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Card from "../components/Card";
import Heading from "../components/Heading";
import Switch from "../components/Switch";
import styles from "../styles/Home.module.css";

export default function Home() {
    const [workType, setWorkType] = useState("all");

    return (
        <div>
            <Head>
                <title>{`Alan's Portfolio`}</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="md:grid grid-cols-14 gap-5 my-5">
                <h1 className="col-start-2 col-span-5 tracking-[.15rem] text-white/60">
                    <b>ALAN</b> VASCONCELOS
                </h1>
            </header>

            <main className="mt-[100px]">
                <div className="md:grid grid-cols-14 gap-5">
                    <h2 className="hero col-start-2 col-span-8 text-7xl text-white/60">
                        Believe in the{" "}
                        <b>
                            <u>cleverness</u>
                        </b>{" "}
                        behind the interface.
                    </h2>
                </div>
                <section className="bio md:grid md:grid-cols-14 gap-5 mt-20">
                    <div className="col-span-2 col-start-2 mt-12">
                        <Image
                            src="/photo.jpg"
                            alt="Vercel Alan's photo"
                            width={200}
                            height={200}
                            className="opacity-50"
                        />
                    </div>
                    <div className="col-span-6 text-white/80">
                        <Heading as="h3" className="text-white/50 mb-5 text-xs">
                            About
                        </Heading>
                        <p>{`Hi! I'm Alan.
I believe we need to research, prototype, test and refine the design for any interactive product. After all, just ”working” is not enough without a good experience.`}</p>

                        <p>{`I'm graduated in Graphic Design with a master’s degree in Information Science. For more than 10 years I've been working as a usability and accessibility consultant for government agencies, as well for large companies. I'm also a co-author of the Brazilian Usability Booklet for e-Government agencies.`}</p>
                    </div>
                    <div className="col-span-4 text-white/80">
                        <Heading as="h3" className="text-white/50 mb-5 text-xs">
                            Client Experience
                        </Heading>
                        <p>{`Google Cloud, Banco do Brasil, Coca-Cola, Fundação Bradesco, Beam Suntory, PwC`}</p>

                        <Heading
                            as="h3"
                            className="text-white/50 mb-5 mt-10 text-xs"
                        >
                            Client Experience
                        </Heading>
                        <p>{`Google Cloud, Banco do Brasil, Coca-Cola, Fundação Bradesco, Beam Suntory, PwC`}</p>
                    </div>
                </section>

                <section className="mt-[120px] md:grid md:grid-cols-14 gap-5">
                    <div className="flex justify-between items-center col-start-2 col-span-12 works-feed border-dotted border-t-2 border-white/50 pt-5">
                        <Heading
                            as="h1"
                            className="text-4xl font-light text-white/50"
                        >
                            Works
                        </Heading>
                        <div>
                            <Switch
                                onChange={(workType) => setWorkType(workType)}
                            />
                        </div>
                    </div>
                    <div className="col-start-2 mt-16 col-span-12 grid md:grid-cols-3 grid-cols-2">
                        <Card
                            title="Google Cloud"
                            tags="UX Analysis"
                            href="contact"
                            image="port-t-fundacaobradesco.jpg"
                        />
                        <Card
                            title="Google Cloud"
                            tags="UX Analysis"
                            href="contact"
                            image="port-t-fundacaobradesco.jpg"
                        />
                        <Card
                            title="Google Cloud"
                            tags="UX Analysis"
                            href="contact"
                            image="port-t-fundacaobradesco.jpg"
                        />
                        <Card
                            title="Google Cloud"
                            tags="UX Analysis"
                            href="contact"
                            image="port-t-fundacaobradesco.jpg"
                        />
                        <Card
                            title="Google Cloud"
                            tags="UX Analysis"
                            href="contact"
                            image="port-t-fundacaobradesco.jpg"
                        />
                        <Card
                            title="Google Cloud"
                            tags="UX Analysis"
                            href="contact"
                            image="port-t-fundacaobradesco.jpg"
                        />
                        <Card
                            title="Google Cloud"
                            tags="UX Analysis"
                            href="contact"
                            image="port-t-fundacaobradesco.jpg"
                        />
                    </div>
                </section>
            </main>

            <footer className={styles.footer}></footer>
        </div>
    );
}
