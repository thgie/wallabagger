///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import * as classnames from "classnames";
// import { Tooltip, OverlayTrigger } from "react-bootstrap";

interface IClassable {
    classes?: string;
}

interface IClickable {
    onClick: () => void;
}

const AddClass = (classN: string) => (ComposedComponent: any) => class extends React.Component<any, any> {
  static displayName = `className:${classN}`;
  render() {
    return <ComposedComponent {...this.props} classes={[this.props.classes, classN].join(" ")}/>;
  }
 };

const Grey = AddClass("card-meta");
const Clickable = AddClass("clickable");
const ImgResponsive = AddClass("img-responsive");
const CardImage =  AddClass("card-image");
const BigBlue = AddClass("bigBlue");

export const ToastInfo = ({ text = "" }) => <div className="toast">{text}</div>;
export const ToastError = ({ text = ""}) => <div className="toast toast-danger">{text}</div>;

const Tooltip = (tooltip: string) => (WrapedComponent: any) => class extends React.Component<any, any> {
    static displayName = "tooltip";
    render() {
        return (
            <span className={ this.props.helpMode && "tooltip" } data-tooltip={tooltip}>
               <WrapedComponent {...this.props}/>
            </span>
        );
    }
};

interface ITooltip extends React.Props<any> {
    tooltip: string;
}
export const Tooltip_ = ( {tooltip= "", children = null }: ITooltip ) => <span className={ tooltip === "" ? "" : "tooltip" } data-tooltip={tooltip }>{children}</span>;

export const Card = (props: any) => <div className="card" {...props} />;

export const CardHeader = (props: any) => <div className="card-header" {...props}/>;
export const CardFooter = (props: any) => <div className="card-footer" {...props }/>;
export const CardBody = (props: any) => <div className="card-body" {...props}/>;



export const BigBlue_ = (props: any) => <span style={{
                color: "#039be5",
                fontFamily: "Roboto, sans-serif",
                fontSize: "24px",
                fontWeight: "bolder"}}
                { ...props } />;

export const Centered = (props: any) => <span className="centered"  {...props}/>;


export const Grey_ = (props: any) => <span className="card-meta" {...props}/>;

interface IClickableProps extends React.Props<any> {
    onClick(event: React.MouseEvent ): void;
}
export const Clickable_ = ({ onClick = null, children= null }: IClickableProps ) => <span style={{cursor: "pointer"}} onClick={ onClick }>{ children }</span>;

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

export const Icn = ({ name= "", tooltip= "", onClick= null}: IIcnProps) => <span className ={ ["icon", name, tooltip === "" ? "" :"tooltip"  ].join(" ") } onClick = { onClick }  data-tooltip={ tooltip }></span >;

export const FormAutocomplete = ( tooltip: string, children?: any) => <div className={classnames("form-autocomplete", "md-10", tooltip === "" ? "" :"tooltip") } data-tooltip={ tooltip }>{ children }</div>;
export const FAInput = (props: any) => <div className="form-autocomplete-input" {...props} />;
export const FAList = (props: any) => <ul className="form-autocomplete-list" {...props} />;
export const Input = ( placeholder: string, onChange?: any, onKeyDown?: any) => <input className="form-input" type="text" placeholder={ placeholder } onChange = { onChange } onKeyDown={ onKeyDown }/>;

interface ITextProps extends React.Props<any> {
    value: string;
    onChange?: any;
}
export const Text = ({ value= "", onChange = null}: ITextProps) => <textarea className="form-input" value={value} onChange={ onChange }></textarea>;

interface IButton extends React.Props<any>, IClickable {
    clear?: boolean;
    primary?: boolean;
    link?: boolean;
}

export const Button = ({ onClick = null, children = null, clear= false, primary= false, link= false}: IButton) =>
   <button className={["btn", clear && "btn-clear", link && "btn-link", primary && "btn-primary"].join(" ")}  onClick = { onClick }>{children}</button>;

export const Chip = (props: any) => <span className="chip-sm chip-name" {...props} />;
export const Cross = ( onClick: any) => <button className="btn btn-clear" onClick={onClick}></button>;

interface IFATagsProps extends React.Props<any> {
  icon: any;
  tags: any;
  foundTags: any;
  placeholder: string;
  onChange: any;
  onKeyDown: any;
  tooltip: string;
}
 export const FormAutocompleteTags = ( { icon = null, tags = null, foundTags = null,  placeholder = "",
                                         onChange = null, onKeyDown = null, tooltip = "" }: IFATagsProps  ) =>
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
                    <Right><Button clear onClick={onNoClick}></Button></Right>
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
                        <Button primary onClick={onYesClick}>Yes</Button>
                        <Button link onClick={onNoClick}>No</Button>
                </div>
                : <div className="modal-footer">
                        <Button link onClick={onYesClick}>Yes</Button>
                        <Button primary onClick={onNoClick}>No</Button>
                </div>
                }

        </div>
     </div>;

export {
    IClassable, IClickable,
    Grey, Clickable, ImgResponsive, CardImage,
    Tooltip, BigBlue
}