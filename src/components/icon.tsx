///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import { Grey, Clickable, Icn, ShiftDown, ShiftRight } from "./helpers";

interface IIconProps extends React.Props<any> {
    iconName: string;
    onClick?: () => void;
}

const Icon = ({iconName = "", onClick = null}: IIconProps) =>
<ShiftRight><Grey><Clickable><Icn name={iconName} onClick = { onClick } /></Clickable></Grey></ShiftRight>;

export default Icon;