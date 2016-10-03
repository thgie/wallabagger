import * as React from "react";
import { connect } from "react-redux";
import { IClickable, ITooltipped } from "../interfaces";
import * as Tootips from "constants/tooltips";

interface ITitleEditProps extends React.Props<any> {
    title: string;
    Save: (title: string) => void;
    Cancel: () => void;
}

class TitleEdit extends React.Component<ITitleEditProps, {}> {
    render() {
        return <div>
            <textarea defaultValue={ this.props.title } ref="Text" className="form-input"></textarea>
            <button className="btn btn-link" onClick={ () => this.props.Save((this.refs["Text"] as HTMLTextAreaElement).value) } >Save</button>
            <button className="btn btn-link" onClick={this.props.Cancel}>Cancel</button>
        </div>;
    }
}

interface ITitleProps extends React.Props<any>, IClickable, ITooltipped {
    title: string;
}
const Title = ({ onClick = null, title = "", helpMode = false }: ITitleProps) =>
   <div className={ helpMode && "tooltip" } data-tooltip={Tootips.TITLE_TOOLTIP}>
        <div onClick={ onClick } className="clickable bigBlue">{ title }</div>
   </div>;

export { Title, TitleEdit };        