
type ButtonStyle = {
    classBootstrap: string,
    color: string,
    setColor: Function
    text: string
}

type ColorButtonType = {
    buttonStyle: ButtonStyle
}

export const ColorButton = (props: ColorButtonType) => {
    const {classBootstrap, color, setColor, text} = props.buttonStyle;
    return (
        <button key={color} type="button" className={`btn ${classBootstrap} m-2`} onClick={() => setColor(color)}>{text}</button>
    );
}