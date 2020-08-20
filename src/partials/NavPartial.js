import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

export default function NavPartial() {
    return (
        <nav id="navHome" className="navbar navbar-expand-lg bg-light navbar-light sticky-top">
            <div className="container-fluid max-width-940">
                <a className="navbar-brand" href="/">
                    <img src="/images/brand.svg" />
                </a>
                <button className="navbar-toggler togglerNoBorder" type="button" data-toggle="collapse"
                        data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse backgroundWhite" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/features">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/pricing">Pricing</a>
                        </li>
                        <li className="nav-item dropdown navDropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Plans
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navDropdown"
                                 aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Catfish Plan</a>
                                <a className="dropdown-item" href="#">Mackerel Plan</a>
                                <a className="dropdown-item" href="#">Anglerfish Plan</a>
                                <a className="dropdown-item" href="#">Shark Plan</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/enterprise">Enterprise</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/support">Support</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-outline-primary" href="/sign-up">Sign up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
