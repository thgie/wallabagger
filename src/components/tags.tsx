///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import { connect } from "react-redux";
import { ITag } from "../wallabag-api";
import { TagsIcon } from "./icons";
import * as H from "./helpers";
import * as Actions  from "actions";
import * as Tooltips from "constants/tooltips";


interface ITagProps extends React.Props<any> {
    tag: ITag;
    closable: boolean;
    onClick?: (tagId: number) => void;
    onDelete?: (tagId: number) => void;
}

interface ITagPackProps extends React.Props<any> {
    articleTags: ITag[];
    allTags: ITag[];
    helpMode: boolean;
    onSaveTags: (tags: string) => void;
    onDeleteTag: (tagId: number) => void;
}


function mapStateToPropsTags (state: any) {
    return {
        articleTags: state.article.tags,
        allTags: state.tags,
        helpMode: state.helpMode
    };
};

function mapDispatchToPropsTags (dispatch: any) {
    return {
                onSaveTags: (tags: string) => {dispatch(Actions.setTags(tags)); },
                onDeleteTag: (tagId: number) => {dispatch(Actions.deleteTag(tagId)); }
        };
}

const TagsPck = ({  articleTags = [], allTags = [], helpMode = false,
                    onSaveTags = null, onDeleteTag = null  }: ITagPackProps) =>
        <Tags articleTags={ articleTags }
              allTags={ allTags }
              helpMode={ helpMode }
              onSaveTags = { onSaveTags }
              onDeleteTag={ onDeleteTag }/>;


const TagsPack = connect(mapStateToPropsTags, mapDispatchToPropsTags)(TagsPck);

class Tag extends React.Component<ITagProps, {}> {

    onclick = (e: React.MouseEvent) => {
        if ( (this.props.onClick !== null) && (this.props.onClick !== undefined) )
            this.props.onClick(this.props.tag.id);
    }

    deleteClick = (e: MouseEvent) => {
        this.props.onDelete(this.props.tag.id);
    }
    render() {
        const { tag, closable } = this.props;
        return <H.Clickable_ onClick={ this.onclick }>
            <H.Chip>{tag.label}{ closable ? <H.Cross onClick={this.deleteClick}/> : null }</H.Chip>
        </H.Clickable_> ;
    }
}

interface ITagsProps extends React.Props<any> {
    articleTags: ITag[];
    allTags: ITag[];
    helpMode: boolean;
    onSaveTags: (tags: string) => void;
    onDeleteTag: (tagId: number) => void;
}

interface ITagsState {
    tagsSrt: string;
    search: string;
    index: number;
    foundTags: ITag[];
}

class Tags extends React.Component<ITagsProps, ITagsState> {

    constructor(props: ITagsProps) {
        super(props);
        this.state = {foundTags: [], tagsSrt: props.articleTags.map(tag => tag.label).join(","), search: "", index: -1 };
        this.tagExists = this.tagExists.bind(this);
        this.onchange = this.onchange.bind(this);
        this.onkeydown = this.onkeydown.bind(this);
        this.onfoundTagClick = this.onfoundTagClick.bind(this);
        this.ondeletetag = this.ondeletetag.bind(this);
        this.saveHtml = this.saveHtml.bind(this);
    }

    saveHtml(param: string): string {
        const map: any = { "&"  : "&amp;", "\'" : "&#039;", "\"" : "&quot;", "<"  : "&lt;", ">"  : "&gt;"  };
        return param.replace(/[<'&">]/g, symb => map[symb]);
    }

    onchange(e: Event) {
       const inputValue = (e.currentTarget as HTMLInputElement).value ;
       const lastChar = inputValue.slice(-1);
       if ( (lastChar !== ",") && (lastChar !== ";") && (lastChar !== " ") ) {
           this.setState( Object.assign(this.state,
           { tagsSrt: `${this.props.articleTags.map(tag => tag.label).join(",")}${inputValue === "" ? "" :","}${inputValue}`,
            foundTags: this.props.allTags.filter(tag =>
                      ( this.props.articleTags.map(t => t.id).indexOf(tag.id) === -1 )
                  &&  ( this.state.search.length >= 3 && tag.label.indexOf(this.state.search) !== -1)
                  || (this.state.search === tag.label) && ( ! this.tagExists(this.state.search) )
                //   &&  ( inputValue.length >= 3 && tag.label.indexOf(inputValue) !== -1)
                //   || (inputValue === tag.label) && ( ! this.tagExists(inputValue) )
            )
              }) );
       }
    }

    tagExists(tag: string): boolean  {
      return ( this.props.articleTags.map(t => t.label)
               .indexOf(tag) !== -1 );
    }

    onkeydown(e: KeyboardEvent) {
        const keyCode = e.keyCode;
        const key = e.key;
        const element = (e.currentTarget as HTMLInputElement);
        const value = element.value;
        const cursorAtEnd: boolean = value.slice(0, element.selectionStart).length === value.length;
        if ((keyCode === 32 || keyCode === 13 || key === "," || key === ";")
             && (!this.tagExists(value)) ) {
            (e.currentTarget as HTMLInputElement).value = "";
            this.setState( Object.assign(this.state,   {foundTags: []}  ));
            this.props.onSaveTags( this.saveHtml(this.state.tagsSrt));
            return;
        }
        if ( (key === "ArrowRight") && ( this.state.foundTags.length > 0 ) && ( cursorAtEnd )) {
            const { foundTags, index } = this.state;
            const ftag: ITag = foundTags[ foundTags.length - 1 > index + 1 ? index + 1 : foundTags.length - 1 ];
            (e.currentTarget as HTMLInputElement).value = ftag.label;
            this.onchange(e);
            this.setState( Object.assign(this.state,   { index: index + 1}  ));
            return;
        }
        this.setState( Object.assign(this.state,   { search: value + key, index: -1}  ));
    }

    onfoundTagClick(id: number) {
        const ftag: ITag = this.state.foundTags.filter(tag => tag.id === id)[0];
        const tsrt: string =  `${this.props.articleTags.map(tag => tag.label).join(",")},${ftag.label}`;
        this.props.onSaveTags(tsrt);
    }

    ondeletetag(id: number) {
        //    this.setState( Object.assign(this.state,
        //    { tagsSrt: `${this.props.articleTags.map(tag => tag.label).join(",")}${inputValue === "" ? "" :","}${inputValue}`,
        //     foundTags: this.props.allTags.filter(tag =>
        //               ( this.props.articleTags.map(t => t.id).indexOf(tag.id) === -1 )
        //           &&  ( inputValue.length >= 3 && tag.label.indexOf(inputValue) !== -1)
        //           || (inputValue === tag.label) && ( ! this.tagExists(inputValue) )
        //     )
        //       }) );
                }

    render() {
        const { foundTags } = this.state;
        const { articleTags, onDeleteTag, helpMode  } = this.props;
        return  <H.FormAutocompleteTags
                    tooltip={ helpMode ? Tooltips.TAGS_TOOLTIP : ""}
                    icon= {<TagsIcon />}
                    tags={ articleTags.map(tag =>
                                            <Tag tag={tag}
                                                 closable={true}
                                                 key={tag.id}
                                                 onDelete={ onDeleteTag }/>
                                          ) }
                    foundTags = {(foundTags === null) || ( foundTags.length === 0) ? null
                         : foundTags.map(tag => <Tag tag={tag} closable={false}  key={tag.id} onClick={this.onfoundTagClick}/>) }
                    placeholder= "type tags here"
                    onChange = {this.onchange}
                    onKeyDown = {this.onkeydown}
                />;
    }
};

export { TagsPack }