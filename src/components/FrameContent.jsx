import { ArrowLeftOutlined } from "@ant-design/icons";
import React from "react";
import Frame from "react-frame-component";
import CtDrawer from "./CtDrawer";

import "./ct.css";

import { Button, ConfigProvider, Select, Typography } from "antd";
import { createPortal } from "react-dom";

const { Title } = Typography;

const options = [
    { value: "highlight", label: "Highlight" },
    { value: "welcome", label: "Welcome" },
    { value: "modal", label: "modal" },
    { value: "toast", label: "Toast" },
    { value: "redirect", label: "Redirect" },
];

const FrameContent = ({ setOnSelector, cssSelector, setCssSelector, onClose, showDrawer, open }) => {
    const openBuilder = () => {
        setOnSelector(true);
        onClose();
    };

    return createPortal(
        <Frame
            style={{
                top: open ? 0 : "250px",
                bottom: open ? 0 : "unset",
                width: open ? "500px" : "50px",
                height: open ? "100vh" : "50px",
                // width: "500px",
                // height: "500px",
                minHeight: open ? "100vh" : "unset",
                maxHeight: open ? "100vh" : "unset",
                transition: "right 0.3s ease 0s",
                boxShadow: "-2px 0px 6px rgba(0,0,0,0.25)",
                right: open ? "0px" : "100px",
                borderRadius: open ? "0px" : "8px 0px 0px 8px",
                // background: open ? "white" : "rgb(53, 86, 250)",
                // backgroundColor: "#fff",
                background: open ? "#fff" : "unset",
                // background: "unset",
                position: "fixed",
                border: "initial",
                padding: "unset",
                margin: "unset",
            }}
        >
            <div>
                {!open && (
                    <Button
                        type="primary"
                        shape="circle"
                        size="large "
                        icon={<ArrowLeftOutlined />}
                        onClick={showDrawer}
                    />
                )}

                <ConfigProvider>
                    <CtDrawer open={open}>
                        <Title>Steps</Title>
                        <div>
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" id="title" placeholder="Enter Your Tour Title" />
                        </div>
                        <div>
                            <label htmlFor="type">Type</label>
                            <select name="" id="">
                                {options.map((item) => (
                                    <option key={item.value} value={item.value}>
                                        {item.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <Select
                            defaultValue="lucy"
                            style={{
                                width: 120,
                            }}
                            // onChange={handleChange}
                            options={[
                                {
                                    value: "jack",
                                    label: "Jack",
                                },
                                {
                                    value: "lucy",
                                    label: "Lucy",
                                },
                                {
                                    value: "Yiminghe",
                                    label: "yiminghe",
                                },
                                {
                                    value: "disabled",
                                    label: "Disabled",
                                    disabled: true,
                                },
                            ]}
                        />
                        <div>
                            <label htmlFor="css_selector">CSS selector for element to highlight</label>
                            <input
                                type="text"
                                value={cssSelector}
                                onChange={(e) => setCssSelector(e.target.value)}
                                name=""
                                id=""
                            />
                        </div>
                        <div>
                            <button onClick={openBuilder}>Select Element</button>
                        </div>
                    </CtDrawer>
                </ConfigProvider>
            </div>
        </Frame>,
        document.body
    );
};

export default FrameContent;
