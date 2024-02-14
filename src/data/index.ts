import { LinkItems } from '@/types/header';
import { Partner } from "@/types";

export const Headers: LinkItems[] = [
  {
    title: "News",
    link: "/",
  },
  {
    title: "Cryptopia",
    link: "/cryptopia",
  },
  {
    title: "Learn",
    link: "/learn",
  },
  {
    title: "Community",
    link: "/community",
  },
  {
    title: "Event",
    link: "/event",
  },
];

export const aboutUs: LinkItems[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Cryptopia",
    link: "#outstandings",
  },
  {
    title: "Learn",
    link: "#outproduct",
  },
  {
    title: "Community",
    link: "#ourteam",
  },
];

export const QuickLinks: LinkItems[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Outstandings",
    link: "#outstandings",
  },
  {
    title: "Our Product",
    link: "#outproduct",
  },
  {
    title: "Our Team",
    link: "#ourteam",
  },
];



export const srcollToId = (id: string, pathname: string, router: any) => {

  
    if (pathname === '/') {
      const newUrl = `${pathname}${router.query ? `?${new URLSearchParams(router.query).toString()}` : ''}${id}`;

      window.history.pushState({ path: newUrl }, '', newUrl);

      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    } else {
      router.push(`/${id}`);
      setTimeout(() => {
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
        }
      }, 100);
    }
  


}