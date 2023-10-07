import React, { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'


const slug = (props) => {
  // const [blogdataa , setblogdataa] = useState(props.data)
  const blogdataa = props.data
  // const router = useRouter()
  // useEffect(()=>{
  //   if(!(router.isReady)) return;
  //   const {slug} = router.query
  //   fetch(`http://localhost:3000/api/blogapi/?slug=${slug}`)
  //   .then((item)=>
  //       {return item.json()
  //   })
  //   .then((itemm)=>{
  //     setblogdataa(itemm)
  //   })
  //   .then(console.log(blogdataa))
  // },[router.isReady])
    
  return (
    <>
    <div className={styles.title}>{blogdataa && blogdataa.title}</div>
    <div className={styles.description}>{blogdataa && blogdataa.content}</div>
    </>
  )
}

export async function getServerSideProps(context){
    // const router = useRouter()
    // const {slug} = router.query
    const {slug} = context.query
    const fetchdata = await fetch(`http://localhost:3000/api/blogapi/?slug=${slug}`)
    const data = await fetchdata.json()
    return {props : {data}}
}

export default slug