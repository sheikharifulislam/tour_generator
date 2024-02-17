import styled from "styled-components";

export const Modal = styled.div`
    overflow: hidden;
`;

export const ModalContainer = styled.div`
    padding: 10px;
    font-family: sans-serif;
`;

export const ModalHeader = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 12px 10px;
    -webkit-box-align: center;
    align-items: center;
    position: fixed;
    top: 0px;
    left: 0px;
    background: white;
    width: 100%;
    box-sizing: border-box;
    box-shadow: rgb(204, 204, 204) 0px 2px 4px;
`;

export const ModalTitle = styled.h1`
    font-family: "Baloo 2";
    font-weight: 600;
    margin: 0px;
    color: rgb(53, 86, 250);
`;

export const ModalCloseBtn = styled.button`
    border-radius: 6px;
    padding: 9px 18px;
    font-size: 14px;
    border: 1px solid rgb(187, 187, 187);
    background: white;
    cursor: pointer;
    font-family: inherit;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 6px;
`;

export const ModalBody = styled.div`
    margin-top: 80px;
`;

export const TourActionBtnWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CreateTourBtn = styled.button`
    border-radius: 6px;
    padding: 9px 18px;
    font-size: 14px;
    cursor: pointer;
    font-family: inherit;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 6px;
    border: 1px solid rgb(53, 86, 250);
    background: rgb(53, 86, 250);
    color: white;
`;

export const UpdateTourBtn = styled.button`
    border-radius: 6px;
    padding: 9px 18px;
    font-size: 14px;
    cursor: pointer;
    font-family: inherit;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 6px;
    border: 1px solid rgb(53, 86, 250);
    background: rgb(53, 86, 250);
    color: white;
`;

export const SaveTourBtn = styled.button`
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    font-family: inherit;
    padding: 7px 14px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 6px;
    border: 1px solid rgb(53, 86, 250);
    background: rgb(53, 86, 250);
    color: white;
`;

export const PublishTourBtn = styled.button`
    border-radius: 6px;
    font-size: 14px;
    border: 1px solid rgb(187, 187, 187);
    background: white;
    cursor: pointer;
    font-family: inherit;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 6px;
    padding: 7px 14px;
`;

export const PreviousTourContainer = styled.div`
    margin-top: 20px;
`;

export const PreviousTourTitle = styled.h4`
    font-family: "Baloo 2";
    font-weight: 600;
    margin: 0px;
    color: rgb(53, 86, 250);
`;

export const PreviousTourList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const PreviousTourItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
`;

export const PreviousTourListItem = styled.li`
    padding: 8px 0;
    /* background-color: #f2f2f2; */
    list-style: none;
`;

export const PreviousTourEditBtn = styled.button`
    border-radius: 6px;
    padding: 9px 18px;
    font-size: 14px;
    cursor: pointer;
    font-family: inherit;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 6px;
    border: 1px solid rgb(53, 86, 250);
    background: rgb(53, 86, 250);
    color: white;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

export const Input = styled.input`
    padding: 8px;
    border-radius: 6px;
    border: 2px solid rgb(204, 204, 204);
    font-size: 16px;
    font-family: inherit;
    display: block;
    margin-top: 10px;
`;

export const StepsWrapper = styled.div`
    margin-top: 10px;
`;
