import Link from 'next/link'
import React from 'react'

export default function Links() {
    const links = [
        {
            title: 'Home',
            path: '/',
        },
        {
            title: 'About',
            path: '/about',
        },
        {
            title: 'Contact',
            path: '/contact',
        },
        {
            title: 'Blogs',
            path: '/blogs',
        },
        {
            title: 'Products',
            path: '/products',
        },
    ]
    return (
        <>
            {
                links.map(link=>(
                    <Link href={link.path} key={link.title}> {link.title} </Link>
                ))
            }
        </>
    )
}
