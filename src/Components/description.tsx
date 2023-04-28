
import { BlueChecked } from "./icon";

export const Description = (props: any) => {
    const {name, text, checked} = props;
    return (<div className="d-flex flex-column ms-3">
                <div className="d-flex align-items-center">
                    <h5 className="card-title text-start mb-0">{name}</h5>
                    {checked && <BlueChecked />}
                </div>
                <p className="card-text text-start">{text}</p>
            </div>);
}