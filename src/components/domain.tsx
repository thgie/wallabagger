///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import * as H from "./helpers";
import { connect } from "react-redux";
import * as Actions  from "../actions";
import * as Tootips from "../constants/tooltips";

interface IDomainProps extends React.Props<any> {
    helpMode: boolean;
    domainName: string;
    onClick: () => void;
}

function mapStateToProps (state: any)
{
    return {
        domainName: state.article.domain_name,
        helpMode:  state.helpMode
    };
};

function mapDispatchToProps (dispatch: any) {
    return {
                onClick: () => {dispatch(Actions.gotoOriginalPage()); }
        };
}


class Domain extends React.Component<IDomainProps, {}> {
 render() {
     const { onClick, domainName } = this.props;
     return <H.Grey><H.Clickable onClick={ onClick }>{domainName}</H.Clickable></H.Grey>;
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Domain);