import Image from "next/image";
import { useState } from "react";

const PromptCard = ({
  post,
  handletagClick
}) => {

  const [copied, setCopied] = useState("")
  const handleCopy = () => {
    setCopied(post.tag)
    navigator.clipboard.writeText(post.tag);
    setTimeout(() => setCopied(""), 3000)
    console.log("hii")
  }
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
              src={post.creator.image}
              width={40}
              height={40}
              alt="user_image"
              className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font*satoshi font-semibold text-gray-900">{post.creator.username}</h3>
            <p className="font-inter text-sm text-gray-500">{post.creator.email}</p>
          </div>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src='/assets/icons/copy.svg'
            width={12} 
            height={12}
          />

        </div>
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
      <p className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handletagClick && handletagClick(post.tag)}>
        #{post.tag}
      </p>
    </div>
  )
}

export default PromptCard