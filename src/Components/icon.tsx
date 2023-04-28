
import checked from "../img/verified.png"

export const Icon = (props: any) => {
    const { image } = props;
    return <img src={image} className="mx-3" style={{width: '15px', height: '15px'}} alt="..." />
}

export const BlueChecked = () => {
    return <img src={checked} className="mx-3" style={{width: '15px', height: '15px'}} alt="..." />
}