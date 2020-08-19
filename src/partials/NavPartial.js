import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

export default function NavPartial() {
    return (
        <nav className="navbar navbar-expand-sm bg-light fixed-top">
            <div className="container">
                <div className="my-0 mr-md-auto font-weight-normal">
                    <a href="/"><img src="/images/brand.svg" /></a>
                </div>
                <div className="my-2 my-md-0 mr-md-3">
                    <a className="p-2 text-dark" href="/features">Features</a>
                    <a className="p-2 text-dark" href="/pricing">Pricing</a>
                    <a className="p-2 text-dark" href="/enterprise">Enterprise</a>
                    <a className="p-2 text-dark" href="/support">Support</a>

                </div>
                <a className="btn btn-outline-primary" href="/sign-up">Sign up</a>
            </div>
        </nav>
    )
}
