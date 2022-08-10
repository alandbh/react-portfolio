import Head from "next/head";
import Image from "next/image";
import Heading from "../../components/Heading";
import { useRouter } from "next/router";
import { PageData } from "../../components/Content/PageData";
import Footer from "../../components/Footer";
import Link from "next/link";
import Page404 from "../404";

const pagesList = Object.keys(PageData);

function isVideo(filename) {
    return filename === undefined
        ? false
        : filename.endsWith(".mp4") || filename.endsWith(".webm");
}

const Works = (props) => {
    const router = useRouter();
    const { slug } = router.query;

    const nextWorkSlug = pagesList[pagesList.indexOf(slug) + 1] || null;
    const previousWorkSlug = pagesList[pagesList.indexOf(slug) - 1] || null;

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
                        <div className="col-start-2 col-span-12 ">
                            <Link href={"/"}>
                                <a className="flex items-center gap-5 opacity-50 hover:opacity-80">
                                    <Image
                                        src={"/icon-arrow-left.svg"}
                                        width={36}
                                        height={36}
                                        alt="Back to Home"
                                    />{" "}
                                    BACK
                                </a>
                            </Link>
                        </div>
                        <h2 className="hero font-light col-start-2 col-span-12 text-7xl text-white/60">
                            {PageData[slug].title}
                        </h2>
                    </div>
                </main>

                <section className="bio md:grid md:grid-cols-14 gap-5 mt-20">
                    <div className="col-span-4 col-start-2 text-white/80 grid md:block grid-cols-2">
                        <div>
                            <Heading
                                as="h3"
                                className="text-white/50 mb-5 text-xs"
                            >
                                Year
                            </Heading>
                            <p>{PageData[slug].year}</p>
                        </div>
                        <div>
                            <Heading
                                as="h3"
                                className="text-white/50 mb-5 text-xs"
                            >
                                Client
                            </Heading>
                            <p>{PageData[slug].client}</p>
                        </div>
                        <div className="col-span-2">
                            <Heading
                                as="h3"
                                className="text-white/50 mb-5 text-xs"
                            >
                                Role
                            </Heading>
                            <p>{PageData[slug].role}</p>
                        </div>
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
                            {PageData[slug].access.startsWith("http") ? (
                                <a
                                    className="text-white/60 hover:text-white/90 underline"
                                    href={PageData[slug].access}
                                >
                                    {PageData[slug].access}
                                </a>
                            ) : (
                                "n/a"
                            )}
                        </p>
                    </div>
                </section>

                <section className="md:grid md:grid-cols-14 mt-20">
                    <figure className="max-h-96 min-h-[580px] col-start-2 col-span-12 relative mx-[2px]">
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
                                section.bg_color_class || "bg-gray-100"
                            } col-start-2 col-span-12 md:grid grid-cols-12 py-20 px-4 md:px-0`}
                        >
                            <div className="col-start-2 col-span-5 flex flex-col gap-11">
                                <Heading
                                    as={"h4"}
                                    className={`${
                                        section.text_color_class || "color"
                                    } text-4xl`}
                                >
                                    {section.title}
                                </Heading>
                                <div
                                    className={`${
                                        section.text_color_class || "color"
                                    }`}
                                >
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
                            <div className="col-start-8 col-span-5 relative">
                                {isVideo(section.image) ? (
                                    <div
                                        className={`${
                                            section.video_classname ||
                                            "w-[270px]"
                                        }  `}
                                    >
                                        <video playsInline autoPlay muted loop>
                                            <source
                                                src={"/" + section.image}
                                                type="video/webm"
                                            />
                                        </video>
                                    </div>
                                ) : (
                                    <div
                                        className={
                                            section.image_classname || ""
                                        }
                                    >
                                        <picture>
                                            <source
                                                srcSet={"/" + section.image}
                                                type="image/webp"
                                            />
                                            <img
                                                src={"/" + section.image}
                                                alt=""
                                            />
                                        </picture>
                                    </div>
                                )}
                            </div>

                            {section.image_full && (
                                <div className="col-span-12 relative mt-12 flex justify-end">
                                    <picture
                                        className={
                                            Boolean(section.image_full_stretch)
                                                ? "w-[100%]"
                                                : ""
                                        }
                                    >
                                        <source
                                            srcSet={"/" + section.image_full}
                                            type="image/webp"
                                        />
                                        <img
                                            src={"/" + section.image_full}
                                            alt=""
                                            className={
                                                Boolean(
                                                    section.image_full_stretch
                                                )
                                                    ? "w-[100%]"
                                                    : ""
                                            }
                                        />
                                    </picture>
                                </div>
                            )}
                        </div>
                    </section>
                ))}

                <div className="md:grid grid-cols-14 mt-10">
                    <div className="col-start-2 col-span-12 flex justify-between gap-10">
                        {previousWorkSlug && (
                            <Link href={`/work/${previousWorkSlug}`}>
                                <a className="opacity-50 hover:opacity-90 flex flex-col gap-10">
                                    <h5 className="text-xs uppercase flex gap-4 items-center">
                                        <Image
                                            src={"/icon-arrow-left.svg"}
                                            width={24}
                                            height={24}
                                            alt="Previous Work"
                                        />{" "}
                                        PREVIOUS WORK
                                    </h5>
                                    <p className="text-sm md:text-lg font-bold">
                                        {PageData[previousWorkSlug].title}
                                    </p>
                                </a>
                            </Link>
                        )}
                        {nextWorkSlug && (
                            <Link href={`/work/${nextWorkSlug}`}>
                                <a className="opacity-50 hover:opacity-90 flex flex-col gap-10 items-end ml-auto">
                                    <h5 className="text-xs uppercase flex gap-4 items-center">
                                        NEXT WORK
                                        <Image
                                            src={"/icon-arrow-left.svg"}
                                            width={24}
                                            height={24}
                                            alt="Next Work"
                                            className="rotate-180"
                                        />{" "}
                                    </h5>
                                    <p className="md:text-lg font-bold">
                                        {PageData[nextWorkSlug].title}
                                    </p>
                                </a>
                            </Link>
                        )}
                    </div>
                </div>

                <Footer />
            </div>
        );
    } else {
        return "Loading";
    }
};

export default Works;
