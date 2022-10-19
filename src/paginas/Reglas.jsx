import {Link} from  'react-router-dom';

export default function Reglas() {
    return <div>
 
      <div className="container">
        <h1 className='font-semibold text-center text-green-600  text-4xl' >REGLAS DEL JUEGO </h1>
      </div>
<div className="container text-red-700 text-center mt-4 ">
        
    <h2   > Regla 1: Tenés que elegir una opción</h2>   
      <h2   > Regla 2: Morir no es una opción</h2>   
        <h2   > Regla 3: En caso de no elegir una opción: "SHOT"</h2> 
        
        
       
        <div className='text-center  border-white' >
       <Link to="/juego" > <button  className="bg-slate-900 font-bold rounded-md mt-1 hover:bg-slate-900 text-center col-span-3 text-white border p-2">  <p className='hover:text-yellow-400 ' >   Regresar </p>   </button>  </Link>  
        </div>
        
    
      </div>
      
     
     
        
    </div>;
    }