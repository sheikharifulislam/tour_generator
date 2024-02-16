import { useLayoutEffect } from "react";
import { useFrame } from "react-frame-component";
import "./ct.css";

const CtDrawer = ({ children, open, onClose }) => {
    const { document: iframeDoc } = useFrame();

    useLayoutEffect(() => {
        const styleTags = document.head.querySelectorAll("style");
        console.log(styleTags);
        Array.from(styleTags).forEach((tag) => {
            const frameStyles = tag.cloneNode(true);

            // doc is reference to iframe document
            iframeDoc.head.append(frameStyles);
        });

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "./text.css";
        iframeDoc.head.append(link);
    }, [iframeDoc]);

    const style = {
        position: "absolute",
        top: "0",
        right: "0",
        width: "350px",
    };
    return (
        <>
            {/* <Button
                type="primary"
                shape="circle"
                style={{ position: "absolute", left: "10px", top: "250px", width: "44px", height: "44px" }}
                icon={<SearchOutlined />}
            /> */}
            {open && (
                <div style={style} className="slideInRight">
                    <h1 className="test">This is test</h1>
                    {children}
                </div>
            )}
        </>
    );
};

export default CtDrawer;
