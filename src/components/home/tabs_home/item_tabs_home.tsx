import { Post } from "@/types/post";
import LayoutPostOne from "../layout_post/layout_post_one";
import LayoutPostTwo from "../layout_post/layout_post_two";

function ItemTabHome({ key }: any) {

    let dataPostOne: Post[] = [
        {
            image: '/banner4.png',
            title: 'Massa quam nisl sapien libero quam',
            des: 'Lorem ipsum dolor sit amet consectetur. Massa quam nisl sapien libero quam nibh massa Fermentum amet libero consectetur eget  amet consectetur',
            topic: 'Gamefi',
        },
        {
            image: '/banner4.png',
            title: 'Massa quam nisl sapien libero quam',
            des: 'Lorem ipsum dolor sit amet consectetur. Massa quam nisl sapien libero quam nibh massa Fermentum amet libero consectetur eget  amet consectetur',
            topic: 'Cryptocurrency',
        },
    ]

    let dataPostTwo: Post[] = [
        {
            image: '/banner7.jfif',
            title: 'Massa quam nisl sapien libero quam',
            des: 'Lorem ipsum dolor sit amet consectetur. Massa quam nisl sapien libero quam nibh massa Fermentum amet libero consectetur eget  amet consectetur',
            topic: 'Gamefi',
        },
        {
            image: '/banner7.jfif',
            title: 'Massa quam nisl sapien libero quam',
            des: 'Lorem ipsum dolor sit amet consectetur. Massa quam nisl sapien libero quam nibh massa Fermentum amet libero consectetur eget  amet consectetur',
            topic: 'Cryptocurrency',
        },
        {
            image: '/banner7.jfif',
            title: 'Massa quam nisl sapien libero quam',
            des: 'Lorem ipsum dolor sit amet consectetur. Massa quam nisl sapien libero quam nibh massa Fermentum amet libero consectetur eget  amet consectetur',
            topic: 'Gamefi',
        },
        {
            image: '/banner7.jfif',
            title: 'Massa quam nisl sapien libero quam',
            des: 'Lorem ipsum dolor sit amet consectetur. Massa quam nisl sapien libero quam nibh massa Fermentum amet libero consectetur eget  amet consectetur',
            topic: 'Cryptocurrency',
        },
    ]

    return (
        <div className="bg-[url('/banner6.jfif')] bg-cover bg-no-repeat bg-center pb-24 mb-11">
            <div className="container mx-auto">
                <div className="px-20 py-[71px] grid grid-cols-5 gap-12 bg-white/55 rounded-b-[20px]">
                    <div className="col-span-2 flex flex-col gap-y-8">
                        {dataPostOne.map((item: Post) => <LayoutPostOne post={item} />)}
                    </div>
                    <div className="col-span-3 flex flex-col gap-y-9">
                        {dataPostTwo.map((item: Post) => <LayoutPostTwo post={item} />)}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ItemTabHome;