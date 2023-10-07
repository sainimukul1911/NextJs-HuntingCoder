import React from 'react'
import style from '../styles/Home.module.css'
import Link from 'next/link'


const blogs = (props) => {

  const blogg=props.data


  return (<>
    <div className={style.title}>List of Blogs</div>
    
    {blogg.map((blogItem) => {
      return (<div className={style.main}>
        <Link href={`blogpost/${blogItem.slug}`} className={style.grid} >
          <div className={style.card}>
            <h1>{blogItem.title}</h1>
            <p>{blogItem.content.substr(0, 300)}...</p>
          </div>
        </Link>
        </div>
    )}
      )}
  </>
  )
}

export async function getServerSideProps() {
  const fdata = await fetch('http://localhost:3000/api/showblog')
  const data = await fdata.json()
  return { props: { data } }
}
export default blogs