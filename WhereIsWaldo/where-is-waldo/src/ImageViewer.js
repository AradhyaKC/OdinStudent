import image from "./Rplace.png";
import {useEffect, useRef, useState} from 'react'
import "./ImageViewer.css";

function ImageViewer(props){

    const [state ,setState]=useState(()=>{
        return {
            zoom:1,transformOriginX:0,transformOriginY:0
        }
    });
    var ImageEle = useRef(undefined);

    useEffect(()=>{
        ImageEle.current=document.querySelector(".img-place");
        console.log(ImageEle.current.style.transformOrigin);
        ImageEle.current.addEventListener("wheel",onWheelMove);
    },[]);

    const onWheelMove=async (e)=>{
        let deltaY = -e.deltaY;
        if(deltaY>0) deltaY=1;
            else    deltaY=-1;
        await setState((prevState)=>{
            prevState.zoom +=deltaY;
            prevState.zoom=Math.max(1,prevState.zoom);
            return prevState;
        })
        ImageEle.current.style.transformOrigin=`${e.offsetX}px ${e.offsetY}px`;
        ImageEle.current.style.transform=`scale(${state.zoom})`;
    }

    return (
        <div className="image-viewer">
            <div className="img-container">
                <img className="img-place" src={image} alt="alt"/>
            </div>
            <div>
                SLider Placeholder
            </div>
        </div>
    );
}
export default ImageViewer;