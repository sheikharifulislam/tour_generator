import { describe, expect, it } from "vitest";
import generateCss from "./utils";

const firstDom = {
    tagName: "",
    id: "this_p",
    parentNode: [
        {
            class: ["second_div"],
            parentNode: [
                {
                    class: ["first_div"],
                },
            ],
        },
    ],
};

const secondDom = {
    tagName: "p",
    classList: [],
    parentNode: {
        classList: [],
        tagName: "div",
    },
    // parentNode: [
    //     {
    //         classList: [],
    //         tagName: "div",
    //         parentNode: [
    //             {
    //                 classList: [],
    //                 tagName: "div",
    //                 parentNode: [
    //                     {
    //                         classList: [],
    //                         tagName: "div",
    //                         parentNode: [
    //                             {
    //                                 classList: [],
    //                                 id: "nested_div",
    //                             },
    //                         ],
    //                     },
    //                 ],
    //             },
    //         ],
    //     },
    // ],
};

describe("css selector generator", () => {
    it("first Dom", () => {
        const result = generateCss(firstDom);
        const selectorStr = result.join(" > ");
        expect(selectorStr).toEqual("#this_p");
    });

    it("second Dom", () => {
        const result = generateCss(secondDom);
        const selectorStr = result.join(" > ");
        expect(selectorStr).toEqual("#nested_div > nth-child(1) > nth-child(1) > nth-child(1)");
    });
});
