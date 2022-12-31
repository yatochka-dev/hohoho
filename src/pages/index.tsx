'use client';
import type {GetStaticPropsContext} from "next";
import {type NextPage} from "next";
import classes from "@/styles/Home.module.scss";
import Head from "next/head";
import bgImage from "@/public/assets/Christmas-tree-image.webp";
import Snowfall from 'react-snowfall'
import Link from "next/link";
import {useRouter} from "next/router";


export async function getStaticProps({locale}: GetStaticPropsContext) {


    const titles = {
        "en": "Happy New Year, Gl1nchiki!",
        "ru": "С Новым годом, Гл1нчики!",
        "uk": "З Новим роком, Гл1нчікі!",
        "kk": "Жаңа жыл құтты болсын, Гл1нчики!",
        "be": "З Новым годам, Gl1nchiki!",
    }

    const p1s = {
        "en": " As we say goodbye to the old year and welcome in the\n" +
            "                        new, we wanted to take a moment to reflect on all that\n" +
            "                        we've achieved and experienced together over the past\n" +
            "                        year. We've laughed, we've learned, and we've grown as a\n" +
            "                        community.",
        "ru": "Прощаясь со старым годом и встречая новый, мы хотели воспользоваться моментом, чтобы подумать обо всем, чего мы достигли и пережили вместе за последний год. Мы смеялись, мы учились, и мы выросли как сообщество.",
        "uk": "Прощаючись зі старим роком і вітаючи в новому, ми хотіли взяти хвилину, щоб подумати про все, чого ми досягли та пережили разом за минулий рік. Ми сміялися, ми вчилися, і ми виросли як спільнота.",
        "kk": "Ескі жылмен қоштасып, жаңа жылмен қош келдіңіздер дегенде, біз өткен жылы бірге қол жеткізген және бірге бастан кешкен барлық нәрселер туралы ой елегінен өткізуді жөн көрдік. Күлдік, үйрендік, қауым болып өстік.",
        "be": "Мы сказалі да пабачэння старому году і прывітанне новаму, мы хацели выкарыстаць момант каб успомніць усё, чаго мы дасягнулі і перажылі за гэты год. Мы смяялісь, вучылісь і выраслі як супольнасць.",
    }

    const p2s = {
        "en": " As we look ahead to the new year, let's make a\n" +
            "                        resolution to continue supporting and uplifting one\n" +
            "                        another. Whether it's through virtual meetups, gaming\n" +
            "                        sessions, or just chatting in the Discord channels,\n" +
            "                        let's make an effort to stay connected and be there for\n" +
            "                        each other.",
        "ru": "В ожидании нового года давайте примем решение продолжать поддерживать и воодушевлять друг друга. Будь то виртуальные встречи, игровые сессии или просто чат в каналах Discord, давайте приложим усилия, чтобы оставаться на связи и быть рядом друг с другом.",
        "uk": "З наближенням нового року давайте приймемо рішення продовжувати підтримувати та надихати один одного. Будь то віртуальні зустрічі, ігрові сеанси чи просто спілкування в каналах Discord, давайте докладемо зусиль, щоб залишатися на зв’язку та бути поруч один з одним.\n",
        "kk": "Жаңа жылға қарай отырып, бір-бірімізге қолдау көрсетіп, рухымызды көтеруді жалғастырайық. Виртуалды кездесулер, ойын сеанстары немесе Discord арналарында сөйлесу арқылы болсын, байланыста болып, бір-бірімізбен бірге болуға тырысайық.\n",
        "be": "У чаканні новага года давайце вырашым працягнуць падтрямліваць і натхняць адзін аднаго. Няхай гэта будзе віртуальныя сустрэчы, гульнявыя сесіі або проста чат у каналах Discord, давайце прыкладзем намаганні, каб заставацца на сувязі і быць побач.",
    }

    const p3s = {
        "en": "Here's to a bright and prosperous new year for all of\n" +
            "                        us! Wishing you all a happy and healthy 2023.",
        "ru": "Яркого и процветающего Нового года для всех нас! Желаю всем счастливого и здорового 2023 года.",
        "uk": "Яскравого та успішного Нового року для всіх нас! Бажаю всім вам щасливого та здорового 2023 року.\n",
        "kk": "Міне, бәріміз үшін жарқын және гүлденген жаңа жыл! Баршаңызға 2023 жыл бақытты және денсаулық тілеймін.\n",
        "be": "Яркага і квітнеючага новага года для усіх з нас! Жадаю усім шчаслівага і здаровага 2023!\n",
    }

    const sincerely = {
        "en": "Sincerely",
        "ru": "Искренне",
        "uk": "З повагою",
        "kk": "Құрметпен",
        "be": "З павагай",
    }

    const name = {
        "en": "Yatochka",
        "ru": "Ята",
        "uk": "Ята",
        "kk": "Ята",
        "be": "Ята",
    }

    const metaTitles = {
        "en": "Happy New Year 2023",
        "ru": "С Новым Годом 2023",
        "uk": "З Новим Роком 2023",
        "kk": "Жаңа жыл 2023",
        "be": "Новы год 2023",
    };

    const metaDescriptions = {
        "en": "Happy New Year 2023! Wishing you all a happy and healthy 2023.",
        "ru": "С Новым Годом 2023! Желаю всем счастливого и здорового 2023 года.",
        "uk": "З Новим Роком 2023! Бажаю всім вам щасливого та здорового 2023 року.",
        "kk": "Жаңа жыл 2023! Баршаңызға 2023 жыл бақытты және денсаулық тілеймін.",
        "be": "Новы год 2023! Бажаю усім шчаслівага і здаровага 2023!",
    }

    function getLocale(): string {
        if (locale === undefined) {
            return "en";
        }
        return locale;
    }


    return {
        props: {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore

            title: titles[getLocale()],
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            p1: p1s[getLocale()],
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore

            p2: p2s[getLocale()],
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore

            p3: p3s[getLocale()],
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore

            sincerely: sincerely[getLocale()],
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            name: name[getLocale()],
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            metaTitle: metaTitles[getLocale()],
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            metaDescription: metaDescriptions[getLocale()],
        },
    };
}

