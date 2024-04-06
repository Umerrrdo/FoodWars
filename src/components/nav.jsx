import logo from '../assets/logo.png';

export default function Nav() {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="Food Wars" />
                <h1>Umer Mehmood</h1>
            </div>
        </nav>
    );
}