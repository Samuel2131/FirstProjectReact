
import { RoundImage } from "./roundImage";
import { Description } from "./description";
import { IconBar } from "./iconBar";

type CardProps = {
    author: {
        name: string,
        image: string,
        checked: boolean
    },
    content: {
        text: string,
        image: string
    }
}

export const Card = (props: CardProps) => {
    const {author, content} = props;
    return (<div className="card d-flex align-items-center m-4 p-3" style={{width: "18rem"}}>
                <div className="card-body">
                    <div className="d-flex flex-row">
                        <RoundImage image={author.image}/>
                        <Description name={author.name} text={content.text} checked={author.checked} />
                    </div>
                    <img src={content.image} className="card-img-top" alt="..." />
                    <IconBar />
                </div>
            </div>)
}