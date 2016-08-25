///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import { Grey, Clickable, Icn, ShiftDown, ShiftRight, Right } from "./helpers";
import * as Actions  from "../actions"; // { toggleHelpMode, toggleStarred, toggleArchived, deleteArticle, toggleEditMode }
import { connect } from "react-redux";

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

const IconPack = () =>
        <Right><ShiftDown>
            <EditIcon />
            <ArchiveIcon/>
            <StarredIcon />
            <TrashIcon />
            <HelpIcon/>
        </ShiftDown></Right>;

const Icon = ({iconName = "", onClick = null}: IIconProps) =>
<ShiftRight><Grey><Clickable><Icn name={iconName} onClick = { onClick } /></Clickable></Grey></ShiftRight>;

// ----------------------------------------------
// Edit icon 
const mapDispatchToPropsEdit = (dispatch: any) => ( { onClick: () => {dispatch(Actions.toggleEditMode()); } });

const EditIcn = ({onClick = null}: ISimpleIconProps) =>
    <Icon iconName="icon-pencil" onClick={ onClick }/>;

const EditIcon = connect(null, mapDispatchToPropsEdit)(EditIcn);
// ----------------------------------------------
// Trash icon 
const mapDispatchToPropsTrash = (dispatch: any) => ( { onClick: () => {dispatch(Actions.deleteArticle()); } });

const TrashIcn = ({onClick = null}: ISimpleIconProps) =>
    <Icon iconName="icon-bin" onClick={ onClick }/>;

const TrashIcon =  connect( null, mapDispatchToPropsTrash)(TrashIcn);
// ----------------------------------------------
// Archived icon 
const mapStateToPropsArch = (state: any) => ( { checked: state.article.is_archived } );

const mapDispatchToPropsArch = (dispatch: any) => ( { onClick: () => {dispatch(Actions.toggleArchived()); } } );

const ArchiveIcn = ({checked = false, onClick = null}: IToggleIconProps) =>
    <Icon iconName={ checked ? "icon-checkmark" :"icon-checkmark2" }  onClick ={ onClick }/>;

const ArchiveIcon = connect(mapStateToPropsArch, mapDispatchToPropsArch)(ArchiveIcn);
// ----------------------------------------------
// Starred icon 
const mapStateToPropsStar = (state: any) => ( { checked: state.article.is_starred } );

const mapDispatchToPropsStar = (dispatch: any) => ( { onClick: () => {dispatch(Actions.toggleStarred()); } } );

const StarredIcn = ({ checked = false, onClick = null}: IToggleIconProps) =>
    <Icon iconName={ checked ? "icon-star2" :"icon-star" }  onClick ={ onClick }/>;

const StarredIcon = connect(mapStateToPropsStar, mapDispatchToPropsStar)(StarredIcn);
// ----------------------------------------------
// Help icon 
const mapStateToPropsHelp = (state: any) => ( {  checked: state.helpMode } );

const mapDispatchToPropsHelp = (dispatch: any) => ( { onClick: () => {dispatch(Actions.toggleHelpMode()); } });

const HelpIcn = ({checked = false, onClick = null}: IToggleIconProps ) =>
            <Icon iconName={ checked ? "icon-help2" : "icon-help" } onClick ={ onClick }/>;

const HelpIcon = connect(mapStateToPropsHelp, mapDispatchToPropsHelp)(HelpIcn) ;
// ----------------------------------------------
const TagsIcon = () => <Icon iconName="icon-tags" />;

export { IconPack, TagsIcon }