import React from 'react'

export default function Comments({params}: {
    params: {
        blogId: string;
    }
}) {
  return (
    <>
        <h1>Commments</h1>
        <p>Showing comments for post id: {params.blogId}</p>
    </>
  )
}
