"use client";

import { Headers, srcollToId } from "@/data";
import { manrope, tinos } from "@/data/font";
import { LinkItems } from "@/types/header";
import { ArrowDown3, ArrowUp3, DollarCircle, Notification, Star, TrendUp } from "iconsax-react";
import Image from "next/image";
import Input from "postcss/lib/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function LayoutHeader() {

  const router = useRouter();

  const pathname = usePathname();

  return (
    <div>
      <div className="bg-[#171717] py-[12px] pl-[42px] flex justify-between">
        <div className="flex gap-x-9">
          <div className="flex items-center gap-x-[6px]">
            <p className="text-xs leading-5 text-white">Cryptos</p>
            <p className={`${manrope.className} text-colorPrimary text-[10px] leading-5`}>2M+</p>
          </div>
          <div className="flex items-center gap-x-[6px]">
            <p className="text-xs leading-5 text-white">Cryptos</p>
            <p className={`${manrope.className} text-colorPrimary text-[10px] leading-5`}>2M+</p>
          </div>
          <div className="flex items-center gap-x-[6px]">
            <p className="text-xs leading-5 text-white">Cryptos</p>
            <p className={`${manrope.className} text-colorPrimary text-[10px] leading-5`}>2M+</p>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center gap-x-4 mr-32">
            <Image
              src={"/logo_en.png"}
              alt="logo_en"
              width={18}
              height={19}
              className="cursor-pointer max-h-[19px]"
              onClick={() => {
              }}
              priority
            />
            <DollarCircle size="20" color="#22C55E" variant="Bold" />
            <Notification size="24" color="#FFF" variant="Bold" />
            <button
              className="ml-5"
            >
              <p className={`${manrope.className} text-sm leading-6 text-white font-medium`}>Log In</p>
            </button>
          </div>
          <div className="">
            <button
              className="bg-colorPrimary absolute top-[5px] right-0 rounded-tl-[25px]"
            >
              <p className="text-sm leading-6 text-colorText font-medium px-[34px] py-[9px]">Sign Up</p>
            </button>
          </div>
        </div>

      </div>
      <div className="flex justify-between py-[11px] pl-[42px] pr-[25px]">
        <div className="flex items-center">
          <div className="mr-[22px]">
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
          </div>
          <div className="flex items-center gap-x-[6px]">
            <a>
              <TrendUp size="24" color="#171717" variant="Bold" />
            </a>
            <a className="text-[10px] leading-5 px-2 font-semibold text-white bg-colorText rounded-full"><span>#</span><span>LUNC Voting</span></a>
            <a className="text-[10px] leading-5 px-2 font-semibold text-white bg-colorText rounded-full"><span>#</span><span>LUNC Voting</span></a>
            <a className="text-[10px] leading-5 px-2 font-semibold text-white bg-colorText rounded-full"><span>#</span><span>LUNC Voting</span></a>
          </div>
        </div>
        <div className="flex items-center">
          <Star size="24" color="#FFBC0E" variant="Bold" className="mr-1" />
          <p className={`${tinos.className} text-[#92400E] text-lg leading-6 font-bold`} >Watchlist</p>
        </div>
      </div>
      <div className="bg-[#F5F5F5]">
        <div className=" container mx-auto flex items-center">
          <ul className="flex gap-x-[76px]">
            {Headers.map((item: LinkItems, index: number) => (
              <li key={index}>
                <button className={`${pathname === item.link ? 'active' : ''} ${tinos.className} text-colorLink font-bold text-lg leading-[56px] ease-in duration-300 hover:text-colorPrimary`}
                  onClick={() => srcollToId(item.link, pathname, router)}>{item.title}</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
        </div>
      </div>
      <div className="py-2 pl-[42px] border-b-[#D4D4D4] border-b">
        <div className="flex gap-x-5">
          <div className="flex items-center">
            <Image
              src={"/ic_bitcoin.png"}
              alt="ic_bitcoin"
              width={18}
              height={18}
              className="cursor-pointer m-1"
              onClick={() => {
              }}
              priority
            />
            <p className={`${tinos.className} text-xs leading-5 text-colorText m-1`}>Cryptos</p>
            <p className="text-colorPrimary text-[10px] leading-5">2M+</p>
            <div className="flex items-center ml-1">
              <ArrowDown3 size="24" color="#DC2626" variant="Bold" />
              <p className="text-[#DC2626] text-[10px] leading-5">2.11%</p>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src={"/ic_ether.png"}
              alt="ic_ether"
              width={18}
              height={18}
              className="cursor-pointer m-1"
              onClick={() => {
              }}
              priority
            />
            <p className={`${tinos.className} text-xs leading-5 text-colorText m-1`}>Cryptos</p>
            <p className="text-colorPrimary text-[10px] leading-5">2M+</p>
            <div className="flex items-center ml-1">
              <ArrowUp3 size="24" color="#22C55E" variant="Bold" />
              <p className="text-[#22C55E] text-[10px] leading-5">2.11%</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default LayoutHeader;
