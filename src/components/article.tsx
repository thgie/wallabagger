///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import { connect } from "react-redux";

import { IWallabagArticle } from "../wallabag-api";
import Picture from "./Picture";
import Title from "./Title";
import { TitleEdit } from "./TitleEdit";
import Domain from "./Domain";
import { Icon, EditIcon, ArchiveIcon, StarredIcon, TrashIcon, HelpIcon } from "./Icons";
import Tags from "./Tags";
import { Card, CardFooter, Right, ShiftDown, Tooltip } from "./helpers";
import { toggleEditMode,
         setTitle,
         toggleStarred,
         toggleArchived,
         toggleHelpMode,
         deleteArticle
          } from "../actions";

const mapStateToProps = (state: any) => {
  return {
    article: state.article,
    editMode: state.editMode,
    helpMode: state.helpMode
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onEditClick: () => { dispatch(toggleEditMode()); },
    onCancelClick: () => { dispatch(toggleEditMode()); },
    onSaveClick: (title: string) => { dispatch(setTitle(title)); },
    onStarredClick: () => {dispatch(toggleStarred()); },
    onArchivedClick: () => {dispatch(toggleArchived()); },
    onDeleteClick: () => {dispatch(deleteArticle()); },
    onHelpClick: () => {dispatch(toggleHelpMode()); }
  };
};

const Article = ({
                   article = null,
                   editMode = false,
                   helpMode = false,
                   onEditClick = null,
                   onCancelClick = null,
                   onSaveClick = null,
                   onStarredClick = null,
                   onArchivedClick = null,
                   onDeleteClick = null,
                   onHelpClick = null
                }) =>
<Card>
    <Picture url={ article.preview_picture } />
    { editMode
        ? <TitleEdit title= { article.title } Save={onSaveClick} Cancel={onCancelClick}  />
        : <Title title= { article.title } helpMode={helpMode}/> }
    <CardFooter>
        <Domain domainName = { article.domain_name } />
        <Right><ShiftDown>
            <EditIcon onClick={ onEditClick }/>
            <ArchiveIcon checked={ article.is_archived === 1 }  onClick ={ onArchivedClick }/>
            <StarredIcon checked={ article.is_starred === 1 } onClick ={ onStarredClick }/>
            <TrashIcon onClick={ onDeleteClick }/>
            <HelpIcon checked={ helpMode } onClick ={ onHelpClick }/>
        </ShiftDown></Right>
    </CardFooter>
    <CardFooter>
        <Tags articleTags={ article.tags } foundTags = { [] } />
    </CardFooter>
</Card>;

export default connect(mapStateToProps, mapDispatchToProps)(Article) ;