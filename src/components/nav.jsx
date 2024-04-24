import logo from '../assets/logo.png';
import 'tailwindcss/tailwind.css';

export default function Nav() {
    return (
        <nav className='bg-black flex flex-row text-white justify-between'>
            <div className='flex flex-row text-xl font-bold font-sans p-4'>
                <h1>Food Wars</h1>
            </div>
            <div className="nav-options relative top-4">
                   <a className='px-4 text-base font-medium' href="#">Blog</a>
                   <a className='px-4 text-base font-medium' href="#">Contact</a>
                   <a className='px-4 text-base font-medium' href="#">About</a>
            </div>
            <div className='sign-up relative top-4'>
                <a className='uppercase px-4 py-1.5 rounded-2xl text-base font-medium bg-light-green ' href="#">Sign up</a>
                <a className='px-4 py-1.5 text-base font-medium border-white rounded-2xl' href="#">Log in</a>
            </div>
        </nav>
    );
}