import { Link } from 'react-router-dom'
import swal from "sweetalert";

export default function Formulario() {
   
    function alerta() {
   

        if (document.getElementById('nick').value == "" ) {
            swal("Error", "Ingresa tu nick  ", "error");
            return false;
        }
        if (document.getElementById('email').value == "") {
            swal("Error", "Ingresa tu email  ", "error");
            return false;
        }
        if (document.getElementById('edad').value == "") {
            swal("Error", "Ingresa tu edad  ", "error");
            return false;
        }

       
         swal({
          title: "Mensaje enviado con exito ",
            text: "Esperamos poder contactarnos contigo pronto",
              icon: "success",
        button: "Ok",
              timer: "3000",                    
          })
    }
    
    return (

        <div className="container text-center">
            
            <h1 className='font-semibold text-center text-green-600  text-4xl' >FORMULARIO</h1>
            <div className="flex flex-col justify-center items-center"> 
    <form className="w-full max-w-lg" >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Usuario
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nick" type="text" placeholder="Nick" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            E-mail
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="Micorreo@correo.com" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Ingrese su Opcion
          </label>
          <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" placeholder="Ejemplo: Que una tarantula gigante te coma las manos"></textarea>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
         <Link onClick={alerta} to="/" >   <button className="shadow bg-teal -400focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded hover:bg-slate-500 bg-slate-600" type="button">
            Enviar
          </button> </Link>
        </div>
        <div className="md:w-2/3"></div>
      </div>
            </form>
            </div>
            
        </div>
  )
}
