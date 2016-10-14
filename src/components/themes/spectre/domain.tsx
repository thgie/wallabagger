import * as React from "react";
import { IClickable, ITooltipped } from "../interfaces";
import { connect } from "react-redux";
import * as Tootips from "constants/tooltips";


interface IDomainProps extends React.Props<any>, IClickable, ITooltipped {
    domainName: string;
}

const Domain = ( { helpMode = false, onClick = null, domainName = "" }: IDomainProps) =>
  <span className={ helpMode && "tooltip" } data-tooltip={Tootips.DOMAIN_TOOLTIP}>
      <span onClick= { onClick }  className="card-meta clickable" >{domainName}</span>
  </span>;

export { Domain }