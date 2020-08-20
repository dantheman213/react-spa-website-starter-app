import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import NavPartial from "./partials/NavPartial";
import FooterPartial from "./partials/FooterPartial";

import HomePage from './pages/HomePage'
import FeaturesPage from './pages/FeaturesPage'
import AboutPage from './pages/AboutPage'
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
            <NavPartial />

            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/features" component={FeaturesPage} />
                <Route path="/enterprise" component={EnterprisePage} />
                <Route path="/pricing" component={PricingPage} />
                <Route path="/support" component={SupportPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/terms" component={TermsPage} />
                <Route path="/privacy" component={PrivacyPage} />
                <Route path="/sign-up" component={RegisterPage} />
            </Switch>

            <FooterPartial />
        </Router>
    )
}
