import {Link} from 'react-router-dom'




export default function HomePage() {
    return <div className='text-center container'>

        
<h1 className='font-semibold text-center text-green-600  text-4xl' >Bienvenidos a: ¿Qué Preferís?   </h1> 
<div className='max-w-md p-4 mx-auto mt-4 bg-black sm:shadow-md sm::rounded-md sm:bg-black sm:p-6 md:bg-black' id="section-cta">

            <Link to="/juego" > <button className="bg-slate-900 font-bold rounded-md mt-1 hover:bg-slate-900 text-center col-span-3 text-white border p-2">  <a className='hover:text-yellow-400 ' >   Jugar </a>   </button>  </Link>  
        <br></br>    
            <Link to="/reglas" > <button className="bg-slate-900 font-bold rounded-md mt-1 hover:bg-slate-900 text-center col-span-3 text-white border p-2">  <a className='hover:text-yellow-400 ' >   Reglas </a>   </button>  </Link> 
            <br></br>
            <Link to="/formulario" > <button  className="bg-slate-900 font-bold rounded-md mt-1 hover:bg-slate-900 text-center col-span-3 text-white border p-2">  <a className='hover:text-yellow-400 ' >   Contacto </a>   </button>  </Link>


</div>

    </div>;
    }