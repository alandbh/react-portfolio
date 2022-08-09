import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";

// import { Container } from './styles';

function page404() {
    return (
        <div>
            <Head>
                <title>{`Alan's Portfolio - Error 404`}</title>
                <meta name="description" content={`Error 404`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="mt-[100px]">
                <div className="md:grid grid-cols-14 gap-5">
                    <div className="col-start-2 col-span-12 ">
                        <Link href={"/"}>
                            <a className="flex items-center gap-5 opacity-50 hover:opacity-80">
                                <Image
                                    src={"/icon-arrow-left.svg"}
                                    width={36}
                                    height={36}
                                    alt="Back to Home"
                                />{" "}
                                BACK TO HOMEPAGE
                            </a>
                        </Link>
                    </div>
                    <h2 className="mt-16 font-bold col-start-2 text-center col-span-12 text-xl text-white/60">
                        {`Error 404`}
                    </h2>
                    <h2 className="hero mt-0 font-light col-start-2 text-center col-span-12 text-7xl text-white/60">
                        {`Page not found`}
                    </h2>
                    <div className="col-span-12 col-start-2 flex justify-center items-center opacity-60">
                        <video
                            style={{ filter: "brightness(0.87) blur(1px)" }}
                            autoPlay
                            muted
                            loop
                        >
                            <source
                                src={"/blackhole1.webm"}
                                type="video/webm"
                            />
                        </video>
                    </div>
                    <div className="col-span-12 col-start-2 text-center text-white/60">
                        <p>
                            The page you tried to access does not exist, or has
                            been captured by the gravitational pull of this
                            black hole.
                        </p>

                        <p>
                            It is highly recommended not to get close to the
                            event horizon of any black hole.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default page404;
