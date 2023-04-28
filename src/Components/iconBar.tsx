
import { Icon } from "./icon";
import messenger from "../img/messenger.png"
import love from "../img/love.png"
import st from "../img/statistic.png"
import refresh from "../img/refresh.png"
import download from "../img/download.png"

const arrIcon = [messenger, love, st, refresh, download]

export const IconBar = () => {
    return (
        <div className="d-flex flex-row container-fluid mt-3">
            {
                arrIcon.map((item) => <Icon image={item} />)
            }
        </div>
    );
}