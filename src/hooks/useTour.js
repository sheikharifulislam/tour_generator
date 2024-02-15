import { useEffect, useState } from "react";
import { generateSelector } from "../utils";

const useTour = ({ tourFn }) => {
    const [enableBuilder, setEnableBuilder] = useState(false);
    const [runTour, setRunTour] = useState(false);
    const [steps, setSteps] = useState([]);

    const enableTourBuilder = () => {
        setEnableBuilder(true);
    };
    const disableTourBuilder = () => {
        setEnableBuilder(false);
    };

    const enableTour = () => {
        setRunTour(true);
    };

    const disableTour = () => {
        setRunTour(false);
    };

    const addTour = (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const currentElement = event.target;
        const result = generateSelector(currentElement);
        const selectorStr = result.join(" > ");
        const content = tourFn(selectorStr);
        setSteps((prv) => [
            ...prv,
            {
                target: selectorStr,
                content,
            },
        ]);
    };

    const addBorder = (e) => {
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
        document.body.addEventListener("click", addTour, {
            capture: enableBuilder,
        });

        // if (onSelector) {
        //     document.body.addEventListener("mouseover", addBorder);
        //     document.body.addEventListener("mouseout", removeBorder);
        // }

        // if (!onSelector) {
        //     document.body.removeEventListener("mouseover", addBorder);
        //     document.body.removeEventListener("mouseout", removeBorder);
        // }

        return () => {
            document.body.removeEventListener("click", addTour);
            // document.body.removeEventListener("mouseover", addBorder);
            // document.body.removeEventListener("mouseout", removeBorder);
        };
    }, [enableBuilder]);

    return {
        enableTourBuilder,
        disableTourBuilder,
        enableTour,
        addTour,
        disableTour,
        enableBuilder,
        runTour,
        steps,
    };
};

export default useTour;
