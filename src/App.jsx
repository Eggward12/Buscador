// import logo from './logo.svg';
import { Component } from "react";
import "./App.css";
import Buscador from "./comps/Buscador.jsx";
import Resultado from "./comps/Resultado.jsx";
// import Imagen from './comps/Imagen.jsx';

class App extends Component {

  state = {
    termino: "",
    imagenes : [],
    pagina : 1
  };

  scrol = ()=>{
    const elemento = document.querySelector(".jumbotron");
    elemento.scrollIntoView("smooth", "start");

    }

  anterior = ()=>{
    // console.log("Anterior")
    let pag = this.state.pagina;
    if(pag == 1){
      return null;
    }
    pag=pag-1;
    this.setState({pagina:pag},()=>{
      this.consultarApi();
      this.scrol();
    });
    // console.log(pag)
    // this.consultarApi();
  }

  siguiente = ()=>{
    // console.log("Siguiente.")
    let pag = this.state.pagina;
    pag+=1;
    this.setState({pagina:pag},()=>{
      this.consultarApi();
      this.scrol();
    });
    // console.log(pag)
    // this.consultarApi();
  }

  consultarApi = () => {
    const pag = this.state.pagina;
    const key =
      "https://pixabay.com/api/?key=37611732-4048c1a353348707c9d3bba6e&q='" +
      this.state.termino +
      "'&per_page=30&page="+pag;
    fetch(key)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes : resultado.hits}))
    console.log(pag)
  };

  datos = (termino) => {
    // console.log(termino);
    this.setState(
      {
        termino:termino,
        pagina:1
      },
      () => {
        this.consultarApi();
      }
    );
  };

  render() {
    return (
      <div className="api container">
        <div className="jumbotron">
          <p className="lead text-center">Api para buscar imagenes</p>
        </div>
        <Buscador datosBusqueda={this.datos} />
        {"Buscaste: "+this.state.termino}
        <Resultado
          imagen = {this.state.imagenes}
          anterior = {this.anterior}
          siguiente = {this.siguiente}
        />
      </div>
    );
  }
}
// }
export default App;
