interface IClickable {
    onClick?: () => void;
}

interface ITooltipped {
    helpMode: boolean;
}

export { IClickable, ITooltipped }