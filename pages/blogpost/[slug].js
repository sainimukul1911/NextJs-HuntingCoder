import React from 'react'
import { useRouter } from 'next/router'

const slug = () => {
    const router = useRouter()
    const {slug} = router.query
    console.log(router.query)
  return (
    <div>this page is a dynamic route to '{slug}'</div>
  )
}

export default slug