
import { Description } from "./description";
import { Articles } from "../App";

export const CardNews = (props: Articles) => {
    const {author, description, title, urlToImage} = props;
    
    return (<div className="card d-flex align-items-center m-4 p-3" style={{width: "18rem"}}>
                <div className="card-body">
                    <div className="d-flex flex-row">
                        <h1 className="fs-4">{title}</h1>
                        <Description name={author} text={description}  />
                    </div>
                    {<img src={urlToImage} width={50} height={70} className="card-img-top" alt="img not found" />}
                </div>
            </div>)
}