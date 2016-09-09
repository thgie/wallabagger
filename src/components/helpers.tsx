///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import * as classnames from "classnames";
// import { Tooltip, OverlayTrigger } from "react-bootstrap";

interface ITooltip extends React.Props<any> {
    tooltip: string;
}

export const ToastInfo = ({ text = "" }) => <div className="toast">{text}</div>;
export const ToastError = ({ text = ""}) => <div className="toast toast-danger">{text}</div>;

// export const tooltip = (text: string) => (WrapedComponent: any) => <WrapedComponent {...this.props} data-tooltip={text}/>;

export const Tooltip = ( {tooltip = "",  children = null } ) => <span className="tooltip" data-tooltip={tooltip }>{children}</span>;

export const Card = (props: any) => <div className="card" {...props} />;

export const CardHeader = (props: any) => <div className="card-header" {...props}/>;
export const CardFooter = (props: any) => <div className="card-footer" {...props }/>;
export const CardBody = (props: any) => <div className="card-body" {...props}/>;
export const CardImage = (props: any) => <div className="card-image" {...props}/>;

export const ImgResponsive = ({src = ""}) => <img src={ src } className="img-responsive" />;

export const BigBlue = ({ children = null }) => <span style={{
                color: "#039be5",
                fontFamily: "Roboto, sans-serif",
                fontSize: "24px",
                fontWeight: "300"}}
                >{ children }</span>;

export const Centered = ({ children = null }) => <span className="centered">{ children }</span>;


export const Grey = ({ children = null }) => <span className="card-meta" >{ children }</span>;
export const Clickable = ({ children = null, onClick = null }) => <span style={{cursor: "pointer"}} onClick={ onClick }>{ children }</span>;

export const Left  = ({ children = null }) => <span className="float-left">{ children }</span>;
export const Right = ({ children = null }) => <span className="float-right">{ children }</span>;

export const ShiftDown10 = ({ children = null }) => <span className="mt-10" style={{display: "inline-block"}} >{ children }</span>;

export const ShiftDown = ({ children = null }) => <span style={{display: "inline-block", marginTop: "5px"}}>{ children }</span>;
export const ShiftRight = ({ children = null }) => <span style={{marginLeft: "5px"}}>{ children }</span>;

export const Icn = ({name = "", onClick = null, tooltip = ""}) => <span className ={ classnames("icon", name, tooltip === "" ? "" :"tooltip") } onClick = { onClick }  data-tooltip={ tooltip }></span >;

export const FormAutocomplete = ({ children = null, tooltip= "" }) => <div className={classnames("form-autocomplete", "md-10", tooltip === "" ? "" :"tooltip") } data-tooltip={ tooltip }>{ children }</div>;
export const FAInput = ({ children = null }) => <div className="form-autocomplete-input">{ children }</div>;
export const FAList = ({ children = null }) => <ul className="form-autocomplete-list">{ children }</ul>;
export const Input = ({ placeholder = "", onChange = null, onKeyDown = null}) => <input className="form-input" type="text" placeholder={ placeholder } onChange = { onChange } onKeyDown={ onKeyDown }/>;
export const Text = ({ value = "", onChange = null } ) => <textarea className="form-input" rows="3" value={value} onChange={ onChange }></textarea>;

export const ButtonClear = ({ children = null, onClick = null }) => <button className="btn btn-clear"  onClick = { onClick }>{ children }</button>;
export const ButtonLink = ({ children = null, onClick = null }) => <button className="btn btn-link"  onClick = { onClick }>{ children }</button>;
export const ButtonPrimary = ({ children = null, onClick = null }) => <button className="btn btn-primary"  onClick = { onClick }>{ children }</button>;
export const Chip = ({ children = null }) => <span className="chip-sm chip-name">{children}</span>;
export const Cross = ({ onClick = null }) => <button className="btn btn-clear" onClick={onClick}></button>;


 export const FormAutocompleteTags = ({ icon = null, tags = null, foundTags = null,
     placeholder = "", onChange = null, onKeyDown = null, tooltip= ""
     }) =>
         <div className={classnames("form-autocomplete", "md-10", tooltip === "" ? "" :"tooltip")}  data-tooltip={ tooltip }>
            <div className="form-autocomplete-input">
            <span className="mt-5" style={{display: "inline-block"}} >{ icon }</span>
            { tags }
            <input className="form-input"
                   type="text"
                   placeholder={ placeholder }
                   onChange = { onChange }
                   onKeyDown={ onKeyDown }/>
            {
             (foundTags === null) || ( foundTags.length === 0) ? null :
             <ul className="form-autocomplete-list">
                <span className="mt-5" style={{display: "inline-block"}} >
                    <span className="float-left card-meta">Tags found:</span>
                </span>
                {foundTags}
             </ul>
            }
            </div>
         </div>;

export const ModalTitle = ({children = null}) =>
                <div className="modal-title">{children}</div>;

export const ModalCard = ({children = null, active = false}) =>
     <div className={active ? "modal modal-sm active" : "modal modal-sm" }>
        <div className="modal-overlay"></div>
        <div className="modal-container">{ children }</div>
    </div>;

export const ModalHeader = ({children = null}) =>
            <div className="modal-header">{children}</div>;

export const ModalBody = ({children = null}) =>
            <div className="modal-body">
                <div className="content">{children}</div>
            </div>;

export const ModalFooter = ({children = null}) =>
            <div className="modal-footer">{children}</div>; ;