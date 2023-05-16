import React from 'react'

const Profile = ({
  data,
  name,
  desc,
  handleEdite,
  handleDelete
}) => {
  console.log(data)
  return (
    <div>
     {data.map((myPost) => (
      <h1>{myPost.creator.username}</h1>
     ))}
    </div>
  )
}

export default Profile