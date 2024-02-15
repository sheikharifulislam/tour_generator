import "./ct.css";

const CtDrawer = ({ children, open, onClose }) => {
    const style = {
        position: "absolute",
        top: "0",
        right: "0",
        width: "350px",
    };
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
