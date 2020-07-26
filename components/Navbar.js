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
            .container {
                padding: 0 0.5rem;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                min-width: 100%;
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
