import * as React from "react";
// ========= Picture ============
interface IPictureProps extends React.Props<any> {
    url: string;
};

const Picture = ({ url = "" }: IPictureProps) =>
        <img src={ url } className="card-image img-responsive"/>;

export { Picture }