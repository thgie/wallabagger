///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import { connect } from "react-redux";
import { CardImage, ImgResponsive } from "./helpers";

interface IPictureProps extends React.Props<any> {
    url: string;
}

const mapStateToProps = (state: any) => ({ url: state.article.preview_picture });

const Picture_ = ({ url = "img/wallabag-icon-128.png"}: IPictureProps) =>
<CardImage>
   <ImgResponsive src={ url } />
</CardImage>;

export default connect(mapStateToProps)(Picture_);