///<reference path="../../typings/index.d.ts" />
import * as React from "react";

import Picture from "./Picture";
import { TitlePack } from "./Title";
import { Domain } from "./Domain";
import { IconPack } from "./Icons";
import { TagsPack } from "./Tags";
import * as H from "./helpers";
import { ConfirmDelete } from "./modals";

const Article = () =>
<H.Card>
    <Picture />
    <TitlePack />
    <H.CardFooter>
        <Domain />
        <IconPack />
    </H.CardFooter>
    <H.CardFooter>
        <TagsPack />
    </H.CardFooter>
    <ConfirmDelete/>
</H.Card>;

export default Article ;