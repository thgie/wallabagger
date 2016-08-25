///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import { connect } from "react-redux";

import { IWallabagArticle, ITag } from "../wallabag-api";
import Picture from "./Picture";
import { TitlePack } from "./Title";
import Domain from "./Domain";
import { IconPack } from "./Icons";
import { TagsPack } from "./Tags";
import * as H from "./helpers";
import * as Actions from "../actions";

interface IArticleProps extends React.Props<any> {
    article: IWallabagArticle;
}

const mapStateToProps = (state: any) => {
  return {
    article: state.article
  };
};

const Article = ({  article = null  }: IArticleProps) =>
<H.Card>
    <Picture url={ article.preview_picture } />
    <TitlePack />
    <H.CardFooter>
        <Domain domainName = { article.domain_name } />
        <IconPack />
    </H.CardFooter>
    <H.CardFooter>
        <TagsPack />
    </H.CardFooter>
</H.Card>;

export default connect(mapStateToProps)(Article) ;