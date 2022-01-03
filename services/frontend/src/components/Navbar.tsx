import { Link } from "react-router-dom";

const Navbar = (): JSX.Element => {
    return (<>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <p>Logo here</p>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link to='/' className="navbar-item">
                        Home
                    </Link>
                    <a className="navbar-item">
                        Documentation
                    </a>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            More
                        </a>
                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                About
                            </a>
                            <a className="navbar-item">
                                Jobs
                            </a>
                            <a className="navbar-item">
                                Contact
                            </a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item">
                                Report an issue
                            </a>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">

                            <Link className="button is-primary" to='/register'>Sign up</Link>
                            <Link className="button is-light" to='/login'>Log in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>)
}

export default Navbar;