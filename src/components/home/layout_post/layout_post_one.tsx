import { tinos } from "@/data/font";
import { Post } from "@/types/post";
import Image from "next/image";

function LayoutPostOne(props: { post: Post }) {

    const { post } = props;

    return (
        <div>
            {post.image && <Image
                src={post.image}
                alt={post.image}
                width={100}
                height={100}
                objectFit="cover"
                className="rounded-2xl mb-4"
            />}

            {post.title && <h6 className={`${tinos.className} font-bold text-xl mb-[2px]`}>{post.title}</h6>}
            {post.topic && <p className="text-[#6B0090] text-sm mb-1
              before:content-[''] before:w-[5.66px] before:h-[5.66px] before:inline-block before:bg-[#6B0090] before:mr-[6px] before:rotate-45 before:bottom-[2px] before:relative">{post.topic}</p>}
            {post.des && <p className="text-sm">{post.des}</p>}
        </div>
    )
}

export default LayoutPostOne;