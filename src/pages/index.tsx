import {type NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import bgImage from "@/public/assets/Christmas-tree-image.webp";
import ogImage from "@/public/assets/bg.jpg";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Happy new year, Gl1nchiki.</title>
                <meta name="description" content="Holidays in Gl1nchiki."/>
                <meta property={"og:title"} content={"Holidays in Gl1nchiki."}/>
                <meta property={"og:image"} content={ogImage.src}/>
                <link rel="icon" href="/favicon2.ico"/>
            </Head>
            <main>
                <Image src={bgImage.src} alt={"Background"} objectFit={"cover"} layout={"fill"}/>



            </main>
        </>
    );
};

export default Home;
