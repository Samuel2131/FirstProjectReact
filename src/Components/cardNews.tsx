
import { Description } from "./description";
import { Articles } from "../App";
import { useEffect, useState } from "react";
import axios from "axios";

export const CardNews = (props: Articles) => {
    const {author, description, title, urlToImage} = props;
    const [img, setImg] = useState(false);

    useEffect(() => {
        if(urlToImage){
            axios.get(urlToImage).then(({status}) => {
                setImg(true);
            }).catch((e) => {
                console.log(urlToImage)
            });
        }
    }, [urlToImage]);
    
    return (<div className="card d-flex align-items-center m-4 p-3" style={{width: "18rem"}}>
                <div className="card-body">
                    <div className="d-flex flex-row">
                        <h1 className="fs-4">{title}</h1>
                        <Description name={author} text={description}  />
                    </div>
                    {img ? <img src={urlToImage} width={50} height={70} className="card-img-top" alt="img not found" /> : <p>Img not found...</p>}
                </div>
            </div>)
}