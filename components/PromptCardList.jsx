
import PromptCard from "./PromptCard"
const PromptCardList = ({data, handletagClick}) => {

  return (
    <div className="mt-16 prompt-layout">
        {data.map((post) => (
            <PromptCard
                key={post.id}
                post={post}
                handletagClick={handletagClick}
            />
        ))}

    </div>
  )
}

export default PromptCardList