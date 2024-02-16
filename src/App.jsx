import { useEffect, useState } from "react";
import "./app.css";
import FrameContent from "./components/FrameContent";

function App() {
    const [cssSelector, setCssSelector] = useState("");
    const [onSelector, setOnSelector] = useState(false);

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const clickFn = (e) => {
        e.preventDefault();
        showDrawer();
        e.stopImmediatePropagation();
        e.stopPropagation();
        const currentElement = e.target;
        const result = generateCss(currentElement);
        const selectorStr = result.join(" > ");
        setCssSelector(selectorStr);
        setOnSelector(false);
    };

    const generateCss = (element, parentLevel = 1, selector = []) => {
        if (element.tagName === "BODY") {
            selector.push("body");
            return selector;
        } else if (element.id) {
            selector.push(`#${element.id}`);
            return selector;
        }

        if (element.parentNode && (element.classList.length < 1 || parentLevel < 3)) {
            generateCss(element.parentNode, parentLevel + 1, selector);
        }

        if (element.classList.length > 0) {
            selector.push(`.${element.classList[0]}`);
        } else {
            const index = Array.from(element.parentNode.children).indexOf(element);
            selector.push(`:nth-child(${index + 1})`);
        }

        return selector;
    };

    const addBorder = (e) => {
        console.log(e.target);
        e.stopPropagation();
        e.stopImmediatePropagation();
        e.target.classList.add("tour-border_hover");
    };

    const removeBorder = (e) => {
        e.stopPropagation();
        e.stopImmediatePropagation();
        e.target.classList.remove("tour-border_hover");
    };

    useEffect(() => {
        if (onSelector) {
            document.body.addEventListener("click", clickFn, {
                capture: onSelector,
            });

            document.body.addEventListener("mouseover", addBorder);
            document.body.addEventListener("mouseout", removeBorder);
        }

        if (!onSelector) {
            document.body.removeEventListener("click", clickFn, {
                capture: true,
            });

            document.body.removeEventListener("mouseover", addBorder);
            document.body.removeEventListener("mouseout", removeBorder);
        }

        return () => {
            document.body.removeEventListener("click", clickFn, {
                capture: true,
            });
            document.body.removeEventListener("mouseover", addBorder);
            document.body.removeEventListener("mouseout", removeBorder);
        };
    }, [onSelector]);

    useEffect(() => {
        if (cssSelector) {
            const selectedElement = document.querySelector(`${cssSelector}`);
            selectedElement.style.backgroundColor = "red";
        }
    }, [cssSelector]);

    function testClick() {
        console.log("from test click");
    }

    return (
        <>
            <div id="builder">
                <div>
                    <div>
                        <p id="this_p">This is P</p>
                    </div>
                </div>

                <div className="second_p">
                    <div>
                        <div>
                            <p className="this_p_class">Second P</p>
                        </div>
                    </div>
                </div>
                <div id="second_p">
                    <div>
                        <div>
                            <p className="this_p_class">third P</p>
                        </div>
                    </div>
                </div>

                <div id="nested_div_1">
                    <div>
                        <div>
                            <div>
                                <div className="nested_div_5">
                                    <p className="nested_p"> multi Nested P</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <p className="for_body">For Body</p>
                    </div>
                </div>

                <div className="nested_div_class">
                    <div>
                        <div>
                            <div>
                                <div className="nested_div_5">
                                    <p className="nested_p" onClick={testClick}>
                                        <a href="https://google.com"> multi Nested P for class</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <div className="">
                                    <p className="" onClick={testClick}>
                                        <a href="https://google.com"> multi Nested Second P for class</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FrameContent
                setOnSelector={setOnSelector}
                showDrawer={showDrawer}
                cssSelector={cssSelector}
                setCssSelector={setCssSelector}
                onClose={onClose}
                open={open}
            />
        </>
    );
}

export default App;
