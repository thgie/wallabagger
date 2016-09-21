///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import { IClassable, IClickable, Grey, Clickable, Tooltip } from "./helpers";
import { connect } from "react-redux";
import * as Actions  from "../actions";
import * as Tootips from "../constants/tooltips";

interface IDomainProps extends React.Props<any>, IClassable, IClickable {
    helpMode: boolean;
    domainName: string;
}

function mapStateToProps (state: any) {
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


@Grey
@Clickable
@Tooltip(Tootips.DOMAIN_TOOLTIP)
class Domain extends React.Component<IDomainProps, {}> {
 render() {
     const { onClick, domainName, classes } = this.props;
     return <span onClick={ onClick } className={ classes }>{domainName}</span>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Domain);