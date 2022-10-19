import { Link } from "react-router-dom";



export default function Error404() {
  return (
    <div className="text-center text-white">
          <h1>Oops! Algo salio mal!</h1>
      <p>Te dejamos la manera de regresar aqui</p>
      <br>
      </br>
      <Link to="/juego" > <button className="bg-slate-900 font-bold rounded-md mt-1 hover:bg-slate-900 text-center col-span-3 text-white border p-2">  <a className='hover:text-yellow-400 ' >   Incio </a>   </button>  </Link>  
       <br></br>
          <Link to="/juego" > <button className="bg-slate-900 font-bold rounded-md mt-1 hover:bg-slate-900 text-center col-span-3 text-white border p-2">  <a className='hover:text-yellow-400 ' >   Jugar </a>   </button>  </Link>  
        <br></br>    
        <Link to="/reglas" > <button  className="bg-slate-900 font-bold rounded-md mt-1 hover:bg-slate-900 text-center col-span-3 text-white border p-2">  <a className='hover:text-yellow-400 ' >   Reglas </a>   </button>  </Link> 
      </div>
  )
}