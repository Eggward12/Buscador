import React from 'react';

const Paginas = (props)=>{
    return(
        <div className="py-3 text-center">
            <button onClick={props.anterior} className="btn btn-info me-2">Anterior &larr;</button>
            <button onClick={props.siguiente} className="btn btn-info">Siguiente &rarr;</button>
        </div>
    )
}
export default Paginas