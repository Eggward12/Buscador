import React,{Component} from 'react';
import Imagen from './Imagen.jsx';
import Paginas from './Paginas.jsx';

class Resultado extends Component{

    mostrarImagen = ()=>{
        let imagenes = this.props.imagen;

        if(this.props.imagen.length == 0){
            return null;
        }
        // console.log(this.props.imagen)
        return(
            <React.Fragment>
                <div className="row">
                    {imagenes.map(imagen=>(
                        <Imagen
                            key = {imagen.id}
                            mensaje = {imagen}
                        />
                    ) )}
                </div>
                <Paginas
                    anterior = {this.props.anterior}
                    siguiente = {this.props.siguiente}
                />
            </React.Fragment>
        )
    }

    render(){
        // 
        return(
            // <p>Desde Resultado.js se imprime:</p>
            <React.Fragment>
                {this.mostrarImagen()}
            </React.Fragment>
            
        );
    }
}

export default Resultado;