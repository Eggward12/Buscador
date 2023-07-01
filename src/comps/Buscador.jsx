import React, { Component } from 'react';
import { PropTypes } from 'react';
// import App from './App.jsx';

class Buscador extends Component {

    busquedaRef = React.createRef();
    obtenerDatos = (e)=>{
        e.preventDefault();
        // console.log(this.busquedaRef.current.value)
        this.props.datosBusqueda(this.busquedaRef.current.value)
    }

    render() { 
        return (
            <form onSubmit={this.obtenerDatos}>
                {/* {this.props.mensaje} */}
                <div className="row barra-busqueda">
                    <div className="col-md-10 form-group">
                        <input ref={this.busquedaRef} type="text" className="form-control" placeholder='Busca tu imagen aqui'/>
                    </div>
                    <div className="col-md-2 mt-1">
                        <input type="submit" value="Buscar" className='btn-buscar'/>
                    </div>
                </div>
            </form>
        );
    }
}
 
export default Buscador;