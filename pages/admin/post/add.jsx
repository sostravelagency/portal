// import CreateBlog from '@/app/view/post/add'
import dynamic from 'next/dynamic'
import React from 'react'
const CreateBlog= dynamic(()=> import("@/app/view/post/add"), {ssr: false})
const AddPost = () => {
  return (
    <>
        <div>Hello World</div>
        <CreateBlog />
    </>
  )
}

export default AddPost