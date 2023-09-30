import React from 'react'
import style from '../styles/Blog.module.css'
import Link from 'next/link'



const blogs = () => {
  return (<>
    <div className={style.title}>List of Blogs</div>
    <Link href='blogpost/Next 13.5'>
    <div className={style.card}>
      <h1>The latest Next.js news</h1>
      <h2>Next.js 13.5</h2>
      <p>Next.js 13.5 improves local dev performance and reliability</p>
    </div>
    </Link>
    </>
  )
}

export default blogs