///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import { connect } from "react-redux";
import { ITag } from "../wallabag-api";
import { TagsIcon } from "./Icons";
import * as H from "./helpers";
import * as Actions  from "../actions";

interface ITagProps extends React.Props<any> {
    tag: ITag;
    closable: boolean;
    onClick?: (tagId: number) => void;
    onDelete?: (tagId: number) => void;
}

interface ITagPackProps extends React.Props<any> {
    articleTags: ITag[];
    allTags: ITag[];
    onSaveTags: (tags: string) => void;
    onDeleteTag: (tagId: number) => void;
}


function mapStateToPropsTags (state: any)
{
    return {
        articleTags: state.article.tags,
        allTags: state.tags
    };
};

function mapDispatchToPropsTags (dispatch: any) {
    return {
                onSaveTags: (tags: string) => {dispatch(Actions.setTags(tags)); },
                onDeleteTag: (tagId: number) => {dispatch(Actions.deleteTag(tagId)); }
        };
}

const TagsPck = ({  articleTags = [], allTags = [],
                    onSaveTags = null, onDeleteTag = null  }: ITagPackProps) =>
    <Tags articleTags={ articleTags } allTags={ allTags } onSaveTags = { onSaveTags } onDeleteTag={ onDeleteTag }/>;


const TagsPack = connect(mapStateToPropsTags, mapDispatchToPropsTags)(TagsPck);

class Tag extends React.Component<ITagProps, {}> {
    constructor(props) {
        super(props);
        this.deleteClick = this.deleteClick.bind(this);
        this.onclick = this.onclick.bind(this);
    }
    onclick(e: MouseEvent) {
        this.props.onClick(this.props.tag.id);
    }
    deleteClick(e: MouseEvent) {
        this.props.onDelete(this.props.tag.id);
    }
    render() {
        const { tag, closable } = this.props;
        return <H.Clickable onClick={this.onclick}>
            <H.Chip>{tag.label}{ closable ? <H.Cross onClick={this.deleteClick}/> : null }</H.Chip>
        </H.Clickable> ;
    }
}


interface ITagsProps extends React.Props<any> {
    articleTags: ITag[];
    allTags: ITag[];
    onSaveTags: (tags: string) => void;
    onDeleteTag: (tagId: number) => void;
}

interface ITagsState {
    tagsSrt: string;
    foundTags: ITag[];
}

class Tags extends React.Component<ITagsProps, ITagsState> {

    constructor(props: ITagsProps) {
        super(props);
        this.state = {foundTags: [], tagsSrt: props.articleTags.map(tag => tag.label).join(",")};
        this.tagExists = this.tagExists.bind(this);
        this.onchange = this.onchange.bind(this);
        this.onkeydown = this.onkeydown.bind(this);
    }

    onchange(e: Event) {
       const inputValue = (e.currentTarget as HTMLInputElement).value ;
       const lastChar = inputValue.slice(-1);
       if ( (lastChar !== ",") && (lastChar !== ";") && (lastChar !== " ") ) {
           this.setState( Object.assign(this.state,
           { tagsSrt: `${this.props.articleTags.map(tag => tag.label).join(",")}${inputValue === "" ? "" :","}${inputValue}`,
            foundTags: this.props.allTags.filter(tag =>
                      ( this.props.articleTags.map(t => t.id).indexOf(tag.id) === -1 )
                  &&  ( inputValue.length >= 3 && tag.label.indexOf(inputValue) !== -1)
                  || (inputValue === tag.label) && ( ! this.tagExists(inputValue) )
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
        const value = (e.currentTarget as HTMLInputElement).value;
        if ((keyCode === 32 || keyCode === 13 || key === "," || key === ";")
             && (!this.tagExists(value)) ) {
            (e.currentTarget as HTMLInputElement).value = "";
// TODO: disable input while saving tags            
//            (e.currentTarget as HTMLInputElement).placeholder = "saving tags...";
//            (e.currentTarget as HTMLInputElement).readOnly = true;
            this.props.onSaveTags(this.state.tagsSrt);
        }
    }

    render() {
        let { foundTags } = this.state;
        let { articleTags, onDeleteTag  } = this.props;
        return <H.FormAutocomplete><H.FAInput>
            <H.ShiftDown><TagsIcon /></H.ShiftDown>
                { articleTags.map(tag => <H.ShiftRight key={tag.id}>
                                            <Tag tag={tag}
                                                 closable={true}
                                                 key={tag.id}
                                                 onDelete={ onDeleteTag }/>
                                          </H.ShiftRight>)}
            <H.Input placeholder="type tags here"
                   onChange = {this.onchange}
                   onKeyDown = {this.onkeydown}/>
            { (foundTags === null) || ( foundTags.length === 0) ? null :
            <H.FAList><H.Grey><H.Left><H.ShiftDown>Tags found: </H.ShiftDown></H.Left></H.Grey>
            {foundTags.map(tag => <Tag tag={tag} closable={false}  key={tag.id}/>)}
            </H.FAList> }
        </H.FAInput></H.FormAutocomplete>;
    }
};

export { TagsPack }