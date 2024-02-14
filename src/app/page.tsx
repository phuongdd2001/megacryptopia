"use client";
import React from "react";
import { tinos } from "@/data/font";
import { Avatar } from "antd";
import Image from "next/image";
import TitleHomeComponent from "@/components/home/title_home";
import TabsHome from "@/components/home/tabs_home";
import { Post } from "@/types/post";
import LayoutPostOne from "@/components/home/layout_post/layout_post_one";
import LayoutPostTwo from "@/components/home/layout_post/layout_post_two";
import LayoutPostThree from "@/components/home/layout_post/layout_post_three";
import { ArrowRight3 } from "iconsax-react";


export default function Home() {

  let dataPostOne: Post[] = [
    {
      title: 'Massa quam nisl sapien libero quam',
      des: 'Lorem ipsum dolor sit amet consectetur. Massa quam nisl sapien libero quam nibh massa Fermentum amet libero consectetur eget  amet consectetur',
      topic: 'Cryptocurrency',
    },
    {
      title: 'Massa quam nisl sapien libero quam',
      des: 'Lorem ipsum dolor sit amet consectetur. Massa quam nisl sapien libero quam nibh massa Fermentum amet libero consectetur eget  amet consectetur',
      topic: 'Cryptocurrency',
    },
    {
      title: 'Massa quam nisl sapien libero quam',
      des: 'Lorem ipsum dolor sit amet consectetur. Massa quam nisl sapien libero quam nibh massa Fermentum amet libero consectetur eget  amet consectetur',
      topic: 'Cryptocurrency',
    },
  ]

  let dataPostOne2: Post = {
    title: 'Lorem ipsum dolor sit amet consectetur. Sit nec varius sit lectus amet in nunc volutpat. A egestas volutpat dolor libero ligula. Lacus enim at.',
    image: '/banner8.jfif',
  };

  let dataPostTwo: Post[] = [
    {
      title: 'Lorem ipsum dolor sit amet risus consectetur. Maecenas vel viverra massa risus facilisi in nunc',
      image: '/banner7.jfif',
    },
    {
      title: 'Lorem ipsum dolor sit amet risus consectetur. Maecenas vel viverra massa risus facilisi in nunc',
      image: '/banner7.jfif',
    },
  ]

  let dataPostTwo2: Post[] = [
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
    {
      image: '/banner7.jfif',
      title: 'Massa quam nisl sapien libero quam',
      des: 'Lorem ipsum dolor sit amet consectetur. Massa quam nisl sapien libero quam nibh massa Fermentum amet libero consectetur eget  amet consectetur',
      topic: 'Cryptocurrency',
    },
  ]

  let dataPostThree: Post = {
    image: "/banner2.jfif",
    title: 'Lorem ipsum dolor sit amet consectetur. Sit nec varius sit lectus amet in nunc volutpat. A egestas volutpat dolor libero ligula. Lacus enim at.',
    des: 'Lorem ipsum dolor sit amet consectetur. Massa quam nisl sapien libero quam nibh massa Fermentum amet libero consectetur eget  amet consectetur',
  };

  let dataPostThree1: Post[] = [
    {
      image: "/banner2.jfif",
      title: 'Lorem ipsum dolor sit amet consectetur. Sit nec varius sit lectus amet in nunc volutpat. A egestas volutpat dolor libero ligula. Lacus enim at.',
      des: 'Lorem ipsum dolor sit amet consectetur. Massa quam nisl sapien libero quam nibh massa Fermentum amet libero consectetur eget  amet consectetur',
    },
    {
      image: "/banner2.jfif",
      title: 'Lorem ipsum dolor sit amet consectetur. Sit nec varius sit lectus amet in nunc volutpat. A egestas volutpat dolor libero ligula. Lacus enim at.',
      des: 'Lorem ipsum dolor sit amet consectetur. Massa quam nisl sapien libero quam nibh massa Fermentum amet libero consectetur eget  amet consectetur',
    },
    {
      image: "/banner2.jfif",
      title: 'Lorem ipsum dolor sit amet consectetur. Sit nec varius sit lectus amet in nunc volutpat. A egestas volutpat dolor libero ligula. Lacus enim at.',
      des: 'Lorem ipsum dolor sit amet consectetur. Massa quam nisl sapien libero quam nibh massa Fermentum amet libero consectetur eget  amet consectetur',
    },
    {
      image: "/banner2.jfif",
      title: 'Lorem ipsum dolor sit amet consectetur. Sit nec varius sit lectus amet in nunc volutpat. A egestas volutpat dolor libero ligula. Lacus enim at.',
      des: 'Lorem ipsum dolor sit amet consectetur. Massa quam nisl sapien libero quam nibh massa Fermentum amet libero consectetur eget  amet consectetur',
    },
  ]

  return (
    <main >
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-x-[22px] mb-28">
          <div className="col-span-3">
            <div>
              <div className="flex mb-[22px] pb-[22px] border-b-[#D4D4D4] border-b">
                <a className="mr-3">
                  <Image
                    src={"/banner3.jfif"}
                    alt="banner3"
                    width={100}
                    height={100}
                    priority
                    className="rounded-2xl min-h-[100px] min-w-[100px]"
                  />
                </a>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Massa quam nisl sapien libero quam nibh mas Fermentum consectetur eget</p>
              </div>
              <div className="flex mb-[22px] pb-[22px] border-b-[#D4D4D4] border-b">
                <a className="mr-3">
                  <Image
                    src={"/banner3.jfif"}
                    alt="banner3"
                    width={100}
                    height={100}
                    priority
                    className="rounded-2xl min-h-[100px] min-w-[100px]"
                  />
                </a>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Massa quam nisl sapien libero quam nibh mas Fermentum consectetur eget</p>
              </div>
              <div className="flex mb-[22px] pb-[22px] border-b-[#D4D4D4] border-b">
                <a className="mr-3">
                  <Image
                    src={"/banner3.jfif"}
                    alt="banner3"
                    width={100}
                    height={100}
                    priority
                    className="rounded-2xl min-h-[100px] min-w-[100px]"
                  />
                </a>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Massa quam nisl sapien libero quam nibh mas Fermentum consectetur eget</p>
              </div>
            </div>
            <div>
              <div className="">
                <h4 className={`${tinos.className} text-[34px] leading-[46px] px-[54px] pt-[11px] pb-[3px] bg-colorPrimary text-center rounded-t-2xl`}>ICO Overview</h4>
                <div className="bg-[#D3F4F5]/[.6] p-6 rounded-b-2xl">
                  <div className="flex items-center mb-[13px] pb-[13px] border-b-[#AECBFF] border-b">
                    <Image
                      src={"/ico1.png"}
                      alt="ico1"
                      width={40}
                      height={39}
                      priority
                      className="rounded-lg h-[39px] mr-[5px]"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm">Stabble</p>
                        <p><span className="text-[#0061F2] text-[10px] leading-5 mr-1">Goal</span><span className="text-sm">$1,080,000</span></p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-[#22C55E] text-[10px] leading-5 font-semibold 

                      before:content-[''] before:w-[5.66px] before:h-[5.66px] before:inline-block before:bg-[#22C55E] before:mr-[6px] before:rounded-full before:bottom-[1px] before:relative">Ongoing</p>

                        <Avatar.Group size={16} >
                          <Avatar src={"/ic_bitcoin.png"} gap={10} />
                          <Avatar src={"/ic_ether.png"} gap={10} />
                          <Avatar src={"/ic3.png"} gap={10} />
                        </Avatar.Group>
                      </div>
                    </div>

                  </div>
                  <div className="flex items-center mb-[13px] pb-[13px] border-b-[#AECBFF] border-b">
                    <Image
                      src={"/ico1.png"}
                      alt="ico1"
                      width={40}
                      height={39}
                      priority
                      className="rounded-lg h-[39px] mr-[5px]"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm">Stabble</p>
                        <p><span className="text-[#0061F2] text-[10px] leading-5 mr-1">Goal</span><span className="text-sm">$1,080,000</span></p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-[#22C55E] text-[10px] leading-5 font-semibold 

                      before:content-[''] before:w-[5.66px] before:h-[5.66px] before:inline-block before:bg-[#22C55E] before:mr-[6px] before:rounded-full before:bottom-[1px] before:relative">Ongoing</p>

                        <Avatar.Group size={16} >
                          <Avatar src={"/ic_bitcoin.png"} gap={10} />
                          <Avatar src={"/ic_ether.png"} gap={10} />
                          <Avatar src={"/ic3.png"} gap={10} />
                        </Avatar.Group>
                      </div>
                    </div>

                  </div>
                  <div className="flex items-center mb-[13px] pb-[13px] border-b-[#AECBFF] border-b">
                    <Image
                      src={"/ico1.png"}
                      alt="ico1"
                      width={40}
                      height={39}
                      priority
                      className="rounded-lg h-[39px] mr-[5px]"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm">Stabble</p>
                        <p><span className="text-[#0061F2] text-[10px] leading-5 mr-1">Goal</span><span className="text-sm">$1,080,000</span></p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-[#22C55E] text-[10px] leading-5 font-semibold 

                      before:content-[''] before:w-[5.66px] before:h-[5.66px] before:inline-block before:bg-[#22C55E] before:mr-[6px] before:rounded-full before:bottom-[1px] before:relative">Ongoing</p>

                        <Avatar.Group size={16} >
                          <Avatar src={"/ic_bitcoin.png"} gap={10} />
                          <Avatar src={"/ic_ether.png"} gap={10} />
                          <Avatar src={"/ic3.png"} gap={10} />
                        </Avatar.Group>
                      </div>
                    </div>

                  </div>
                  <div className="flex items-center mb-[13px] pb-[13px] border-b-[#AECBFF] border-b">
                    <Image
                      src={"/ico1.png"}
                      alt="ico1"
                      width={40}
                      height={39}
                      priority
                      className="rounded-lg h-[39px] mr-[5px]"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm">Stabble</p>
                        <p><span className="text-[#0061F2] text-[10px] leading-5 mr-1">Goal</span><span className="text-sm">$1,080,000</span></p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-[#22C55E] text-[10px] leading-5 font-semibold 

                      before:content-[''] before:w-[5.66px] before:h-[5.66px] before:inline-block before:bg-[#22C55E] before:mr-[6px] before:rounded-full before:bottom-[1px] before:relative">Ongoing</p>

                        <Avatar.Group size={16} >
                          <Avatar src={"/ic_bitcoin.png"} gap={10} />
                          <Avatar src={"/ic_ether.png"} gap={10} />
                          <Avatar src={"/ic3.png"} gap={10} />
                        </Avatar.Group>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="col-span-5">
            <div className="mb-14">
              <LayoutPostThree post={dataPostThree} />
            </div>
            <div className="flex flex-col gap-y-6">

              {dataPostTwo.map((item: Post) => <LayoutPostTwo post={item} />)}
            </div>
            <div>
              <div className="border border-[#D4D4D4] rounded-2xl pt-6 pb-5 pr-11 pl-7">
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="mb-10">
              <div className="border border-[#D4D4D4] rounded-2xl py-8 px-10 bg-[#F5F5F5] flex flex-col gap-y-4">
                {dataPostOne.map((item: Post, index: number) => <LayoutPostOne post={item} />)}
              </div>
            </div>
            <div>
              <TitleHomeComponent title="TOPIC" />
              <div className="my-3">
                <LayoutPostOne post={dataPostOne2} />
              </div>
              <div className="flex flex-col gap-y-4">
                <div className="flex items-center">
                  <Image
                    src={"/banner7.jfif"}
                    alt="banner7"
                    width={100}
                    height={100}
                    priority
                    objectFit="cover"
                    className="rounded-2xl mr-3"
                  />
                  <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Neque metus cum fringilla cras auctor. Morbi fermentum mi quam non nisl. Arcu tristique</p>
                </div>
                <div className="flex items-center">
                  <Image
                    src={"/banner7.jfif"}
                    alt="banner7"
                    width={100}
                    height={100}
                    priority
                    objectFit="cover"
                    className="rounded-2xl mr-3"
                  />
                  <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Neque metus cum fringilla cras auctor. Morbi fermentum mi quam non nisl. Arcu tristique</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="mt-11">
        <TabsHome />
      </div>
      <div className="my-16 ml-[70px]">
        <div className="relative mr-[72px]">
          <TitleHomeComponent title="TRENDING" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <button className="flex items-center">
              <span className="text-sm">See more</span>
              <ArrowRight3
                size="24"
                color="#00A3FF"
              />
            </button>
          </div>
        </div>
        <div className="overflow-x-scroll overflow-y-hidden flex gap-x-8 mt-8">
          {dataPostThree1.map((item: Post) =>
            <div className="min-w-[33.33%]">
              <LayoutPostThree post={item} />
            </div>
          )}
        </div>
      </div>
      <div className="mt-9 ml-[70px] mr-11">
        <div className="grid grid-cols-3 gap-x-24">
          <div className="col-span-2">
            <div className="flex flex-col gap-y-6">
              {dataPostTwo2.map((item: Post) => <LayoutPostTwo post={item} />)}
            </div>
          </div>
          <div className="col-span-1">
            <h2 className={`${tinos.className} uppercase text-[34px] leading-[46px] text-colorTitle mb-7`}>HOT STORY</h2>
            <LayoutPostThree post={dataPostThree} />
            <div className="mt-11">
              <div className="flex mb-[22px] pb-[22px] border-b-[#D4D4D4] border-b">
                <a className="mr-3">
                  <Image
                    src={"/banner3.jfif"}
                    alt="banner3"
                    width={70}
                    height={70}
                    priority
                    className="rounded-2xl min-h-[100px] min-w-[100px]"
                  />
                </a>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Massa quam nisl sapien libero quam nibh mas Fermentum consectetur eget</p>
              </div>
              <div className="flex mb-[22px] pb-[22px] border-b-[#D4D4D4] border-b">
                <a className="mr-3">
                  <Image
                    src={"/banner3.jfif"}
                    alt="banner3"
                    width={70}
                    height={70}
                    priority
                    className="rounded-2xl min-h-[100px] min-w-[100px]"
                  />
                </a>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Massa quam nisl sapien libero quam nibh mas Fermentum consectetur eget</p>
              </div>
              <div className="flex mb-[22px] pb-[22px] border-b-[#D4D4D4] border-b">
                <a className="mr-3">
                  <Image
                    src={"/banner3.jfif"}
                    alt="banner3"
                    width={70}
                    height={70}
                    priority
                    className="rounded-2xl min-h-[100px] min-w-[100px]"
                  />
                </a>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Massa quam nisl sapien libero quam nibh mas Fermentum consectetur eget</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-16 ml-[70px]">
        <div className="relative mr-[72px]">
          <TitleHomeComponent title="LEARN" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <button className="flex items-center">
              <span className="text-sm">See more</span>
              <ArrowRight3
                size="24"
                color="#00A3FF"
              />
            </button>
          </div>
        </div>
        <div className="overflow-x-scroll overflow-y-hidden flex gap-x-8 mt-8">
          {dataPostThree1.map((item: Post) =>
            <div className="min-w-[33.33%]">
              <LayoutPostThree post={item} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
