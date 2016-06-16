import * as React from "react";

export enum ToastType { info, error }
export interface ToastProps { toastText: string; toastType: ToastType; }

export class Toast extends React.Component<ToastProps, {}> {
    render() {
        let toastClassName = `toast ${this.props.toastType === ToastType.error ? "toast-danger" :""}`;
        return <div className={toastClassName} id="info-toast">{this.props.toastText}</div>;
    }
}