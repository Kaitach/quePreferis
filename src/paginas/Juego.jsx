import Pregunta from '../components/funcionDelJuego';
import { Link } from 'react-router-dom';


export default function Juego() {

 

  return (
    <div className='flex flex-col justify-center items-center'>
        
      <h1  className='font-semibold text-center text-green-600  text-lg md:text-xl xl:text-4xl' >ELEGÍ, ESTOY SEGURO QUE PERDERÁS  </h1> 
  
   
      <div className='max-w-md p-4 mx-auto mt-4 bg-black sm:shadow-md sm::rounded-md sm:bg-black sm:p-6 md:bg-black' >
        <div className='text-center  border-white' >
          <button onClick={Pregunta} className="bg-slate-900 font-bold rounded-md  hover:bg-slate-900 text-center  text-white border" >  <a className='hover:text-yellow-400 '  > ¿Qué preferís? </a>   </button>
          


        </div>
       
      </div>      
      <div className='container text-center text-white  md:text-xl xl:text-2xl'>

      <h1  className='mt-7' id="respuesta1"></h1>
   
    <h1  className='mt-7' id="respuesta2"></h1>
        
      </div>

      <div className="absolute right-0 bottom-0 
                    w-16 h-16">
       <Link to="/reglas">   <p    className='text-white  bg-gray-700 text-center hover:bg-slate-400 hover:cursor-pointer 
            rounded-md	  '> Reglas </p>   </Link> 
      </div>

      <div className="absolute left-0 bottom-0 
                    w-35 h-16">
       <Link to="/formulario">   <p    className='text-white  bg-gray-700 text-center hover:bg-slate-400 hover:cursor-pointer 
            rounded-md	   '> Contacto </p>   </Link> 
      </div>
    </div>
  )
}
