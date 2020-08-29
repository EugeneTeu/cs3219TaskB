import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps } from 'next';

export default function Home({
    allPostsData,
}: {
    allPostsData: {
        date: string;
        title: string;
        id: string;
    }[];
}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section
                className={utilStyles.headingMd}
                style={{ textAlign: 'center' }}
            >
                <p>This is my submission for CS3219 Task B</p>
                <p>
                    This SPA is made with{' '}
                    <span style={{ color: 'purple' }}>NextJs</span>, ExpressJs
                    and MongoDb Atlas
                </p>
                <p>Hosted on Google App Engine</p>
            </section>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={utilStyles.headingLg}>API Playground</h2>
                <ul className={utilStyles.list}></ul>
            </section>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
};
