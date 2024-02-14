import { tinos } from "@/data/font";

export default function TitleHomeComponent(props: { title: string }) {
  const { title } = props;

  return (
    <div className="ml-[10px]">
      <div className="skew-x-[-20deg] rounded-lg bg-colorPrimary inline-block">
        <h2
          className={`${tinos.className} uppercase text-[34px] leading-[46px] text-colorTitle skew-x-[20deg] py-[5px] px-[17px]`}
        >
          {title}
        </h2>
      </div>
      <div className=" border-b border-b-colorPrimary"></div>
    </div>

  );
}
