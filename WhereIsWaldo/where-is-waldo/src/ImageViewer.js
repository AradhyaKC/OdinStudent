import image from "./Rplace.png";
import "./ImageViewer.css"
function ImageViewer(props){


    return (
        <div>
            <img className="img-place" src={image} alt="alt"/>
        </div>
    );
}
export default ImageViewer;