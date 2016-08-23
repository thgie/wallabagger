///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import { Grey, Clickable } from "./helpers";

interface IDomainProps extends React.Props<any> {
    domainName: string;
}

const Domain = ({domainName= "wallabag.org"}: IDomainProps) =>
    <Grey><Clickable>{domainName}</Clickable></Grey>;

export default Domain;