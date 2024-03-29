import { useEffect, useState } from "react";
import ReactJoyride, { EVENTS, STATUS } from "react-joyride";
import "./app.css";
import FrameContent from "./components/FrameContent";

function App() {
    const [cssSelector, setCssSelector] = useState("");
    const [onSelector, setOnSelector] = useState(false);
    const [content, setContent] = useState("");
    const [skipIndex, setSkipIndex] = useState(
        (() => {
            const index = localStorage.getItem("skipIndex") || 0;
            return JSON.parse(index);
        })()
    );
    // const [steps, setSteps] = useState([]);
    const [steps, setSteps] = useState([]);

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
        // removeBorder(e);
        e.stopImmediatePropagation();
        e.stopPropagation();
        const currentElement = e.target;
        const result = generateCss(currentElement);
        const selectorStr = result.join(" > ");
        setCssSelector(selectorStr);
        setOnSelector(false);
        setSteps((prv) => [
            ...prv,
            {
                target: selectorStr,
                content,
            },
        ]);
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
        e.target.style.outline = "rgb(53, 86, 250) solid 3px";
    };

    const removeBorder = (e) => {
        console.log("from remove border");
        e.stopPropagation();
        e.stopImmediatePropagation();
        e.target.style.outline = null;
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

    // useEffect(() => {
    //     if (cssSelector) {
    //         const selectedElement = document.querySelector(`${cssSelector}`);
    //         selectedElement.style.backgroundColor = "red";
    //     }
    // }, [cssSelector]);

    function testClick() {
        console.log("from test click");
    }

    const cb = (state) => {
        const { index, action, status, type } = state;
        console.log(status);

        if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
            setSkipIndex(index + (action === "prev" ? -1 : 1));
        } else if ([STATUS.FINISHED].includes(status)) {
            localStorage.removeItem("skipIndex");
        } else if ([STATUS.SKIPPED].includes(status)) {
            localStorage.setItem("skipIndex", JSON.stringify(skipIndex));
        }
    };

    return (
        <>
            <div id="builder">
                <ReactJoyride
                    // stepIndex={0}
                    run={true}
                    continuous={true}
                    steps={steps}
                    scrollToFirstStep
                    showSkipButton
                    callback={cb}
                    stepIndex={skipIndex}
                    // beaconComponent={BeaconComponent}
                    showProgress
                    styles={{
                        options: {
                            arrowColor: "#e3ffeb",
                            backgroundColor: "#e3ffeb",
                            overlayColor: "rgba(79, 26, 0, 0.4)",
                            primaryColor: "#000",
                            textColor: "#004a14",
                            width: 900,
                            zIndex: 1000,
                        },
                    }}
                />
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
                steps={steps}
                setContent={setContent}
            />
        </>
    );
}

export default App;
