import { useState } from "react";
import ReactJoyride, { EVENTS, STATUS } from "react-joyride";

const Tour = ({ run, steps }) => {
    const [skipIndex, setSkipIndex] = useState(
        (() => {
            const index = localStorage.getItem("skipIndex") || 0;
            return JSON.parse(index);
        })()
    );
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
        <ReactJoyride
            run={run}
            continuous={true}
            steps={steps}
            scrollToFirstStep
            showSkipButton
            callback={cb}
            stepIndex={skipIndex}
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
    );
};

export default Tour;
