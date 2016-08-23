///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import { Grey, Clickable, Icn, ShiftDown, ShiftRight } from "./helpers";

interface IIconProps extends React.Props<any> {
    iconName: string;
    onClick?: () => void;
}

interface ISimpleIconProps extends React.Props<any> {
    onClick?: () => void;
}

interface IToggleIconProps extends React.Props<any> {
    checked: boolean;
    onClick?: () => void;
}


export const Icon = ({iconName = "", onClick = null}: IIconProps) =>
<ShiftRight><Grey><Clickable><Icn name={iconName} onClick = { onClick } /></Clickable></Grey></ShiftRight>;

export const EditIcon = ({onClick = null}: ISimpleIconProps) =>
    <Icon iconName="icon-pencil" onClick={ onClick }/>;

export const TrashIcon = ({onClick = null}: ISimpleIconProps) =>
    <Icon iconName="icon-bin" onClick={ onClick }/>;

export const ArchiveIcon = ({checked = false, onClick = null}: IToggleIconProps) =>
    <Icon iconName={ checked ? "icon-checkmark" :"icon-checkmark2" }  onClick ={ onClick }/>;

export const StarredIcon = ({checked = false, onClick = null}: IToggleIconProps) =>
    <Icon iconName={ checked ? "icon-star2" :"icon-star" }  onClick ={ onClick }/>;

export const HelpIcon = ({checked = false, onClick = null}: IToggleIconProps) =>
            <Icon iconName={ checked ? "icon-help2" : "icon-help" } onClick ={ onClick }/>;

export const TagsIcon = ({onClick = null}: ISimpleIconProps) =>
    <Icon iconName="icon-tags" />;