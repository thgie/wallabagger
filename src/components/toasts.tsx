///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import { EAppStatus } from "../consts";

interface IToastProps  extends React.Props<any> {
    appStatus: EAppStatus;
    message: string;
}

const Toast = ( { appStatus = EAppStatus.unknown, message = "" }: IToastProps ) =>
    <div className={`toast ${ appStatus === EAppStatus.error ? "toast-danger" :""}`} >{message}</div>;
;

export default Toast;