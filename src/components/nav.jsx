import logo from '../assets/logo.png';
import 'tailwindcss/tailwind.css';

export default function Nav() {
    return (
        <nav className='flex flex-row justify-between w-full'>
            <div className="logo ">
                <img className='h-20 p-2 relative left-4 rounded-lg' src={logo} alt="Food Wars" />
            </div>
            <div >
                <ul className='flex flex-row relative top-5 text-base'>
                    <a href="#"><li className='px-4'>Home</li></a>
                    <a href="#"><li className='px-4'>Our Deals</li></a>
                    <a href="#"><li className='px-4'>About</li></a>
                    <a href="#"><li className='px-4'>Contact</li></a>
                </ul>
            </div>
        </nav>
    );
}