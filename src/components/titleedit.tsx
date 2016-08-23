///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import { Text, CardBody, ButtonLink } from "./helpers";

interface ITitleEditProps extends React.Props<any> {
    title: string;
    Save: (title: string) => void;
    Cancel: () => void;
}

interface ITitleEditState {
    title: string;
}
export class TitleEdit extends React.Component<ITitleEditProps, ITitleEditState> {
    constructor(props: ITitleEditProps) {
        super(props);
        this.state = {title: props.title};
    }
    titleChange(e: Event) {
        this.setState( { title: (e.target as HTMLTextAreaElement).value } );
    }
    saveClick() {
        const { Save } = this.props;
        console.log( this.state.title );
        Save(this.state.title);

    }
    render() {
        const { title, Cancel } = this.props;
        return <CardBody>
            <Text value={ this.state.title } onChange = { this.titleChange.bind(this) } ></Text>
            <ButtonLink onClick={ this.saveClick.bind(this)} >Save</ButtonLink>
            <ButtonLink onClick={Cancel}>Cancel</ButtonLink>
        </CardBody>;
    }
}


