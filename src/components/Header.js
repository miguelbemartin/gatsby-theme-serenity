import React from 'react';
import { Link } from "gatsby"
import useIsCurrentPage from "../hooks/use-is-current-page";

export default ({ title, subtitle, description, links, author, location }) => <>
        <header>
        <nav class="navbar navbar-expand-lg ">
            <Link
                to={"/"}
                title={title}>
                <h1>{title}</h1>
            </Link>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
                {links.length > 0 &&
                <ul className="navbar-nav ml-auto">
                    {links.map((link, index) => <li key={index} className="nav-item">
                        <a className={"nav-link " + (useIsCurrentPage(link.href, location)?"active":"")}
                        href={link.href}
                        title={link.title}>{link.title}</a>
                    </li>)}
                </ul>
                }

            </div>
            </nav>

        </header>

    </>