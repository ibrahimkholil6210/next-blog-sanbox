import React, { useEffect } from 'react';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import marked from 'marked';
import matter from 'gray-matter';
import Highlight from 'react-highlight';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Post(props) {
    return (
        <div className="container">
            <Head>
                <title>{props.data.title} | Prime place for development related information</title>
            </Head>
            <Navbar />
            <main>
                <div className="innerContainer">
                    <h1 className="blog__title">{props.data.title}</h1>
                    <div className="blog__banner">
                        <img src={props.data.socialimage} />
                    </div>
                    <div className="blog__content" dangerouslySetInnerHTML={{ __html: props.htmlString }}></div>

                </div>
            </main>
            <Footer />


            <style jsx>{`
            .container {
              min-height: 100vh;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              overflow: hidden;
            }

            .blog__banner img{
                width: 100%;
                margin: auto;
            }

            .blog__title{
                font-size: 6.5rem;
                letter-spacing: -.04em;
                margin-top: 0px;
            }

            .innerContainer{
                width:80%;
            }

            p{
                font-size: 22px;
                font-weight: 500;
            }
            main {
              padding: 5rem 0;
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
    
            footer {
              width: 100%;
              height: 100px;
              border-top: 1px solid #eaeaea;
              display: flex;
              justify-content: center;
              align-items: center;
            }
    
            footer img {
              margin-left: 0.5rem;
            }
    
            footer a {
              display: flex;
              justify-content: center;
              align-items: center;
            }
    
            a {
              color: inherit;
              text-decoration: none;
            }
    
            .title a {
              color: #0070f3;
              text-decoration: none;
            }
    
            .title a:hover,
            .title a:focus,
            .title a:active {
              text-decoration: underline;
            }
    
            .title {
              margin: 0;
              line-height: 1.15;
              font-size: 4rem;
            }
    
            .title,
            .description {
              text-align: center;
            }
    
            .description {
              line-height: 1.5;
              font-size: 1.5rem;
            }
    
            code {
              background: #fafafa;
              border-radius: 5px;
              padding: 0.75rem;
              font-size: 1.1rem;
              font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
            }
    
            .grid {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-wrap: wrap;
    
              max-width: 800px;
              margin-top: 3rem;
            }
    
        
            .logo {
              height: 1em;
            }
    
            @media (max-width: 600px) {
              .grid {
                width: 100%;
                flex-direction: column;
              }
            }
          `}</style>

            <style jsx global>{`
            html,
            body {
              padding: 0;
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
            }
    
            * {
              box-sizing: border-box;
            }

            .blog__content p{
                font-size: 22px;
                font-weight: 400;
            }

            .blog__content p h2{
                font-size: 25px;
            }

            .blog__content code{
                background-color: #e8e8e8;
            }

            .blog__content p a{
                background-color: #e8e8e8;
                color: #000;
            }

            .blog__content pre{
                background-color: #e8e8e8;
                padding: 25px;
                font-size: 25px;
            }
          `}</style>
        </div>
    )
}

export const getStaticPaths = async () => {

    const files = fs.readdirSync("posts");
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(".md", "")
        }
    }));


    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMetaData = fs.readFileSync(path.join("posts", slug + ".md")).toString();


    const parsedMarkdown = matter(markdownWithMetaData);

    const htmlString = marked(parsedMarkdown.content);

    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = parsedMarkdown.data.date.toLocaleDateString("en-US", options);

    const data = {
        ...parsedMarkdown.data,
        date: formattedDate
    }


    return {
        props: {
            htmlString,
            data: data
        }
    }
}

export default Post;