///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import { connect } from "react-redux";

import { IWallabagArticle, ITag } from "../wallabag-api";
import Picture from "./Picture";
import Title from "./Title";
import { TitleEdit } from "./TitleEdit";
import Domain from "./Domain";
import { IconPack } from "./Icons";
import { Tags } from "./Tags";
import { Card, CardFooter, Right, ShiftDown, Tooltip } from "./helpers";
import { setTitle,
         toggleEditMode,
         toggleHelpMode,
         setTags, deleteTag
          } from "../actions";

interface IArticleProps extends React.Props<any> {
    article: IWallabagArticle;
    allTags: ITag[];
    editMode: boolean;
    helpMode: boolean;
    onCancelClick: () => void;
    onSaveClick: (title: string) => void;
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
    onCancelClick: () => { dispatch(toggleEditMode()); },
    onSaveClick: (title: string) => { dispatch(setTitle(title)); },
    onSaveTags: (tags: string) => {dispatch(setTags(tags)); },
    onDeleteTag: (tagId: number) => {dispatch(deleteTag(tagId)); }
  };
};

const Article = ({  article = null, allTags = [], editMode = false, helpMode = false,
                    onSaveClick  = null, onCancelClick = null,
                    onSaveTags = null, onDeleteTag = null }: IArticleProps) =>
<Card>
    <Picture url={ article.preview_picture } />
    { editMode
        ? <TitleEdit title= { article.title } Save={onSaveClick} Cancel={onCancelClick}  />
        : <Title title= { article.title } helpMode={helpMode}/> }
    <CardFooter>
        <Domain domainName = { article.domain_name } />
        <IconPack />
    </CardFooter>
    <CardFooter>
        <Tags articleTags={ article.tags } allTags={ allTags } onSaveTags = { onSaveTags } onDeleteTag={ onDeleteTag }/>
    </CardFooter>
</Card>;

export default connect(mapStateToProps, mapDispatchToProps)(Article) ;