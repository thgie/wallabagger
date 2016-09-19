///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import { connect } from "react-redux";
import { CardImage, ImgResponsive, IClassable } from "./helpers";

interface IPictureProps extends React.Props<any>, IClassable {
    url: string;
}

const mapStateToProps =  (state: any) => {
    return {
        url: state.article.preview_picture
    };
};

@ImgResponsive
@CardImage
class Picture extends  React.Component<IPictureProps,{}>  {
    render() {
        const { url, classes } = this.props;
        return <img src={ url } className={ classes }/>; 
    }
}
        


export default connect(mapStateToProps)(Picture);