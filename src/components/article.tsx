///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import { connect } from "react-redux";

import { IWallabagArticle, ITag } from "../wallabag-api";
import Picture from "./Picture";
import Title from "./Title";
import { TitleEdit } from "./TitleEdit";
import Domain from "./Domain";
import { IconPack } from "./Icons";
import { TagsPack } from "./Tags";
import * as H from "./helpers";
import * as Actions from "../actions";

interface IArticleProps extends React.Props<any> {
    article: IWallabagArticle;
    editMode: boolean;
    helpMode: boolean;
    onCancelClick: () => void;
    onSaveClick: (title: string) => void;
}

const mapStateToProps = (state: any) => {
  return {
    article: state.article,
    editMode: state.editMode,
    helpMode: state.helpMode
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onCancelClick: () => { dispatch(Actions.toggleEditMode()); },
    onSaveClick: (title: string) => { dispatch(Actions.setTitle(title)); }
  };
};

const Article = ({  article = null, editMode = false, helpMode = false,
                    onSaveClick  = null, onCancelClick = null  }: IArticleProps) =>
<H.Card>
    <Picture url={ article.preview_picture } />
    { editMode
        ? <TitleEdit title= { article.title } Save={onSaveClick} Cancel={onCancelClick}  />
        : <Title title= { article.title } helpMode={helpMode}/> }
    <H.CardFooter>
        <Domain domainName = { article.domain_name } />
        <IconPack />
    </H.CardFooter>
    <H.CardFooter>
        <TagsPack />
    </H.CardFooter>
</H.Card>;

export default connect(mapStateToProps, mapDispatchToProps)(Article) ;