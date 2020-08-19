import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

export default function FooterPartial() {
    return (
        <div className="container">
            <footer className="pt-4 my-md-5 pt-md-5 border-top">
                <div className="row">
                    <div className="col-6 col-md">
                        <h5>Who We Are</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="/about">About Us</a></li>
                            <li><a className="text-muted" href="/press">Press</a></li>
                            <li><a className="text-muted" href="/blog">Blog</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Reach Out</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="/contact">Contact</a></li>
                            <li><a className="text-muted" href="/careers">Careers</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Legal</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="/privacy">Privacy Policy</a></li>
                            <li><a className="text-muted" href="/terms">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md">
                        <img className="mb-2" src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="24"
                             height="24" />
                        <small className="d-block mb-3 text-muted">Copyright © 2020 Your Company, LLC. All Rights Reserved.</small>
                    </div>
                </div>
            </footer>
        </div>
    )
}
