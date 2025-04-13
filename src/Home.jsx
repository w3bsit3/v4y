import { Link } from 'react-router-dom';
export default function Home() {


  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl mb-20">Zatím tu nic není :)</h1>
      <Link to="/hory2">
        <button className="cursor-pointer text-center bg-slate-800 p-3 rounded-md ">Nové video: Hory2 🏔️</button>
      </Link>
    </div>
  )
}


