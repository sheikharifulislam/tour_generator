import { useEffect } from "react";
import { useFrame } from "react-frame-component";
import "./ct.css";

const CtDrawer = ({ children, open, onClose }) => {
    const { document: iframeDoc } = useFrame();

    const style = {
        position: "absolute",
        top: "0",
        right: "0",
        width: "350px",
    };

    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&display=swap";
        iframeDoc.head.appendChild(link);
    }, [iframeDoc]);

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
