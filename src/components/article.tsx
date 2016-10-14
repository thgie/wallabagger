import * as React from "react";

import { connect } from "react-redux";
import { IWallabagArticle, ITag } from "../wallabag-api";
import * as Actions from "../actions";

import { Card, Block,
         Picture, Domain, Title, TitleEdit,
         HelpIcon, EditIcon, TrashIcon, ArchiveIcon, StarredIcon,
         Tags, ConfirmDelete } from "./themes";

import "css/popup.css";

interface  IArticleProps extends React.Props<any> {
    article: IWallabagArticle;
    gotoOriginalPage: () => void;
    gotoArticlePage: () => void;
    deleteArticle: () => void;
    toggleArchived: () => void;
    toggleStarred: () => void;
    saveTitle: (par: string) => void;
    tags: ITag[];
    saveTags: (par: string) => void;
    deleteTag: (tagId: number) => void;
}

interface IArticleState {
    helpMode: boolean;
    editMode: boolean;
    deleteMode: boolean;
}

const mapStateToProps = (state: any) => {
    return {
        article: state.article,
        tags: state.tags
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
              gotoOriginalPage: () => { dispatch(Actions.gotoOriginalPage()); },
              gotoArticlePage: () => { dispatch(Actions.gotoArticlePage()); },
              saveTitle: (title: string) => { dispatch(Actions.setTitle(title)); },
              deleteArticle: () => {dispatch(Actions.deleteArticle()); },
              toggleArchived: () => { dispatch(Actions.toggleArchived()); },
              toggleStarred: () => { dispatch(Actions.toggleStarred()); },
              saveTags: (tags: string) => {dispatch(Actions.setTags(tags)); },
              deleteTag: (tagId: number) => {dispatch(Actions.deleteTag(tagId)); }
        };
};


class Article extends React.Component<IArticleProps, IArticleState> {
    constructor(props: IArticleProps) {
        super(props);
        this.state = {
            helpMode: false, editMode: false, deleteMode: false
        };
    }
    toggleHelp = () => {
        this.setState(Object.assign(this.state, { helpMode: !this.state.helpMode}));
    }
    toggleEdit = () => {
        this.setState(Object.assign(this.state, { editMode: !this.state.editMode}));
    }
    toggleDelete = () => {
        this.setState(Object.assign(this.state, { deleteMode: !this.state.deleteMode}));
    }
    deleteArticle = () => {
       this.props.deleteArticle();
       this.toggleDelete();
    }
    deleteTag = (id: number) => {
       this.props.deleteTag(id);
    }
    toggleArchived = () => {
        this.props.toggleArchived();
    }
    toggleStarred = () => {
        this.props.toggleStarred();
    }
    saveTitle = (title: string) => {
        this.props.saveTitle(title);
        this.toggleEdit();
    }
    render() {
        const { helpMode, editMode, deleteMode } = this.state;
        const { article, gotoOriginalPage, gotoArticlePage, tags, saveTags } = this.props;
        return <Card>
                   <Block>
                      <Picture url = { article.preview_picture } />
                    </Block>
                    <Block>
                        { editMode
                            ? <TitleEdit title = { article.title } Save = { this.saveTitle } Cancel={ this.toggleEdit } />
                            : <Title title={ article.title } onClick={ gotoArticlePage } helpMode={ helpMode }/>
                        }
                    </Block>
                    <Block>
                        <Domain domainName = { article.domain_name } onClick = { gotoOriginalPage } helpMode={ helpMode }/>
                        <HelpIcon onClick={ this.toggleHelp } checked={ helpMode } helpMode={ true }/>
                        <TrashIcon onClick = { this.toggleDelete } helpMode={ helpMode }/>
                        <StarredIcon onClick={ this.toggleStarred } checked={ article.is_starred === 1 } helpMode={ helpMode }/>
                        <ArchiveIcon onClick={ this.toggleArchived } checked={ article.is_archived === 1 } helpMode={ helpMode }/>
                        <EditIcon onClick = { this.toggleEdit } helpMode={ helpMode }/>
                    </Block>
                    <Block>
                        <Tags articleTags={ article.tags }
                              allTags = { tags }
                              onDeleteTag = { this.deleteTag }
                              onSaveTags = { saveTags }
                              helpMode={ helpMode }/>
                    </Block>
                    <ConfirmDelete Active={ deleteMode } onYesClick = { this.deleteArticle } onNoClick={ this.toggleDelete }/>
                </Card>
                ;
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Article);