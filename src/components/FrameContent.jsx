import React from "react";
import { createPortal } from "react-dom";
import Frame, { FrameContextConsumer } from "react-frame-component";
import CtDrawer from "./CtDrawer";

import {
    CreateTourBtn,
    Input,
    InputWrapper,
    Modal,
    ModalBody,
    ModalCloseBtn,
    ModalContainer,
    ModalHeader,
    ModalTitle,
    PublishTourBtn,
    SaveTourBtn,
    StepsWrapper,
    TourActionBtnWrapper,
} from "../StyleComponents/ModalHeader.stc";

import { StyleSheetManager } from "styled-components";

const options = [
    { value: "highlight", label: "Highlight" },
    { value: "welcome", label: "Welcome" },
    { value: "modal", label: "modal" },
    { value: "toast", label: "Toast" },
    { value: "redirect", label: "Redirect" },
];

const FrameContent = ({ setOnSelector, cssSelector, setCssSelector, onClose, showDrawer, open, steps }) => {
    const openBuilder = () => {
        setOnSelector(true);
        onClose();
    };

    return createPortal(
        <Frame
            style={{
                top: open ? 0 : "250px",
                bottom: open ? 0 : "unset",
                width: open ? "500px" : "50px",
                height: open ? "100vh" : "50px",
                // width: "500px",
                // height: "500px",
                minHeight: open ? "100vh" : "unset",
                maxHeight: open ? "100vh" : "unset",
                transition: "right 0.3s ease 0s",
                boxShadow: "-2px 0px 6px rgba(0,0,0,0.25)",
                right: open ? "0px" : "100px",
                borderRadius: open ? "0px" : "8px 0px 0px 8px",
                // background: open ? "white" : "rgb(53, 86, 250)",
                // backgroundColor: "#fff",
                background: open ? "#fff" : "unset",
                // background: "unset",
                position: "fixed",
                border: "initial",
                padding: "unset",
                margin: "unset",
            }}
        >
            {!open && (
                <button
                    type="primary"
                    shape="circle"
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 448 512">
                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                        </svg>
                    }
                    size={"small"}
                    onClick={showDrawer}
                />
            )}

            <CtDrawer open={open}>
                <FrameContextConsumer>
                    {(frameContext) => (
                        <StyleSheetManager target={frameContext.document.head}>
                            <Modal>
                                <ModalContainer>
                                    <ModalHeader>
                                        <ModalTitle>I Don't Know</ModalTitle>
                                        <ModalCloseBtn>Collapse</ModalCloseBtn>
                                    </ModalHeader>
                                    <ModalBody>
                                        {/* <TourActionBtnWrapper>
                                        <CreateTourBtn>Create Tour</CreateTourBtn>
                                        <UpdateTourBtn>Update Tour</UpdateTourBtn>
                                    </TourActionBtnWrapper>
                                    <PreviousTourContainer>
                                        <PreviousTourTitle>Previous Tour</PreviousTourTitle>
                                        <PreviousTourList>
                                            <PreviousTourItemContainer>
                                                <PreviousTourListItem>Item One</PreviousTourListItem>
                                                <PreviousTourEditBtn>Edit</PreviousTourEditBtn>
                                            </PreviousTourItemContainer>
                                        </PreviousTourList>
                                    </PreviousTourContainer> */}

                                        <TourActionBtnWrapper>
                                            <SaveTourBtn>Save Changes</SaveTourBtn>
                                            <PublishTourBtn>Publish</PublishTourBtn>
                                        </TourActionBtnWrapper>
                                        <InputWrapper>
                                            <label htmlFor="">Tour Name</label>
                                            <Input type="text" placeholder="Enter Your Tour Name" />
                                        </InputWrapper>
                                        <StepsWrapper>
                                            <h3>Steps</h3>
                                            <CreateTourBtn>Add Step</CreateTourBtn>
                                            <InputWrapper>
                                                <label htmlFor="">Title</label>
                                                <Input type="text" placeholder="Enter Your Tour Name" />
                                            </InputWrapper>
                                            <input type="text" value={cssSelector} />
                                        </StepsWrapper>
                                        <input type="text" value={JSON.stringify(steps)} />
                                        <button onClick={openBuilder}>Enable</button>
                                    </ModalBody>
                                </ModalContainer>
                            </Modal>
                        </StyleSheetManager>
                    )}
                </FrameContextConsumer>
            </CtDrawer>
        </Frame>,
        document.body
    );
};

export default FrameContent;
