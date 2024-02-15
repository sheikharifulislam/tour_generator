import { Button } from "antd";

import React from "react";
import { createPortal } from "react-dom";
import Frame from "react-frame-component";
import CtDrawer from "./CtDrawer";

import { ConfigProvider, Typography } from "antd";

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
                width: open ? "350px" : "44px",
                height: open ? "100vh" : "44px",
                minHeight: open ? "100vh" : "unset",
                maxHeight: open ? "100vh" : "unset",
                transition: "right 0.3s ease 0s",
                boxShadow: "-2px 0px 6px rgba(0,0,0,0.25)",
                right: open ? "0px" : "100px",
                borderRadius: open ? "0px" : "8px 0px 0px 8px",
                background: open ? "white" : "rgb(53, 86, 250)",
                position: "fixed",
                border: "initial",
                padding: "unset",
                margin: "unset",
            }}
        >
            {!open && (
                <Button
                    type="primary"
                    shape="circle"
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 448 512">
                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                        </svg>
                    }
                    size={"small"}
                    onClick={showDrawer}
                />
            )}

            <ConfigProvider>
                <CtDrawer open={open}>
                    <h2 className="mt-10">Steps</h2>
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
        </Frame>,
        document.body
    );
};

export default FrameContent;
