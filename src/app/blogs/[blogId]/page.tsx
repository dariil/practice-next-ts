"use client";

import { notFound } from 'next/navigation';
import React from 'react'

function getRandomInt(count: number){
  return Math.floor(Math.random() * count);
}

export default function BlogPost({params}: {
    params: {
      blogId: string;
    }
}) {
  const random = getRandomInt(2); 
  if(random === 1){
    throw new Error("Error loading review");
  }

  if(parseInt(params.blogId) > 100){
    notFound();
  }
  return (
    <div>
      <h1>Post test</h1>
      <p>{params.blogId}</p>
    </div>
  )
}
