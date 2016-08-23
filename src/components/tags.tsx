///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import { ITag } from "../wallabag-api";
import { TagsIcon } from "./Icons";
import { ShiftRight, ShiftDown, FormAutocomplete, FAInput, FAList, Grey, Left, Input, Clickable, Chip, Cross } from "./helpers";

interface ITagProps extends React.Props<any> {
    label: string;
    closable: boolean;
}

const Tag = ({label = "", closable = false}: ITagProps) =>
 <Clickable>
     <Chip>{label}{ closable ? <Cross /> : null }</Chip>
 </Clickable> ;

interface ITagsProps extends React.Props<any> {
    articleTags: ITag[];
    foundTags: ITag[];
}

const Tags = ({ articleTags = null, foundTags = null}: ITagsProps) =>
<FormAutocomplete><FAInput>
        <ShiftDown><TagsIcon /></ShiftDown>
            <ShiftRight>{ articleTags.map(tag => <Tag label={tag.label} closable={true} key={tag.id}/>)}</ShiftRight>
        <Input placeholder="type tags here" />
        { (foundTags === null) || ( foundTags.length === 0) ? null :
        <FAList><Grey><Left><ShiftDown>Tags found: </ShiftDown></Left></Grey>
           {foundTags.map(tag => <Tag label={tag.label} closable={false}  key={tag.id}/>)}
        </FAList> }
</FAInput></FormAutocomplete>;

export default Tags;