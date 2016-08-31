///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import * as H from "./helpers"; // { Grey, Clickable, Icn, ShiftDown, ShiftRight, Right }
import * as Actions  from "../actions"; // { toggleHelpMode, toggleStarred, toggleArchived, deleteArticle, toggleEditMode }
import { connect } from "react-redux";
import * as Tooltips from "../constants/tooltips";

interface ISimpleIconProps extends React.Props<any> {
    tooltip?: string;
    onClick?: () => void;
}

interface IIconProps extends ISimpleIconProps {
    iconName: string;
}

interface IToggleIconProps extends ISimpleIconProps {
    checked: boolean;
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
function mapStateToPropsIcons (state: any) {
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
            <EditIcon onClick = { onEditClick }
                      tooltip={ helpMode ? Tooltips.ARCHIVE_TOOLTIP : "" }/>
            <ArchiveIcon checked = { is_archived } onClick = { onArchivedClick }
                tooltip={ helpMode ? Tooltips.ARCHIVE_TOOLTIP : "" }/>
            <StarredIcon checked = { is_starred } onClick = { onStarredClick }
                         tooltip={ helpMode ? Tooltips.FAVORITE_TOOLTIP : "" } />
            <TrashIcon checked={ deleteMode } onClick={ onTrashClick }
                        tooltip={ helpMode ? Tooltips.DELETE_TOOLTIP : "" } />
            <HelpIcon checked={ helpMode } onClick={ onHelpClick }
                      tooltip={ helpMode ? Tooltips.HELP_TOOLTIP : "" }/>
        </H.ShiftDown></H.Right>;

const IconPack =  connect( mapStateToPropsIcons, mapDispatchToPropsIcons)(IconPck);

// ----------------------------------------------
// base Icon
const Icon = ({iconName = "", onClick = null, tooltip = ""}: IIconProps) =>
    <H.ShiftRight><H.Grey><H.Clickable><H.Icn name={iconName}
                                              onClick = { onClick }
                                               tooltip = { tooltip }/></H.Clickable></H.Grey></H.ShiftRight>;

// ----------------------------------------------
// Edit icon 
const EditIcon = ({onClick = null, tooltip= ""}: ISimpleIconProps) =>
    <Icon iconName="icon-pencil" onClick={ onClick } tooltip = { tooltip }/>;
// ----------------------------------------------
// Trash icon 
const TrashIcon = ({ checked = false, onClick = null, tooltip= ""}: IToggleIconProps) =>
    <Icon iconName={ checked ? "icon-bin2" : "icon-bin"} onClick={ onClick } tooltip = { tooltip }/>;
// ----------------------------------------------
// Archived icon 
const ArchiveIcon = ({checked = false, onClick = null, tooltip= ""}: IToggleIconProps) =>
    <Icon iconName={ checked ? "icon-checkmark" :"icon-checkmark2" }  onClick ={ onClick } tooltip = { tooltip }/>;
// ----------------------------------------------
// Starred icon 
const StarredIcon = ({ checked = false, onClick = null, tooltip= ""}: IToggleIconProps) =>
    <Icon iconName={ checked ? "icon-star2" :"icon-star" }  onClick ={ onClick } tooltip = { tooltip }/>;
// ----------------------------------------------
// Help icon 
const HelpIcon = ({checked = false, onClick = null, tooltip= ""}: IToggleIconProps ) =>
            <Icon iconName={ checked ? "icon-help2" : "icon-help" }
                  tooltip = { tooltip }
                  onClick ={ onClick }/>;
// ----------------------------------------------
const TagsIcon = ({tooltip= ""}) => <Icon iconName="icon-tags" tooltip = { tooltip }/>;

export { IconPack, TagsIcon }