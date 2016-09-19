///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import { Confirm } from "./helpers";
import * as Actions from "actions";
import { connect } from "react-redux";


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


export { ConfirmDelete };


