import React, { useEffect } from 'react';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import marked from 'marked';
import matter from 'gray-matter';
import Highlight from 'react-highlight';

function Post(props) {
    return (
        <div className="container">
            <Head>
                <title>{props.data.title} | Prime place for development related information</title>
            </Head>

            <main>
                <div dangerouslySetInnerHTML={{ __html: props.htmlString }}></div>
            </main>

            <footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
                </a>
            </footer>

            <style jsx>{`
            .container {
              min-height: 100vh;
              padding: 0 0.5rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
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
    
            /*
            * Copyright (c) 2017-present Arctic Ice Studio <development@arcticicestudio.com>
            * Copyright (c) 2017-present Sven Greb <development@svengreb.de>
            *
            * Project:    Nord highlight.js
            * Version:    0.1.0
            * Repository: https://github.com/arcticicestudio/nord-highlightjs
            * License:    MIT
            * References:
            *   https://github.com/arcticicestudio/nord
            */

            /* purgecss start ignore */

            .hljs {
                display: block;
                overflow-x: auto;
                padding: 0.5em;
                background: #2E3440;
            }
            
            .hljs,
            .hljs-subst {
                color: #D8DEE9;
            }
            
            .hljs-selector-tag {
                color: #81A1C1;
            }
            
            .hljs-selector-id {
                color: #8FBCBB;
                font-weight: bold;
            }
            
            .hljs-selector-class {
                color: #8FBCBB;
            }
            
            .hljs-selector-attr {
                color: #8FBCBB;
            }
            
            .hljs-selector-pseudo {
                color: #88C0D0;
            }
            
            .hljs-addition {
                background-color: rgba(163, 190, 140, 0.5);
            }
            
            .hljs-deletion {
                background-color: rgba(191, 97, 106, 0.5);
            }
            
            .hljs-built_in,
            .hljs-type {
                color: #8FBCBB;
            }
            
            .hljs-class {
                color: #8FBCBB;
            }
            
            .hljs-function {
                color: #88C0D0;
            }
            
            .hljs-function > .hljs-title {
                color: #88C0D0;
            }
            
            .hljs-keyword,
            .hljs-literal,
            .hljs-symbol {
                color: #81A1C1;
            }
            
            .hljs-number {
                color: #B48EAD;
            }
            
            .hljs-regexp {
                color: #EBCB8B;
            }
            
            .hljs-string {
                color: #A3BE8C;
            }
            
            .hljs-title {
                color: #8FBCBB;
            }
            
            .hljs-params {
                color: #D8DEE9;
            }
            
            .hljs-bullet {
                color: #81A1C1;
            }
            
            .hljs-code {
                color: #8FBCBB;
            }
            
            .hljs-emphasis {
                font-style: italic;
            }
            
            .hljs-formula {
                color: #8FBCBB;
            }
            
            .hljs-strong {
                font-weight: bold;
            }
            
            .hljs-link:hover {
                text-decoration: underline;
            }
            
            .hljs-quote {
                color: #4C566A;
            }
            
            .hljs-comment {
                color: #4C566A;
            }
            
            .hljs-doctag {
                color: #8FBCBB;
            }
            
            .hljs-meta,
            .hljs-meta-keyword {
                color: #5E81AC;
            }
            
            .hljs-meta-string {
                color: #A3BE8C;
            }
            
            .hljs-attr {
                color: #8FBCBB;
            }
            
            .hljs-attribute {
                color: #D8DEE9;
            }
            
            .hljs-builtin-name {
                color: #81A1C1;
            }
            
            .hljs-name {
                color: #81A1C1;
            }
            
            .hljs-section {
                color: #88C0D0;
            }
            
            .hljs-tag {
                color: #81A1C1;
            }
            
            .hljs-variable {
                color: #D8DEE9;
            }
            
            .hljs-template-variable {
                color: #D8DEE9;
            }
            
            .hljs-template-tag {
                color: #5E81AC;
            }
            
            .abnf .hljs-attribute {
                color: #88C0D0;
            }
            
            .abnf .hljs-symbol {
                color: #EBCB8B;
            }
            
            .apache .hljs-attribute {
                color: #88C0D0;
            }
            
            .apache .hljs-section {
                color: #81A1C1;
            }
            
            .arduino .hljs-built_in {
                color: #88C0D0;
            }
            
            .aspectj .hljs-meta {
                color: #D08770;
            }
            
            .aspectj > .hljs-title {
                color: #88C0D0;
            }
            
            .bnf .hljs-attribute {
                color: #8FBCBB;
            }
            
            .clojure .hljs-name {
                color: #88C0D0;
            }
            
            .clojure .hljs-symbol {
                color: #EBCB8B;
            }
            
            .coq .hljs-built_in {
                color: #88C0D0;
            }
            
            .cpp .hljs-meta-string {
                color: #8FBCBB;
            }
            
            .css .hljs-built_in {
                color: #88C0D0;
            }
            
            .css .hljs-keyword {
                color: #D08770;
            }
            
            .diff .hljs-meta {
                color: #8FBCBB;
            }
            
            .ebnf .hljs-attribute {
                color: #8FBCBB;
            }
            
            .glsl .hljs-built_in {
                color: #88C0D0;
            }
            
            .groovy .hljs-meta:not(:first-child) {
                color: #D08770;
            }
            
            .haxe .hljs-meta {
                color: #D08770;
            }
            
            .java .hljs-meta {
                color: #D08770;
            }
            
            .ldif .hljs-attribute {
                color: #8FBCBB;
            }
            
            .lisp .hljs-name {
                color: #88C0D0;
            }
            
            .lua .hljs-built_in {
                color: #88C0D0;
            }
            
            .moonscript .hljs-built_in {
                color: #88C0D0;
            }
            
            .nginx .hljs-attribute {
                color: #88C0D0;
            }
            
            .nginx .hljs-section {
                color: #5E81AC;
            }
            
            .pf .hljs-built_in {
                color: #88C0D0;
            }
            
            .processing .hljs-built_in {
                color: #88C0D0;
            }
            
            .scss .hljs-keyword {
                color: #81A1C1;
            }
            
            .stylus .hljs-keyword {
                color: #81A1C1;
            }
            
            .swift .hljs-meta {
                color: #D08770;
            }
            
            .vim .hljs-built_in {
                color: #88C0D0;
                font-style: italic;
            }
            
            .yaml .hljs-meta {
                color: #D08770;
            }
            
            /* purgecss end ignore */
    
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