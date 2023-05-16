import React from 'react'
import PromptCard from './PromptCard'
const Profile = ({
  data,
  name,
  desc,
  handleEdite,
  handleDelete
}) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">{name} <span className="blue_gradient">Profile</span></h1>
      <div className="mt-10 prompt_layout">
        {data.map((post) => (
            <PromptCard
                key={post.id}
                post={post}
                handleEdite={() => handleEdite && handleEdite(post)}
                handleDelete={() => handleDelete && handleDelete(post)}

            />
        ))}

    </div>
    </section>
  )
}

export default Profile