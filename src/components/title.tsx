///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import { CardHeader, BigBlue, Clickable, Tooltip } from "./helpers";

interface ITitleProps extends React.Props<any> {
    title: string;
    helpMode: boolean;
}

const Title = ({title = "test title", helpMode = false}: ITitleProps) =>
         helpMode
           ? <CardHeader><Clickable><BigBlue><Tooltip tooltip="Click to open saved article">{title}</Tooltip></BigBlue></Clickable></CardHeader>
           : <CardHeader><Clickable><BigBlue>{title}</BigBlue></Clickable></CardHeader>;
export default Title;        