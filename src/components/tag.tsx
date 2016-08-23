///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import { Chip, Clickable, Cross } from "./helpers";

interface ITagProps extends React.Props<any> {
    label: string;
    closable: boolean;
}

const Tag = ({label = "", closable = false}: ITagProps) =>
 <Clickable>
     <Chip>{label}{ closable ? <Cross /> : null }</Chip>
 </Clickable> ;

export default Tag;