"use client";
import { Tabs, TabsProps } from "antd";
import React, { useState } from "react";
import ItemTabHome from "./item_tabs_home";
import { tinos } from "@/data/font";

function TabsHome() {

    const [type, setType] = useState<string>("");

    const items: TabsProps["items"] = [
        {
            key: "all",
            label: `ALL`,
            children: <ItemTabHome title={type} />,
        },
        {
            key: "cryptocurrency",
            label: `CRYPTOCURRENCY`,
            children: <ItemTabHome title={type} />,
        },

        {
            key: "finance",
            label: `FINANCE`,
            children: <ItemTabHome title={type} />,
        },
        {
            key: "gamefi",
            label: `GAMEFI`,
            children: <ItemTabHome title={type} />,
        },
        {
            key: "technology",
            label: `TECHNOLOGY`,
            children: <ItemTabHome title={type} />,
        },
        {
            key: "web3",
            label: `WEB3`,
            children: <ItemTabHome title={type} />,
        },
    ];

    const onChange = (key: string) => {
        setType(key);
    };

    return (
        <div className="tabs_home">
            <Tabs
                onChange={onChange}
                type="card"
                items={items}
                size="large"
                centered
                defaultActiveKey="gamefi"
                className={`${tinos.className} text-2xl font-bold`}
            />
        </div>
    );
}

export default TabsHome;