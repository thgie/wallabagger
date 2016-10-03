import * as React from "react";

const ToastInfo = ({ text = "" }) => <div className="toast">{text}</div>;
const ToastError = ({ text = ""}) => <div className="toast toast-danger">{text}</div>;

export { ToastInfo, ToastError };
