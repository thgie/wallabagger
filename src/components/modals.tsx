///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import * as H from "./helpers";
import * as Actions from "../actions";
import { connect } from "react-redux";


interface IConfirmProps extends React.Props<any> {
    title: string;
    question: string;
    YesNo: boolean;
    Active: boolean;
    onYesClick: () => void;
    onNoClick: () => void;
}

interface IConfirmDeleteProps extends React.Props<any> {
    Active: boolean;
    onYesClick: () => void;
    onNoClick: () => void;
}

const mapStateToProps = (state: any) => ({ Active: state.deleteMode });
const mapDispatchToProps = (dispatch: any) => ({
     onYesClick: () => {dispatch(Actions.deleteArticle()); },
     onNoClick: () => {dispatch(Actions.toggleDeleteMode()); }
});

const ConfirmDelete_ = ({Active = false, onYesClick= null, onNoClick= null}: IConfirmDeleteProps) =>
    <Confirm title="Please confirm delete"
             question="Are you sure?"
             YesNo={false}
             Active = {Active}
             onYesClick = { onYesClick }
             onNoClick = { onNoClick }  />;

const ConfirmDelete = connect(mapStateToProps,mapDispatchToProps)(ConfirmDelete_);

const Confirm = ({
    title = "",
    question = "",
    YesNo = false,
    Active = false,
    onYesClick = null,
    onNoClick = null
}: IConfirmProps) =>
    <H.ModalCard active={Active}>
        <H.ModalHeader>
                <H.Right><H.ButtonClear onClick={onNoClick}></H.ButtonClear></H.Right>
                <H.ModalTitle>{title}</H.ModalTitle>
        </H.ModalHeader>
        <H.ModalBody>
            <H.ShiftDown10>
                <H.Centered>
                    <h4>{question}</h4>
                </H.Centered>
            </H.ShiftDown10>
        </H.ModalBody>
        { YesNo
            ? <H.ModalFooter>
                    <H.ButtonPrimary onClick={onYesClick}>Yes</H.ButtonPrimary>
                    <H.ButtonLink onClick={onNoClick}>No</H.ButtonLink>
              </H.ModalFooter>
            : <H.ModalFooter>
                    <H.ButtonLink onClick={onYesClick}>Yes</H.ButtonLink>
                    <H.ButtonPrimary onClick={onNoClick}>No</H.ButtonPrimary>
               </H.ModalFooter>
            }
    </H.ModalCard>;

export { Confirm, ConfirmDelete };


