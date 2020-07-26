import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="navigation-wrapper">
            <div className="container">
                <div className="header-logo">
                    <h2><span className="haveBlackBg">Dev</span><span className="haveWhiteBg">Docs</span></h2>
                </div>
                <div className="main-navigation">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                    <a className="center__element" href="https://github.com/ibrahimkholil6210/next-blog-sanbox">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">

                            </path>
                        </svg>
                    </a>
                    <Link href="/signup">
                        <a className="havebg">Signup</a>
                    </Link>
                </div>
            </div>
            <style jsx>{`
            .navigation-wrapper{
                display: flex;
                max-width: 100%;
                width: 100%;
                background-color: rgba(255, 255, 255, 0.8);
                box-shadow: rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset;
                padding: 25px 0;
            }

            .center__element svg{
                position: relative;
                top: 50%;
                transform: translateY(-50%);
            }

            .container {
                padding: 0 0.5rem;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                min-width: 100%;
                min-width: 80%;
                margin: auto;
            }

            

            .header-logo h2{
                margin: 0;
                height: 100%;
            }

            .haveBlackBg{
                background-color: rgb(0, 0, 0);
                color: #fff!important;
                height: 35px;
                line-height: 35px;
                padding: 0 5px;
                display: inline-block;
                border-radius: 5px;
                margin-right: 5px;
            }

            .havebg{
                background-color: rgb(0, 0, 0);
                color: #fff!important;
            }

            a {
                color: inherit;
                text-decoration: none;
            }

            .main-navigation a {
                color: rgb(102, 102, 102);;
                text-decoration: none;
                display: inline-block;
                height: 35px;
                line-height: 35px;
                padding: 0 15px;
                font-weight: 500;
                font-size: 0.875rem;
                border-radius: 5px;
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

        </div>
    )
}
