import React from 'react'
import {Link} from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import { Toggler } from './Toggler';

const Navbar = () => {
    const { theme } = useTheme();
        return (
            <div className={theme === "light" ? "bg-dark mb-0 " : "bg-light mb-0"}>
                <nav className={theme === "light" ? "navbar navbar-expand-lg fixed-top absolute navbar-dark bg-dark top-0" : "navbar navbar-expand-lg fixed-top absolute navbar-light bg-light top-0" }>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">NewsBoy</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/health">health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science">science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology">technology</Link>
                                </li>
                            </ul>
                        </div> 
                        <div className="nav-item align-middle ml-auto my-2">
                            <Toggler />
                        </div>
                    </div>
                </nav>
            </div>
        )
}

export default Navbar
