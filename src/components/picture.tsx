///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import { connect } from "react-redux";
import { CardImage, ImgResponsive } from "./helpers";

interface IPictureProps extends React.Props<any> {
    url: string;
}

const mapStateToProps =  (state: any) => {
    return {
        url: state.article.preview_picture
    };
};

const Picture: React.StatelessComponent<IPictureProps> = ({ url= "" }: IPictureProps) =>
        <CardImage><ImgResponsive src={ url } /></CardImage>;


export default connect(mapStateToProps)(Picture);