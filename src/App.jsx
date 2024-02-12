import { useEffect, useState } from "react";
import "./app.css";

function App() {
    const [cssSelector, setCssSelector] = useState("");

    const clickFn = (e) => {
        const currentElement = e.target;
        console.log(currentElement);

        const result = generateCss(currentElement);
        const selectorStr = result.join(" > ");
        console.log(selectorStr);
        setCssSelector(selectorStr);
    };

    const generateCss = (element, parentLevel = 1, selector = []) => {
        if (element.parentNode && parentLevel !== 3 && element.tagName !== "BODY") {
            // console.log("inside recursion");
            generateCss(element.parentNode, parentLevel + 1, selector);
        }

        if (element.tagName === "BODY") {
            selector.push("body");
        } else {
            if (element.id) {
                selector.push(`#${element.id}`);
            } else if (element.classList) {
                console.log(element.classList);
                selector.push(`.${element.classList.split("")[0]}`);
            } else {
                var index = Array.from(element.parentNode.children).indexOf(element);

                selector.push(`:nth-child(${index + 1})`);
            }
        }

        return selector;
    };

    const addBorder = (e) => {
        e.target.classList.add("tour-border_hover");
    };

    const removeBorder = (e) => {
        e.target.classList.add("tour-border_hover");
    };

    useEffect(() => {
        document.body.addEventListener("click", clickFn);

        document.body.addEventListener("mouseover", addBorder);
        document.body.addEventListener("mouseleave", removeBorder);

        return () => {
            document.body.removeEventListener("click", clickFn);
            document.body.removeEventListener("mouseover", addBorder);
            document.body.removeEventListener("mouseleave", removeBorder);
        };
    }, []);

    useEffect(() => {
        if (cssSelector) {
            const selectedElement = document.querySelector(`${cssSelector}`);
            selectedElement.style.backgroundColor = "red";
        }
    }, [cssSelector]);

    return (
        <div
            style={{
                width: "80%",
                margin: "0 auto",
                marginTop: "100px",
            }}
        >
            <h1 className="heading heading_1">This is App</h1>
            <div id="one">
                <p>Div 1</p>
                <div id="tow">
                    <p>Div 2</p>
                    <div id="three">
                        <p>Div 3</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
