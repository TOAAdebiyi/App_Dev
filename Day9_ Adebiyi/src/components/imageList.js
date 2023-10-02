import React from "react";

const images_list = function(){
    const images = props.images.map{
        (image)=>{
            return <img src={image.webformatURL} alt="image" key={image.id}></img>
        }
    }
    return(
        <div>
            <p>My Image List</p>
            {images}
        </div>
    )
}
export default images_list;

