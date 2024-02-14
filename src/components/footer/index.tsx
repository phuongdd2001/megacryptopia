"use client";

import Image from "next/image";
import Link from "next/link";
import { QuickLinks, aboutUs, srcollToId } from "@/data";
import { LinkItems } from "@/types/header";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { tinos } from "@/data/font";

function LayoutFooter() {
    const pathname = usePathname();

    const router = useRouter();

    return (
        <>
            <footer className="bg-[url('/bg_footer.png')] bg-contain bg-no-repeat bg-left-top">
                <div className="bg-black/80 pt-[70px] pb-[82px] pr-[140px] pl-[114px] grid grid-flow-row-dense grid-cols-8 gap-x-[78px]">
                    <div className="col-span-3">
                        <Image
                            src={"/megacryptopia_logo.png"}
                            alt="megacryptopia_logo"
                            width={230}
                            height={46}
                            className="cursor-pointer"
                            onClick={() => {
                                router.push("/");
                            }}
                            priority
                        />
                        <p className="text-sm mt-5 text-white">
                            Lorem ipsum dolor sit amet consectetur massa quam nisl sapien libero quam nibh massa Fermentum amet libero consectetur eget  amet consectetur  consectetur massa quam nisl sapien libero quam nibh massa Fermentum amet libero
                        </p>
                    </div>
                    <div className="col-span-1">
                        <div className="">
                            <h2 className={`${tinos.className} text-2xl font-bold text-white mb-7`}>ABOUT US</h2>
                            <div>
                                <ul className="[&>*:not(:last-child)]:mb-[20px] max-sm:[&>*:not(:last-child)]:mb-[10px]">
                                    {aboutUs.map((item: LinkItems, index: number) => (
                                        <li key={index}>
                                            <Link
                                                className={`${pathname === item.link ? "active" : ""
                                                    } text-white text-base leading-[18px] ease-in duration-300 hover:text-colorPrimary`}
                                                href={item.link}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="">
                            <h2 className={`${tinos.className} text-2xl font-bold text-white mb-7`}>TOOLS</h2>
                            <div>
                                <ul className="[&>*:not(:last-child)]:mb-[20px] max-sm:[&>*:not(:last-child)]:mb-[10px]">
                                    {QuickLinks.map((item: LinkItems, index: number) => (
                                        <li key={index}>
                                            <Link
                                                className={`${pathname === item.link ? "active" : ""
                                                    } text-white text-base leading-[18px] ease-in duration-300 hover:text-colorPrimary`}
                                                href={item.link}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                    <h2 className={`${tinos.className} text-2xl font-bold text-white mb-7`}>STAY UPDATED</h2>
                            <div>
                                <div>
                                    <p className="text-[20px] text-white font-semibold leading-7 mb-[10px] max-sm:text-[10px] max-sm:leading-[14px]">
                                        Follow us on:
                                    </p>
                                </div>
                                <div className="flex gap-x-[32px] max-lg:justify-center max-sm:gap-x-[16px]">
                                    <div className="transition duration-300 ease-in-out">
                                        <a
                                            target="_blank"
                                        >
                                            <Image
                                                src={"/ic_fb.png"}
                                                alt="ic_fb"
                                                width={42}
                                                height={34}
                                                className="max-sm:w-[16px] max-sm:h-[16px]"
                                            />
                                        </a>
                                    </div>
                                    <div className="transition duration-300 ease-in-out">
                                        <a
                                            target="_blank"
                                        >
                                            <Image
                                                src={"/ic_youtube.png"}
                                                alt="ic_youtube"
                                                width={42}
                                                height={34}
                                                className="max-sm:w-[16px] max-sm:h-[16px]"
                                            />
                                        </a>
                                    </div>
                                    <div className="transition duration-300 ease-in-out">
                                        <a
                                            target="_blank"
                                        >
                                            <Image
                                                src={"/ic_instagram.png"}
                                                alt="ic_instagram"
                                                width={42}
                                                height={34}
                                                className="max-sm:w-[16px] max-sm:h-[16px]"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default LayoutFooter;
