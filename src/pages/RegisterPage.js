import React from 'react'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
    return (
        <div className="container">
            <div className="py-5 text-center">
                    <h2>Sign up</h2>
                    <p className="lead">Below is an example form built entirely with Bootstrap's form controls. Each
                        required form group has a validation state that can be triggered by attempting to submit the
                        form without completing it.</p>
            </div>

            <div className="row">
                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Tell us about yourself</h4>
                    <form className="needs-validation" noValidate="">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName">First name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="" value=""
                                       required="" />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName">Last name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="" value=""
                                       required="" />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="username">Username</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">@</span>
                                </div>
                                <input type="text" className="form-control" id="username" placeholder="Username"
                                       required="" />
                                    <div className="invalid-feedback" style={{width: '100%'}}>
                                        Your username is required.
                                    </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address">Address</label>
                            <input type="text" className="form-control" id="address" placeholder="1234 Main St"
                                   required="" />
                                <div className="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                            <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                        </div>

                        <div className="row">
                            <div className="col-md-5 mb-3">
                                <label htmlFor="country">Country</label>
                                <select className="custom-select d-block w-100" id="country" required="">
                                    <option value="">Choose...</option>
                                    <option>United States</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid country.
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="state">State</label>
                                <select className="custom-select d-block w-100" id="state" required="">
                                    <option value="">Choose...</option>
                                    <option>California</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please provide a valid state.
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="zip">Zip</label>
                                <input type="text" className="form-control" id="zip" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Zip code required.
                                    </div>
                            </div>
                        </div>

                        <hr className="mb-4" />
                        <button className="btn btn-primary btn-lg btn-block" type="submit">Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
