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
            {open && (
                <div style={style} className="slideInRight">
                    {children}
                </div>
            )}
        </>
    );
};

export default CtDrawer;
