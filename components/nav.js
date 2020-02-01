import React from 'react'
import Link from 'next/link'
import Card from "./utils"

const links = [
    {href: 'https://zeit.co/now', label: 'ZEIT'},
    {href: 'https://github.com/zeit/next.js', label: 'GitHub'},
].map(link => {
    link.key = `nav-link-${link.href}-${link.label}`
    return link
})

const Nav = () => (
    <nav>
        <ul>
            <li>

                <Link href="/room/[pid]" as={'/room/${1}'}>
                    <a>First Post</a>
                </Link>
                <br/>
                <Link href="/room/[pid]" as={'/room/${2}'}>
                    <a>First</a>
                </Link>
                <Link href="/room/[pid]" as={'/room/${3}'}>
                    <a>First</a>
                </Link>
                <Link href="/room/[pid]" as={'/room/${4}'}>
                    <a>First</a>
                </Link>
                <Link href="/room/[pid]" as={'/room/${5}'}>
                    <a>First</a>
                </Link>
                <Link href="/room/[pid]" as={'/room/${6}'}>
                    <a>First</a>
                </Link>

                }
            </li>
            {links.map(({key, href, label}) => (
                <li key={key}>
                    <a href={href}>{label}</a>
                </li>
            ))}
        </ul>

        <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        // display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        // const pids = ['id1', 'id2', 'id3']
        // {
        //   pids.map(pid => (
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
    </nav>
)

export default Nav
