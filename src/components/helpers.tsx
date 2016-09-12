///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import * as classnames from "classnames";
// import { Tooltip, OverlayTrigger } from "react-bootstrap";


export const ToastInfo = ({ text = "" }) => <div className="toast">{text}</div>;
export const ToastError = ({ text = ""}) => <div className="toast toast-danger">{text}</div>;

// export const tooltip = (text: string) => (WrapedComponent: any) => <WrapedComponent {...this.props} data-tooltip={text}/>;
interface ITooltip extends React.Props<any> {
    tooltip: string;
}
export const Tooltip = ( {tooltip= "", children = null }: ITooltip ) => <span className="tooltip" data-tooltip={tooltip }>{children}</span>;

export const Card = (props: any) => <div className="card" {...props} />;

export const CardHeader = (props: any) => <div className="card-header" {...props}/>;
export const CardFooter = (props: any) => <div className="card-footer" {...props }/>;
export const CardBody = (props: any) => <div className="card-body" {...props}/>;
export const CardImage = (props: any) => <div className="card-image" {...props}/>;

export const ImgResponsive = ({src = ""}) => <img src={ src } className="img-responsive" />;

export const BigBlue = (props: any) => <span style={{
                color: "#039be5",
                fontFamily: "Roboto, sans-serif",
                fontSize: "24px",
                fontWeight: "bolder"}}
                { ...props } />;

export const Centered = (props: any) => <span className="centered"  {...props}/>;


export const Grey = (props: any) => <span className="card-meta" {...props}/>;
export const Clickable = (props: any, onClick?: any) => <span style={{cursor: "pointer"}} onClick={ onClick } {...props}/>;

export const Left  = (props: any) => <span className="float-left" {...props}/>;
export const Right = (props: any) => <span className="float-right" {...props}/>;

export const ShiftDown10 = (props: any) => <span className="mt-10" style={{display: "inline-block"}}  {...props}/>;

export const ShiftDown = (props: any) => <span style={{display: "inline-block", marginTop: "5px"}} {...props}/>;
export const ShiftRight = (props: any) => <span style={{marginLeft: "5px"}}  {...props}/>;

interface IIcnProps extends React.Props<any> {
    name: string;
    tooltip?: string;
    onClick?: any;
}

export const Icn = ({ name= "", tooltip= "", onClick= null}: IIcnProps) => <span className ={ classnames("icon", name, tooltip === "" ? "" :"tooltip") } onClick = { onClick }  data-tooltip={ tooltip }></span >;

export const FormAutocomplete = ( tooltip: string, children?: any) => <div className={classnames("form-autocomplete", "md-10", tooltip === "" ? "" :"tooltip") } data-tooltip={ tooltip }>{ children }</div>;
export const FAInput = (props: any) => <div className="form-autocomplete-input" {...props} />;
export const FAList = (props: any) => <ul className="form-autocomplete-list" {...props} />;
export const Input = ( placeholder: string, onChange?: any, onKeyDown?: any) => <input className="form-input" type="text" placeholder={ placeholder } onChange = { onChange } onKeyDown={ onKeyDown }/>;

interface ITextProps extends React.Props<any> {
    value: string;
    onChange?: any;
}
export const Text = ({ value= "", onChange = null}: ITextProps) => <textarea className="form-input" value={value} onChange={ onChange }></textarea>;

export const ButtonClear = (onClick?: any, props?: any) => <button className="btn btn-clear"  onClick = { onClick } {...props} />;
export const ButtonLink = (onClick?: any, props?: any) => <button className="btn btn-link"  onClick = { onClick } {...props} />;
export const ButtonPrimary = (onClick?: any, props?: any) => <button className="btn btn-primary"  onClick = { onClick } {...props} />;

export const Chip = (props: any) => <span className="chip-sm chip-name" {...props} />;
export const Cross = ( onClick: any) => <button className="btn btn-clear" onClick={onClick}></button>;


 export const FormAutocompleteTags = (icon: any, tags: any, foundTags: any,
     placeholder: string, onChange: any, onKeyDown: any, tooltip: string ) =>
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
                    <Right><ButtonClear onClick={onNoClick}></ButtonClear></Right>
                    <div className="modal-title">{title}</div>;
            </div>

            <div className="modal-body">
                <div className="content">
                    <ShiftDown10>
                        <Centered>
                            <h4>{question}</h4>
                        </Centered>
                    </ShiftDown10>
                </div>
            </div>

            { YesNo
                ? <div className="modal-footer">
                        <ButtonPrimary onClick={onYesClick}>Yes</ButtonPrimary>
                        <ButtonLink onClick={onNoClick}>No</ButtonLink>
                </div>
                : <div className="modal-footer">
                        <ButtonLink onClick={onYesClick}>Yes</ButtonLink>
                        <ButtonPrimary onClick={onNoClick}>No</ButtonPrimary>
                </div>
                }

        </div>
     </div>;