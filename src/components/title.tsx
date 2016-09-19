///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import { connect } from "react-redux";
import { IClassable, IClickable, BigBlue, Clickable, Tooltip, Text, Button } from "./helpers";
import * as Actions  from "../actions";
import * as Tootips from "constants/tooltips";

interface ITitleProps extends React.Props<any>, IClickable, IClassable {
    title: string;
    helpMode: boolean;
}

interface ITitleEditProps extends React.Props<any> {
    title: string;
    Save: (title: string) => void;
    Cancel: () => void;
}

interface ITitleEditState {
    title: string;
}

interface ITitlePackState extends React.Props<any>, IClickable {
    editMode: boolean;
    helpMode: boolean;
    title: string;
    onSaveClick: () => void;
    onCancelClick: () => void;
}

@BigBlue
@Clickable
@Tooltip(Tootips.TITLE_TOOLTIP)
class Title extends React.Component<ITitleProps, {}> {
    render() {
        const { title, onClick, classes } = this.props;
        return <span onClick={ onClick } className={ classes }>{ title }</span>;
    }
};

class TitleEdit extends React.Component<ITitleEditProps, ITitleEditState> {
constructor(props: ITitleEditProps) {
    super(props);
    this.state = {title: props.title};
    }
    titleChange = (e: Event) => {
        this.setState( { title: (e.target as HTMLTextAreaElement).value } );
    }
    saveClick = () => {
        const { Save } = this.props;
        Save(this.state.title);
    }
    render() {
        const { title, Cancel } = this.props;
        return <div>
            <Text value={ this.state.title } onChange = { this.titleChange } ></Text>
            <Button link onClick={ this.saveClick } >Save</Button>
            <Button link onClick={Cancel}>Cancel</Button>
        </div>;
    }
}

function mapStateToPropsTitle (state: any) {
    return {
        editMode: state.editMode,
        helpMode: state.helpMode,
        title: state.article.title
    };
};

function mapDispatchToPropsTitle (dispatch: any) {
    return {
    onCancelClick: () => { dispatch(Actions.toggleEditMode()); },
    onSaveClick: (title: string) => { dispatch(Actions.setTitle(title)); },
    onClick: () => { dispatch(Actions.gotoArticlePage()); }
        };
}

const TitlePck = ({
    editMode= false,
    helpMode= false,
    title= "",
    onSaveClick= null,
    onCancelClick= null,
    onClick = null
}: ITitlePackState) =>  {
   return  editMode
         ? <TitleEdit title = { title } Save = {onSaveClick} Cancel = {onCancelClick} />
         : <Title title= { title } helpMode={helpMode} onClick={ onClick }/>;
};

const TitlePack = connect(mapStateToPropsTitle, mapDispatchToPropsTitle)(TitlePck);

export { TitlePack };        