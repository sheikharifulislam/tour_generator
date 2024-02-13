const generateCss = (element, parentLevel = 1, selector = []) => {
    if (element.tagName === "BODY") {
        selector.push("body");
        return selector;
    } else if (element.id) {
        selector.push(`#${element.id}`);
        return selector;
    }

    console.log("from element classList", element.classList);
    // console.log(element.parentNode);

    if (element.parentNode && (element.classList.length < 1 || parentLevel < 3)) {
        // console.log("inside recursion");
        generateCss(element.parentNode, parentLevel + 1, selector);
    }

    // console.log(element.classList);

    if (element.classList.length > 0) {
        // console.log(element.classList);
        selector.push(`.${element.classList[0]}`);
    } else {
        const index = Array.from(element.parentNode.children).indexOf(element);
        selector.push(`:nth-child(${index + 1})`);
    }

    // if (elemeelement);tNode && element.tagName !== "BODY" && element.classList.length > 0) {
    //     generateCss(element.parentNode, parentLevel + 1, selector);
    // }

    // if (element.tagName === "BODY") {
    //     selector.push("body");
    //     return selector;
    // } else {
    //     if (element.id) {
    //         selector.push(`#${element.id}`);
    //         return selector;
    //     } else if (element.classList.length > 1) {
    //         console.log(element.classList);
    //         selector.push(`.${element.classList[0]}`);
    //     } else {
    //         const index = Array.from(element.parentNode.children).indexOf(element);

    //         selector.push(`:nth-child(${index + 1})`);
    //     }
    // }

    return selector;
};

export default generateCss;
