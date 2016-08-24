///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import { connect } from "react-redux";

import { IWallabagArticle, ITag } from "../wallabag-api";
import Picture from "./Picture";
import Title from "./Title";
import { TitleEdit } from "./TitleEdit";
import Domain from "./Domain";
import { Icon, EditIcon, ArchiveIcon, StarredIcon, TrashIcon, HelpIcon } from "./Icons";
import { Tags } from "./Tags";
import { Card, CardFooter, Right, ShiftDown, Tooltip } from "./helpers";
import { toggleEditMode,
         setTitle,
         toggleStarred,
         toggleArchived,
         toggleHelpMode,
         deleteArticle,
         setTags, deleteTag
          } from "../actions";

interface IArticleProps extends React.Props<any> {
    article: IWallabagArticle;
    editMode: boolean;
    helpMode: boolean;
    onEditClick: () => void;
    onCancelClick: () => void;
    onSaveClick: (title: string) => void;
    onStarredClick: () => void;
    onArchivedClick: () => void;
    onDeleteClick: () => void;
    onHelpClick: () => void;
    allTags: ITag[];
    onSaveTags: (tags: string) => void;
    onDeleteTag: (tagId: number) => void;
}

const mapStateToProps = (state: any) => {
  return {
    article: state.article,
    editMode: state.editMode,
    helpMode: state.helpMode,
    tags: state.allTags
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
    onHelpClick: () => {dispatch(toggleHelpMode()); },
    onSaveTags: (tags: string) => {dispatch(setTags(tags)); },
    onDeleteTag: (tagId: number) => {dispatch(deleteTag(tagId)); }
  };
};

class Article extends React.Component< IArticleProps, {}>  {
    render() {
        const { article, allTags, editMode, helpMode, onSaveClick, onDeleteClick, onCancelClick, onArchivedClick, onStarredClick, onEditClick, onHelpClick, onSaveTags, onDeleteTag } = this.props;
        return <Card>
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
                        <Tags articleTags={ article.tags } allTags={ allTags } onSaveTags = { onSaveTags } onDeleteTag={ onDeleteTag }/>
                    </CardFooter>
                </Card>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article) ;