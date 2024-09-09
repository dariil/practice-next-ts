import React from 'react'
import { Metadata } from "next"
// import { resolve } from 'path'
// import { title } from 'process'

type Props = {
    params: {
        productId: string
    }
}

export const generateMetadata = async ({params}: Props): Promise <Metadata> => {
    const title = await new Promise (resolve => {
        setTimeout(()=> {
            resolve(`iPhone ${params.productId}`)
        }, 500)
    })
    return {
        title: `Product ${title}`
    }
}

export default function ProductDetails({params}: Props) {
    return (
        <h1>Product details for product {params.productId}</h1>
    )
}
