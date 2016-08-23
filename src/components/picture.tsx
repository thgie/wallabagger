///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import { CardImage, ImgResponsive } from "./helpers";

interface IPictureProps extends React.Props<any> {
    url: string;
}

const Picture = ({ url = "img/wallabag-icon-128.png"}: IPictureProps) =>

<CardImage>
   <ImgResponsive src={ url } />
</CardImage>;

export default Picture;