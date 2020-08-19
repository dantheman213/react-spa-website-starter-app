import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import HomePage from './pages/HomePage'
import FeaturesPage from './pages/FeaturesPage'
import AboutPage from './pages/AboutPage'
import AboutPageSub1 from './pages/AboutPageSub1'
import AboutPageSub2 from './pages/AboutPageSub2'
import EnterprisePage from './pages/EnterprisePage'
import PricingPage from './pages/PricingPage'
import RegisterPage from './pages/RegisterPage'
import SupportPage from './pages/SupportPage'
import ContactPage from './pages/ContactPage'
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";

export default function App() {
    const [inputValue, setInputValue] = useState("initial");

    return (
        <Router>
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

            <main>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/features" component={FeaturesPage} />
                    <Route path="/enterprise" component={EnterprisePage} />
                    <Route path="/pricing" component={PricingPage} />
                    <Route path="/support" component={SupportPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/aboutsub1" component={AboutPageSub1} />
                    <Route path="/aboutsub2" component={AboutPageSub2} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/terms" component={TermsPage} />
                    <Route path="/privacy" component={PrivacyPage} />
                    <Route path="/sign-up" component={RegisterPage} />
                </Switch>
            </main>

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
        </Router>
    )
}
