import { tinos } from "@/data/font";
import { Post } from "@/types/post";
import { Avatar } from "antd";
import Image from "next/image";

function LayoutPostTwo(props: { post: Post }) {

    const { post } = props;

    return (
        <div className="flex items-center">
            {post.image && <Image
                src={post.image}
                alt="banner7"
                width={198}
                height={114}
                priority
                objectFit="cover"
                className="rounded-l-2xl mr-5"
            />}

            <div>
                <h6 className={`${tinos.className} font-bold text-xl`}>{post.title}</h6>
                {post.topic && <p className="text-[#6B0090] text-sm mt-1
              before:content-[''] before:w-[5.66px] before:h-[5.66px] before:inline-block before:bg-[#6B0090] before:mr-[6px] before:rotate-45 before:bottom-[2px] before:relative">{post.topic}</p>}
                {post.des && <p className="text-sm mt-1">{post.des}</p>}
                <div className="flex items-center mt-1">
                    <Avatar.Group
                        maxPopoverTrigger="click"
                        size={20}
                    >
                        <Avatar src={"./favorite.svg"} />
                        <Avatar src={"./haha.svg"} />
                        <Avatar src={"./bad.svg"} />
                    </Avatar.Group>
                    <p className="text-base leading-4 ml-1">67</p>
                </div>
            </div>

        </div>
    )
}

export default LayoutPostTwo;