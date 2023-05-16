"use client";

import { useState, useEffect } from "react";
import PromptCardList from "./PromptCardList";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [posts, setPosts] = useState([]);

  const [searchedResults, setSearchedResults] = useState([])
  // filter prompts 
  const filterPrompts = (searchText) => {
    const regex = new RegExp(searchText, "i"); // 'i' flag for case-insensitive search
    return posts.filter(
      (post) =>
        regex.test(post.prompt) ||
        regex.test(post.tag) ||
        regex.test(post.creator.username)
    );
  };
  // search function
  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout)
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult)
      }, 500)
    )
    
    
  };


  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const handletagClick = (tagName) => {
    setSearchText(tagName)

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult)
  }

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

      {searchText ? (
        <PromptCardList data={searchedResults} handletagClick={handletagClick} />
      ) : (
        <PromptCardList data={posts} handletagClick={handletagClick} />
      )}
    </section>
  );
};

export default Feed;
