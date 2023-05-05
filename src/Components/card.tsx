
import { RoundImage } from "./roundImage";
import { Description } from "./description";
import { IconBar } from "./iconBar";

type CardProps = {
    id: number,
    author: {
        name: string,
        image: string,
        checked: boolean
    },
    content: {
        text: string,
        image: string
    },
    product: {
        title: string,
        price: number,
        description: string,
        category: string,
    } | undefined
    children?: JSX.Element
}

export const Card = (props: CardProps) => {
    const {author, content, product, children } = props;
    return (<div className="card d-flex align-items-center m-4 p-3" style={{width: "18rem"}}>
                <div className="card-body">
                    <div className="d-flex flex-row">
                        <RoundImage image={author.image}/>
                        <Description name={author.name} text={content.text} checked={author.checked} />
                        {children}
                        { product &&
                            <p>{product.category}, {product.description}, {product.price}, {product.title}</p>
                        }
                    </div>
                    <img src={content.image} className="card-img-top" alt="..." />
                    <IconBar />
                </div>
            </div>)
}