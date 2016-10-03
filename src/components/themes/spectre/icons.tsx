import * as React from "react";
import * as Tooltips from "constants/tooltips";

import { IClickable, ITooltipped } from "../interfaces";

interface IIconProps extends React.Props<any>, IClickable, ITooltipped {};

interface IToggleIconProps extends IIconProps {
    checked: boolean;
}

const EditIcon = ({ onClick = null, helpMode = false }: IIconProps ) =>
    <span className={ [helpMode && "tooltip","float-right","mt-5"].join(" ")}
          data-tooltip = { Tooltips.EDIT_TOOLTIP }>
        <span className="icon icon-pencil clickable" onClick={onClick} />
    </span>;

const TrashIcon = ({ onClick = null, helpMode = false }: IIconProps ) =>
    <span className={ [helpMode && "tooltip","float-right","mt-5"].join(" ")}
          data-tooltip = { Tooltips.DELETE_TOOLTIP }>
        <span className="icon icon-bin clickable" onClick={onClick} />
    </span>;

const ArchiveIcon = ({ onClick = null, helpMode = false, checked = false }: IToggleIconProps ) =>
    <span className={ [helpMode && "tooltip","float-right","mt-5"].join(" ")}
          data-tooltip = { Tooltips.ARCHIVE_TOOLTIP }>
        <span className={["icon", "clickable", checked ? "icon-checkmark2" : "icon-checkmark"].join(" ")}
              onClick={onClick} />
    </span>;

const StarredIcon = ({ onClick = null, helpMode = false, checked = false }: IToggleIconProps ) =>
    <span className={ [helpMode && "tooltip","float-right","mt-5"].join(" ")}
          data-tooltip = { Tooltips.FAVORITE_TOOLTIP }>
        <span className={["icon", "clickable", checked ? "icon-star2" : "icon-star"].join(" ")}
              onClick={onClick} />
    </span>;

const HelpIcon = ({ onClick = null, helpMode = false, checked = false }: IToggleIconProps ) =>
    <span className={ [helpMode && "tooltip","float-right","mt-5"].join(" ")}
          data-tooltip = { Tooltips.HELP_TOOLTIP }>
        <span className={["icon", "clickable", checked ?  "icon-help2" : "icon-help"].join(" ")}
              onClick={onClick} />
    </span>;


// ----------------------------------------------
const TagsIcon = () => <span className="icon icon-tags"/>;

export { TagsIcon, HelpIcon, EditIcon, TrashIcon, ArchiveIcon, StarredIcon }