const Home: NextPage<{ title: string, [key: string]: string }> = ({
                                                                      title,
                                                                      p1,
                                                                      p2,
                                                                      p3,
                                                                      sincerely,
                                                                      name,
                                                                      metaTitle,
                                                                      metaDescription,

                                                                  }) => {

    const router = useRouter();

    return (
        <>
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription}/>
                <meta property={"og:title"} content={metaTitle}/>
                <meta property={"og:description"} content={metaDescription}/>

                <meta property={"og:image"} content={bgImage.src}/>
                <meta property="og:image:width" content="600"/>
                <meta property="og:image:height" content="600"/>
                <link rel="icon" href="/favicon2.ico"/>
            </Head>
            <main className={classes.main}
                  style={{backgroundImage: `url(${bgImage.src})`}}>
                <div className={classes.text_body}>

                    <h1>{title}</h1>
                    <p>
                        {p1}
                        {/*As we say goodbye to the old year and welcome in the*/}
                        {/*new, we wanted to take a moment to reflect on all that*/}
                        {/*we've achieved and experienced together over the past*/}
                        {/*year. We've laughed, we've learned, and we've grown as a*/}
                        {/*community.*/}
                    </p>
                    <p>
                        {p2}
                    </p>
                    <p>
                        {p3}
                    </p>
                    <p>{sincerely},&nbsp;
                        <Link href={"https://github.com/"}>
                            {name}
                        </Link>
                    </p>

                    <br/><br/>
                    <div className={classes.text_body__langs}>

                        {
                            router.locales?.map((locale) => (
                                <div key={locale}>
                                    <Link href={router.asPath} locale={locale}>
                                        {locale}
                                    </Link>
                                </div>
                            ))

                        }

                    </div>

                </div>

                <Snowfall/>
            </main>
        </>
    )
        ;
};

export default Home;
