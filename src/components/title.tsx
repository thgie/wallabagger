///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import { connect } from "react-redux";
import * as H from "./helpers";
import * as Actions  from "../actions";

interface ITitleProps extends React.Props<any> {
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

interface ITitlePackState {
    editMode: boolean;
    helpMode: boolean;
    title: string;
    onSaveClick: () => void;
    onCancelClick: () => void;
}


const Title = ({title = "test title", helpMode = false}: ITitleProps) =>
         helpMode
           ? <H.CardHeader><H.Clickable><H.BigBlue><H.Tooltip tooltip="Click to open saved article">{title}</H.Tooltip></H.BigBlue></H.Clickable></H.CardHeader>
           : <H.CardHeader><H.Clickable><H.BigBlue>{title}</H.BigBlue></H.Clickable></H.CardHeader>;


class TitleEdit extends React.Component<ITitleEditProps, ITitleEditState> {
    constructor(props: ITitleEditProps) {
        super(props);
        this.state = {title: props.title};
    }
    titleChange(e: Event) {
        this.setState( { title: (e.target as HTMLTextAreaElement).value } );
    }
    saveClick() {
        const { Save } = this.props;
        Save(this.state.title);
    }
    render() {
        const { title, Cancel } = this.props;
        return <H.CardBody>
            <H.Text value={ this.state.title } onChange = { this.titleChange.bind(this) } ></H.Text>
            <H.ButtonLink onClick={ this.saveClick.bind(this)} >Save</H.ButtonLink>
            <H.ButtonLink onClick={Cancel}>Cancel</H.ButtonLink>
        </H.CardBody>;
    }
}

function mapStateToPropsTitle (state: any)
{
    return {
        editMode: state.editMode,
        helpMode: state.helpMode,
        title: state.article.title
    };
};

function mapDispatchToPropsTitle (dispatch: any) {
    return {
    onCancelClick: () => { dispatch(Actions.toggleEditMode()); },
    onSaveClick: (title: string) => { dispatch(Actions.setTitle(title)); }
        };
}

const TitlePck = ({
    editMode= false,
    helpMode= false,
    title= "",
    onSaveClick= null,
    onCancelClick= null
}: ITitlePackState) =>  {
   return editMode
        ? <TitleEdit title = { title } Save = {onSaveClick} Cancel = {onCancelClick} />
        : <Title title= { title } helpMode={helpMode}/>;
};

const TitlePack = connect(mapStateToPropsTitle,mapDispatchToPropsTitle)(TitlePck);

export { TitlePack };        