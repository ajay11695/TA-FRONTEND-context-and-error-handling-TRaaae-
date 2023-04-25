import { useAuth } from "./UserContext";


function Header() {
let {user}=useAuth();

    return (
        <div className="flex header">
            <h1 className="logo">Logo</h1>
            <nav className="flex">
                <li>Home</li>
                <li>Contact</li>
                <li>{user.name}</li>
            </nav>
        </div>



    )
}

export default Header