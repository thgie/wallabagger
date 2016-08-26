///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import * as H from "./helpers";
import { connect } from "react-redux";
import * as Actions  from "../actions";

interface IDomainProps extends React.Props<any> {
    domainName: string;
    onClick: () => void;
}

function mapStateToProps (state: any)
{
    return {
        domainName: state.article.domain_name
    };
};

function mapDispatchToProps (dispatch: any) {
    return {
                onClick: () => {dispatch(Actions.gotoOriginalPage()); }
        };
}

const Domain_ = ({domainName= "wallabag.org", 
                  onClick = null }: IDomainProps) =>
    <H.Grey><H.Clickable onClick={ onClick }>{domainName}</H.Clickable></H.Grey>;

const Domain = connect(mapStateToProps, mapDispatchToProps)(Domain_);

export { Domain };