import Head from "next/head";
import Image from "next/image";
import Heading from "../../components/Heading";
import { useRouter } from "next/router";
import { PageData } from "../../components/Content/PageData";
import Footer from "../../components/Footer";
import Link from "next/link";

const pagesList = Object.keys(PageData);

const Works = (props) => {
    const router = useRouter();
    const { slug } = router.query;

    const nextWorkSlug = pagesList[pagesList.indexOf(slug) + 1] || null;
    const previousWorkSlug = pagesList[pagesList.indexOf(slug) - 1] || null;

    console.log("next", nextWorkSlug);

    const routes = [
        "google-cloud",
        "pwc",
        "fundacao-bradesco",
        "banco-do-brasil",
        "heuristic-collector",
        "iris-bh",
    ];

    console.log(router);

    if (PageData[slug] !== undefined) {
        return (
            <div>
                <Head>
                    <title>{`Alan's Portfolio - ${PageData[slug].title}`}</title>
                    <meta name="description" content={PageData[slug].title} />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className="mt-[100px]">
                    <div className="md:grid grid-cols-14 gap-5">
                        <h2 className="hero font-light col-start-2 col-span-12 text-7xl text-white/60">
                            {PageData[slug].title}
                        </h2>
                    </div>
                </main>

                <section className="bio md:grid md:grid-cols-14 gap-5 mt-20">
                    <div className="col-span-4 col-start-2 text-white/80">
                        <Heading as="h3" className="text-white/50 mb-5 text-xs">
                            Year
                        </Heading>
                        <p>{PageData[slug].year}</p>
                        <Heading as="h3" className="text-white/50 mb-5 text-xs">
                            Client
                        </Heading>
                        <p>{PageData[slug].client}</p>
                        <Heading as="h3" className="text-white/50 mb-5 text-xs">
                            Role
                        </Heading>
                        <p>{PageData[slug].role}</p>
                    </div>
                    <div className="col-span-6 text-white/80">
                        <Heading as="h3" className="text-white/50 mb-5 text-xs">
                            Project
                        </Heading>
                        {PageData[slug].project?.map((paragraph, index) => (
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: paragraph,
                                }}
                                key={index}
                            ></p>
                        ))}

                        <Heading
                            as="h3"
                            className="text-white/50 mb-5 mt-10 text-xs"
                        >
                            Access
                        </Heading>
                        <p>
                            <a
                                className="text-white/60 hover:text-white/90 underline"
                                href={PageData[slug].access}
                            >
                                {PageData[slug].access}
                            </a>
                        </p>
                    </div>
                </section>

                <section className="md:grid md:grid-cols-14 gap-5 mt-20">
                    <figure className="max-h-96 min-h-[580px] col-start-2 col-span-12 relative">
                        <Image
                            src={"/" + PageData[slug].featured_image}
                            layout="fill"
                            objectFit="cover"
                            alt=""
                        />
                    </figure>
                </section>

                {PageData[slug].sections.map((section, index) => (
                    <section
                        key={index}
                        className="md:grid md:grid-cols-14 mt-0 px-[2px] text-gray-500"
                    >
                        <div
                            className={`${
                                section.color_class || "bg-gray-100"
                            } col-start-2 col-span-12 md:grid grid-cols-12 py-20`}
                        >
                            <div className="col-start-2 col-span-5 flex flex-col gap-11">
                                <Heading as={"h4"} className="text-4xl">
                                    {section.title}
                                </Heading>
                                <div>
                                    {section.text.map((p, i) => (
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: p,
                                            }}
                                            key={i}
                                        ></p>
                                    ))}
                                </div>
                            </div>
                            <div className="col-start-8 col-span-4 relative">
                                <picture>
                                    <source
                                        srcSet={"/" + section.image}
                                        type="image/webp"
                                    />
                                    <img src={"/" + section.image} alt="" />
                                </picture>
                            </div>
                        </div>
                    </section>
                ))}

                <div>
                    {previousWorkSlug ? (
                        <Link href={`/work/${previousWorkSlug}`}>
                            <a>
                                <h5>PREVIOUS WORK</h5>
                                <p>{PageData[previousWorkSlug].title}</p>
                            </a>
                        </Link>
                    ) : (
                        "The last prev"
                    )}
                    {nextWorkSlug ? (
                        <Link href={`/work/${nextWorkSlug}`}>
                            <a>
                                <h5>NEXT WORK</h5>
                                <p>{PageData[nextWorkSlug].title}</p>
                            </a>
                        </Link>
                    ) : (
                        "The last next"
                    )}
                </div>

                <Footer />
            </div>
        );
    } else {
        return (
            <>
                <div>ERROR 404</div>
            </>
        );
    }
};

export default Works;
