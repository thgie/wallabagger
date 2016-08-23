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

export const Grey = ({ children = null }) => <span className="card-meta">{ children }</span>;
export const Clickable = ({ children = null }) => <span style={{cursor: "pointer"}}>{ children }</span>;

export const Left  = ({ children = null }) => <span className="float-left">{ children }</span>;
export const Right = ({ children = null }) => <span className="float-right">{ children }</span>;

export const ShiftDown = ({ children = null }) => <span style={{display: "inline-block", marginTop: "5px"}}>{ children }</span>;
export const ShiftRight = ({ children = null }) => <span style={{marginLeft: "5px"}}>{ children }</span>;

export const Icn = ({name = "", onClick = null}) => <span className ={ classnames("icon", name) } onClick = { onClick }></span >;

export const FormAutocomplete = ({ children = null }) => <div className="form-autocomplete">{ children }</div>;
export const FAInput = ({ children = null }) => <div className="form-autocomplete-input">{ children }</div>;
export const FAList = ({ children = null }) => <ul className="form-autocomplete-list">{ children }</ul>;
export const Input = ({ placeholder = "" }) => <input className="form-input" type="text" placeholder={ placeholder }/>;
export const Text = ({ value = "", onChange = null } ) => <textarea className="form-input" rows="3" value={value} onChange={ onChange }></textarea>;

export const ButtonLink = ({ children = null, onClick = null }) => <button className="btn btn-link"  onClick = { onClick }>{ children }</button>;
export const Chip = ({ children = null }) => <span className="chip-sm"><span className="chip-name">{children}</span></span>;
export const Cross = () => <button className="btn btn-clear"></button>;

export const Tooltip =  ({ children = null, tooltip = "" }) => <span className="tooltip"data-tooltip={tooltip} >{ children }</span>;