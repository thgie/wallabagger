import * as React from "react";
import * as Actions from "actions";
import { connect } from "react-redux";


interface IConfirmDeleteProps extends React.Props<any> {
    Active: boolean;
    onYesClick: () => void;
    onNoClick: () => void;
}

const ConfirmDelete = ({Active = false, onYesClick= null, onNoClick= null}: IConfirmDeleteProps) =>
    <Confirm title="Please confirm delete"
             question="Are you sure?"
             YesNo={false}
             Active = {Active}
             onYesClick = { onYesClick }
             onNoClick = { onNoClick }  />;

interface IConfirmProps extends React.Props<any> {
    title: string;
    question: string;
    YesNo: boolean;
    Active: boolean;
    onYesClick: () => void;
    onNoClick: () => void;
}

export const Confirm = ({
    title = "",
    question = "",
    YesNo = false,
    Active = false,
    onYesClick = null,
    onNoClick = null
}: IConfirmProps) =>

     <div className={ Active ? "modal modal-sm active" : "modal modal-sm" }>
        <div className="modal-overlay"></div>
        <div className="modal-container">


            <div className="modal-header">;
                    <button className="btn btn-clear float-right" onClick={onNoClick}></button>
                    <div className="modal-title">{title}</div>;
            </div>

            <div className="modal-body">
                <div className="content">
                     <h4 className="centered mt-10">{question}</h4>
                </div>
            </div>

            { YesNo
                ? <div className="modal-footer">
                        <button className="btn btn-primary" onClick={onYesClick}>Yes</button>
                        <button  className="btn btn-link" onClick={onNoClick}>No</button>
                </div>
                : <div className="modal-footer">
                        <button  className="btn btn-link" onClick={onYesClick}>Yes</button>
                        <button  className="btn btn-primary"onClick={onNoClick}>No</button>
                </div>
                }

        </div>
     </div>;


export { ConfirmDelete };


