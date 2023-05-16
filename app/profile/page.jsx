'use client'
import Profile from "@/components/Profile"
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
const MyProfile = () => {
  const {data: session} = useSession();

  const [myPosts, setMyPosts] = useState([]);
  
  const handleEdit = async () => {
    console.log("handleEdit")

  }

  const handleDelete = async () => {
    console.log("handleDelete")
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`)
      const data = await response.json();
      setMyPosts(data)
    }

    if(session?.user.id) fetchPosts();
   
  }, [])
 console.log(myPosts)

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default MyProfile 