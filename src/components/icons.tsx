///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import * as H from "./helpers"; // { Grey, Clickable, Icn, ShiftDown, ShiftRight, Right }
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

interface IIconPackProps extends React.Props<any> {
    is_archived: boolean;
    is_starred: boolean;
    deleteMode: boolean;
    helpMode: boolean;
    onTrashClick: () => void;
    onEditClick: () =>  void;
    onHelpClick: ()  =>  void;
    onArchivedClick: () => void;
    onStarredClick: () =>  void;
}

// ----------------------------------------------
// IconPack 
function mapStateToPropsIcons (state: any)
{
    return {
        is_archived: state.article.is_archived,
        is_starred: state.article.is_starred,
        deleteMode: state.deleteMode,
        helpMode: state.helpMode
    };
};

function mapDispatchToPropsIcons (dispatch: any) {
    return {
            onTrashClick: () => { dispatch( Actions.toggleDeleteMode() ); },  // deleteArticle()
            onEditClick: () =>  { dispatch( Actions.toggleEditMode() ); },
            onArchivedClick: () => { dispatch( Actions.toggleArchived() ); },
            onStarredClick: () => { dispatch( Actions.toggleStarred() ); },
            onHelpClick: () =>  { dispatch( Actions.toggleHelpMode() ); }
        };
}

const IconPck = ({
    deleteMode = false, onTrashClick = null,
    onEditClick = null,
    helpMode = false, onHelpClick  = null,
    is_archived = false, onArchivedClick = null,
    is_starred = false, onStarredClick = null
}: IIconPackProps) =>
        <H.Right><H.ShiftDown>
            <EditIcon onClick = { onEditClick }/>
            <ArchiveIcon checked = { is_archived } onClick = { onArchivedClick }/>
            <StarredIcon checked = { is_starred } onClick = { onStarredClick }/>
            <TrashIcon checked={ deleteMode } onClick={ onTrashClick }/>
            <HelpIcon checked={ helpMode } onClick={ onHelpClick }/>
        </H.ShiftDown></H.Right>;

const IconPack =  connect( mapStateToPropsIcons, mapDispatchToPropsIcons)(IconPck);

// ----------------------------------------------
// base Icon
const Icon = ({iconName = "", onClick = null}: IIconProps) =>
    <H.ShiftRight><H.Grey><H.Clickable><H.Icn name={iconName} onClick = { onClick } /></H.Clickable></H.Grey></H.ShiftRight>;

// ----------------------------------------------
// Edit icon 
const EditIcon = ({onClick = null}: ISimpleIconProps) =>
    <Icon iconName="icon-pencil" onClick={ onClick }/>;
// ----------------------------------------------
// Trash icon 
const TrashIcon = ({ checked = false, onClick = null}: IToggleIconProps) =>
    <Icon iconName={ checked ? "icon-bin2" : "icon-bin"} onClick={ onClick }/>;
// ----------------------------------------------
// Archived icon 
const ArchiveIcon = ({checked = false, onClick = null}: IToggleIconProps) =>
    <Icon iconName={ checked ? "icon-checkmark" :"icon-checkmark2" }  onClick ={ onClick }/>;
// ----------------------------------------------
// Starred icon 
const StarredIcon = ({ checked = false, onClick = null}: IToggleIconProps) =>
    <Icon iconName={ checked ? "icon-star2" :"icon-star" }  onClick ={ onClick }/>;
// ----------------------------------------------
// Help icon 
const HelpIcon = ({checked = false, onClick = null}: IToggleIconProps ) =>
            <Icon iconName={ checked ? "icon-help2" : "icon-help" } onClick ={ onClick }/>;
// ----------------------------------------------
const TagsIcon = () => <Icon iconName="icon-tags" />;

export { IconPack, TagsIcon }