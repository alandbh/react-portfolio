import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Switch from "../components/Switch";
import Typing from "../components/Typing";
import { PageData } from "../components/Content/PageData";
import Header from "../components/Header";

export default function Home() {
    const [workType, setWorkType] = useState("all");

    const slugs = Object.keys(PageData);

    return (
        <div>
            <Head>
                <title>{`Alan's Portfolio`}</title>
                <meta name="description" content="Alan's Portfolio Homepage" />
            </Head>

            <Header />

            <main className="mt-[100px]">
                <div className="md:grid grid-cols-14 gap-5">
                    <h2 className="hero col-start-2 col-span-12 md:text-7xl text-5xl text-white/40">
                        Believe in the{" "}
                        <span className="block lg:inline">
                            <Typing words="inteligence, strategy"></Typing>
                        </span>
                        <span className="hidden lg:inline">
                            <br />
                        </span>
                        behind the interface.
                    </h2>
                </div>
                <section className="bio grid grid-cols-14 md:gap-5 mt-20">
                    <div className="col-span-3 sm:col-span-2 col-start-1 md:col-start-2 mt-0 md:mt-11 pb-5 flex align-top">
                        <picture className="opacity-50">
                            <source srcSet={"/photo.jpg"} type="image/webp" />
                            <img src={"/photo.jpg"} alt="Alan's photo" />
                        </picture>
                    </div>
                    <div className="col-span-14 sm:col-span-10 md:col-span-5 sm:col-start-4 col-start-1 text-white/80">
                        <Heading as="h3" className="text-white/50 mb-5 text-xs">
                            About
                        </Heading>
                        <p>{`Hi! I'm Alan.
I believe we need to research, prototype, test and refine the design for any interactive product. After all, just ”working” is not enough without a good experience.`}</p>

                        <p>{`I'm graduated in Graphic Design with a master’s degree in Information Science. For more than 10 years I've been working as a usability and accessibility consultant for government agencies, as well for large companies. I'm also a co-author of the Brazilian Usability Booklet for e-Government agencies.`}</p>
                    </div>

                    <div className="col-span-14 sm:col-span-10 md:col-span-4 sm:col-start-4 text-white/80">
                        <Heading as="h3" className="text-white/50 mb-5 text-xs">
                            Client Experience
                        </Heading>
                        <p>{`Google Cloud, Banco do Brasil, Coca-Cola, Fundação Bradesco, Beam Suntory, PwC`}</p>

                        <Heading
                            as="h3"
                            className="text-white/50 mb-5 mt-10 text-xs"
                        >
                            Expertise
                        </Heading>
                        <p>{`Research, Usability, Accessibility, e-Gov, UX Evaluation, Prototyping`}</p>
                    </div>
                </section>

                <section className="mt-[120px] md:grid md:grid-cols-14 gap-5">
                    <div className="flex justify-between items-center col-start-2 col-span-12 works-feed border-dotted border-t-2 border-white/50 pt-5">
                        <Heading
                            as="h1"
                            className="md:text-4xl text-xl font-light text-white/50"
                        >
                            Work
                        </Heading>
                        <div>
                            <Switch
                                onChange={(workType) => setWorkType(workType)}
                            />
                        </div>
                    </div>
                    <div className="col-start-2 mt-16 col-span-12 grid grid-cols-1 md:grid-cols-3">
                        {slugs.map((slug, index) => (
                            <Card
                                key={index}
                                title={PageData[slug].client}
                                tags={PageData[slug].role}
                                href={`work/${slug}`}
                                image={`port-t-${slug}.jpg`}
                                filter={workType}
                            />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
