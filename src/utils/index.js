export const generateSelector = (element, parentLevel = 1, selector = []) => {
    if (element.tagName === "BODY") {
        selector.push("body");
        return selector;
    } else if (element.id) {
        selector.push(`#${element.id}`);
        return selector;
    }

    if (element.parentNode && (element.classList.length < 1 || parentLevel < 3)) {
        generateSelector(element.parentNode, parentLevel + 1, selector);
    }

    if (element.classList.length > 0) {
        selector.push(`.${element.classList[0]}`);
    } else {
        const index = Array.from(element.parentNode.children).indexOf(element);
        selector.push(`:nth-child(${index + 1})`);
    }

    return selector;
};
