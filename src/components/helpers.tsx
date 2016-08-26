///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import * as classnames from "classnames";

export const Card = ({ children = null }) => <div className="card">{ children }</div>;
export const CardHeader = ({ children = null }) => <div className="card-header">{ children }</div>;
export const CardFooter = ({ children = null }) => <div className="card-footer">{ children }</div>;
export const CardBody = ({ children = null }) => <div className="card-body">{ children }</div>;
export const CardImage = ({ children = null }) => <div className="card-image">{ children }</div>;

export const ImgResponsive = ({src = ""}) => <img src={ src } className="img-responsive" />;

export const BigBlue = ({ children = null }) => <span style={{
                color: "#039be5",
                fontFamily: "Roboto, sans-serif",
                fontSize: "24px",
                fontWeight: "300"}}
                >{ children }</span>;

export const Centered = ({ children = null }) => <span className="centered">{ children }</span>;


export const Grey = ({ children = null }) => <span className="card-meta">{ children }</span>;
export const Clickable = ({ children = null, onClick = null }) => <span style={{cursor: "pointer"}} onClick={ onClick }>{ children }</span>;

export const Left  = ({ children = null }) => <span className="float-left">{ children }</span>;
export const Right = ({ children = null }) => <span className="float-right">{ children }</span>;

export const ShiftDown10 = ({ children = null }) => <span className="mt-10" style={{display: "inline-block"}} > { children }</span>;

export const ShiftDown = ({ children = null }) => <span style={{display: "inline-block", marginTop: "5px"}}>{ children }</span>;
export const ShiftRight = ({ children = null }) => <span style={{marginLeft: "5px"}}>{ children }</span>;

export const Icn = ({name = "", onClick = null}) => <span className ={ classnames("icon", name) } onClick = { onClick }></span >;

export const FormAutocomplete = ({ children = null }) => <div className="form-autocomplete">{ children }</div>;
export const FAInput = ({ children = null }) => <div className="form-autocomplete-input">{ children }</div>;
export const FAList = ({ children = null }) => <ul className="form-autocomplete-list">{ children }</ul>;
export const Input = ({ placeholder = "", onChange = null, onKeyDown = null}) => <input className="form-input" type="text" placeholder={ placeholder } onChange = { onChange } onKeyDown={ onKeyDown }/>;
export const Text = ({ value = "", onChange = null } ) => <textarea className="form-input" rows="3" value={value} onChange={ onChange }></textarea>;

export const ButtonClear = ({ children = null, onClick = null }) => <button className="btn btn-clear"  onClick = { onClick }>{ children }</button>;
export const ButtonLink = ({ children = null, onClick = null }) => <button className="btn btn-link"  onClick = { onClick }>{ children }</button>;
export const ButtonPrimary = ({ children = null, onClick = null }) => <button className="btn btn-primary"  onClick = { onClick }>{ children }</button>;
export const Chip = ({ children = null }) => <span className="chip-sm"><span className="chip-name">{children}</span></span>;
export const Cross = ({ onClick = null }) => <button className="btn btn-clear" onClick={onClick}></button>;

export const Tooltip =  ({ children = null, tooltip = "", enabled = false }) =>
   enabled
   ? <span className="tooltip" data-tooltip={tooltip} >{ children }</span>
   : <span>{ children }</span>;


export const ModalTitle = ({children = null}) =>
                <div className="modal-title">{children}</div>;

export const ModalCard = ({children = null, active = false}) =>
     <div className={active ? "modal modal-sm active" : "modal modal-sm" }>
        <div className="modal-overlay"></div>
        <div className="modal-container">
            { children }
        </div>
    </div>;

export const ModalHeader = ({children = null}) =>
            <div className="modal-header">
                {children}
            </div>;

export const ModalBody = ({children = null}) =>
            <div className="modal-body">
                <div className="content">
                    {children}
                </div>
            </div>;

export const ModalFooter = ({children = null}) =>
            <div className="modal-footer">
                {children}
            </div>;