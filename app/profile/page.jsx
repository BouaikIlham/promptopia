'use client'
import Profile from "@/components/Profile"
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import EmptyState from "@/components/EmptyState"
const MyProfile = () => {
  const {data: session} = useSession();
  const [myPosts, setMyPosts] = useState([]);
  const router = useRouter();
  

  const handleEdit =  (post) => {
    router.push(`/update-prompt?id=${post._id}`)
  }

  const handleDelete = async (post) => {
    const hasconfirmed = confirm("Are you sure you want to delete this prompt?!")
    
    if(hasconfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: 'DELETE'
        })

        const filteredPosts = myPosts.filter((p) => p._id !== post._id)

        setMyPosts(filteredPosts)
      } catch(error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`)
      const data = await response.json();
      setMyPosts(data)
    }

    if(session?.user.id) fetchPosts();
   
  }, [])

  return (
    <div>
      {session?.user ? (
          <Profile
          name="My"
          desc="Welcome to your personalized profile page"
          data={myPosts}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ) : 
      (
          <EmptyState />
      )
      }
    </div>
  )
}

export default MyProfile 