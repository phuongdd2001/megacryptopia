import { tinos } from "@/data/font";
import { Post } from "@/types/post";
import { Avatar } from "antd";
import Image from "next/image";

function LayoutPostThree(props: { post: Post }) {

    const { post } = props;

    return (
        <>
            <div className="relative mb-3">
                {post.image && <Image
                    src={post.image}
                    alt="banner2"
                    width={1056}
                    height={705}
                    objectFit="cover"
                    className="rounded-2xl"

                />}
                <div className="flex items-center bg-white/[.65] pt-[6px] pb-[9px] px-3 absolute bottom-0 w-full">
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
            <h5 className={`${tinos.className} font-bold text-2xl mb-2`}>{post.title}</h5>
            <p className="text-sm">{post.des}</p>

        </>
    )
}

export default LayoutPostThree;