'use client'

import Profile from "@/components/Profile"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation";


const UserProfile = ({params}) => {
  console.log(params)
 const [userposts, setUserPosts] = useState([])
 const searchParams = useSearchParams()
 const userName = searchParams.get("name")

 useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`)
      const data = await response.json();


      setUserPosts(data)
    }
    if (params?.id) fetchPosts();
  }, [params?.id])
  
  return (
     <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
      data={userposts}
    />
   
  )
}

export default UserProfile

