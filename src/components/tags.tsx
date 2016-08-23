///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import { ITag } from "../wallabag-api";
import { TagsIcon } from "./Icons";
import Tag from "./Tag";
import { ShiftDown, FormAutocomplete, FAInput, FAList, Grey, Left, Input } from "./helpers";

interface ITagsProps extends React.Props<any> {
    articleTags: ITag[];
    foundTags: ITag[];
}

const Tags = ({ articleTags = null, foundTags = null}: ITagsProps) =>
<FormAutocomplete><FAInput>
        <ShiftDown><TagsIcon /></ShiftDown>
            { articleTags.map(tag => <Tag label={tag.label} closable={true} key={tag.id}/>)}
        <Input placeholder="type tags here" />
        { (foundTags === null) || ( foundTags.length === 0) ? null :
        <FAList><Grey><Left><ShiftDown>Tags found: </ShiftDown></Left></Grey>
           {foundTags.map(tag => <Tag label={tag.label} closable={false}  key={tag.id}/>)}
        </FAList> }
</FAInput></FormAutocomplete>;

export default Tags;