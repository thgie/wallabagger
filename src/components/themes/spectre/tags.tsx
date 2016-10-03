import * as React from "react";
import { connect } from "react-redux";
import { ITag } from "wallabag-api";
import { TagsIcon } from "components/themes";
import * as Actions  from "actions";
import * as Tooltips from "constants/tooltips";


interface ITagProps extends React.Props<any> {
    tag: ITag;
    closable: boolean;
    onClick?: (tagId: number) => void;
    onDelete?: (tagId: number) => void;
}

const Tag = ({ tag = null, closable = false, onClick = null, onDelete = null }: ITagProps) =>
     <span className="chip-sm chip-name" onClick = { () => { onClick(tag.id); } }>
        {tag.label}{ closable ? <button className="btn btn-clear" onClick = { () => { onDelete(tag.id); } } /> : null }
     </span>;

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
        this.saveHtml = this.saveHtml.bind(this);
    }

    saveHtml(param: string): string {
        const map: any = { "&"  : "&amp;", "\'" : "&#039;", "\"" : "&quot;", "<"  : "&lt;", ">"  : "&gt;"  };
        return param.replace(/[<'&">]/g, symb => map[symb]);
    }

    onchange(e: any) {
       const inputValue = (this.refs["input"] as HTMLInputElement).value ;
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

    onkeydown(event: any) {
        const e = (event as KeyboardEvent);
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
    deleteTag = (id: number) => {
        this.props.onDeleteTag(id);
    }
    render() {
        const { foundTags } = this.state;
        const { articleTags, onDeleteTag, helpMode  } = this.props;
        return  <div className={["form-autocomplete", "md-10", helpMode ? "tooltip" :""].join(" ")}  data-tooltip={ helpMode ? Tooltips.TAGS_TOOLTIP : "" }>
                    <div className="form-autocomplete-input">
                    <span className="mt-5" style={{display: "inline-block"}} ><TagsIcon /></span>
                    { articleTags.map(tag => <Tag tag={tag}
                                                closable={true}
                                                key={tag.id}
                                                onDelete={ this.deleteTag }/>
                                                ) }
                    <input className="form-input"
                        type="text"
                        placeholder="type tags here"
                        onChange = { this.onchange }
                        onKeyDown={ this.onkeydown }
                        ref="input"/>
                        {
                            (foundTags === null) || ( foundTags.length === 0) ? null :
                            <ul className="form-autocomplete-list">
                                <span className="mt-5" style={{display: "inline-block"}} >
                                    <span className="float-left card-meta">Tags found:</span>
                                </span>
                                {foundTags}
                            </ul>
                        }
                        </div>
                </div>;
    }
};

export { Tags }