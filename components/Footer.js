import React from 'react'

export default function Footer() {
    return (
        <footer>
            <h2><span className="haveBlackBg">Dev</span><span className="haveWhiteBg">Docs</span></h2>
            <span className="copyright">&copy; All rights are reserved. DevDocs is an independent github based organization for Javascript and & Jamstack related information sharing!</span>
            <style jsx>{`
            footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            }

            footer img {
            margin-left: 0.5rem;
            }

            footer h2{
                margin-bottom: 0;
                height: 100%;
            }

            footer .copyright{
                padding: 5px 0;
                font-weight: 500;
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

            .logo {
                height: 1em;
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
            `}</style>
        </footer>
    )
}
