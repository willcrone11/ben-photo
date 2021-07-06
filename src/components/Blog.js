import React, { useEffect } from 'react';
import Post from './Post'

export default function Blog() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return <Post/>
}