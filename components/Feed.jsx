'use client'

import { useState, useEffect } from "react"
import PromptCardList from "./PromptCardList"


const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([])


  const handleSearchChange = (e) => {

  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt')
      const data = await response.json();
      setPosts(data)
    }

    fetchPosts();
  }, [])

  return (
    <section className="feed">
      <form className="relative w-full flex center">
        <input 
          className="search_input peer"
          type="text"
          placeholder="Search for a tag or username"
          required
          value={searchText}
          onChange={handleSearchChange}
        />
      </form>

      <PromptCardList
        data={posts}
        handletagClick={() => {}}
      />
    </section>
  )
}

export default Feed