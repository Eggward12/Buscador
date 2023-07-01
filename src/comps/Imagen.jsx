import React from 'react';

const Imagen = (props)=>{

    let {largeImageURL, likes, previewURL, tags, views} = props.mensaje;

    return(
        <div className="col-2">
            <div className="card">
                <img src={previewURL} alt={tags} className='card-img-top'/>
                <div className="card-body text-center">
                    <p>Likes:{likes}</p>
                    <p>Vistas:{views}</p>
                    <a href={largeImageURL} target='_blank' className="btn btn-primary btn-block">Ver imagen</a>
                </div>
            </div>
        </div>
    )
}
export default Imagen;