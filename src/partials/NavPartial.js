import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

export default function NavPartial() {
    return (
        <nav
            className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <div className="my-0 mr-md-auto font-weight-normal">
                <h1>
                    <a href="/"  style={{display: 'flex'}}>
                        <div>
                            <img className="mx-auto mb-4"
                                 src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="24"
                                 height="24" />
                        </div>
                        <div style={{display: 'inline', marginLeft: '15x'}}>Company Name</div>
                    </a>
                </h1>
            </div>

            <div className="my-2 my-md-0 mr-md-3">
                <a className="p-2 text-dark" href="/features">Features</a>
                <a className="p-2 text-dark" href="/pricing">Pricing</a>
                <a className="p-2 text-dark" href="/enterprise">Enterprise</a>
                <a className="p-2 text-dark" href="/support">Support</a>

            </div>
            <a className="btn btn-outline-primary" href="/sign-up">Sign up</a>
        </nav>
    )
}
