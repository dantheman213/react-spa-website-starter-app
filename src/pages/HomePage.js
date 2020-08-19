import React from 'react'
import {Link} from 'react-router-dom'

export default function HomePage() {
    return (
        <div>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className=""></li>
                    <li data-target="#myCarousel" data-slide-to="1" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="2" className=""></li>
                    <li data-target="#myCarousel" data-slide-to="3" className=""></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img className="first-slide"
                             src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                             alt="First slide" />
                            <div className="container">
                                <div className="carousel-caption text-left">
                                    <h1>Example headline.</h1>
                                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi
                                        porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id
                                        elit.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a>
                                    </p>
                                </div>
                            </div>
                    </div>
                    <div className="carousel-item active">
                        <img className="second-slide"
                             src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                             alt="Second slide" />
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>Another example headline.</h1>
                                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi
                                        porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id
                                        elit.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                                </div>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img className="third-slide"
                             src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                             alt="Third slide" />
                            <div className="container">
                                <div className="carousel-caption text-right">
                                    <h1>One more for good measure.</h1>
                                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi
                                        porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id
                                        elit.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a>
                                    </p>
                                </div>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img className="fourth-slide"
                             src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                             alt="Fourth slide" />
                        <div className="container">
                            <div className="carousel-caption text-right">
                                <h1>The last one, promise.</h1>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi
                                    porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id
                                    elit.</p>
                                <p><a className="btn btn-lg btn-primary" href="#" role="button">Pricing</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <div className="container marketing">
                <div className="row">
                    <div className="col-lg-4">
                        <img className="rounded-circle"
                             src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                             alt="Generic placeholder image" width="140" height="140" />
                            <h2>Heading</h2>
                            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id
                                nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum
                                at eros. Praesent commodo cursus magna.</p>
                            <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
                    </div>
                    <div className="col-lg-4">
                        <img className="rounded-circle"
                             src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                             alt="Generic placeholder image" width="140" height="140" />
                            <h2>Heading</h2>
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
                                nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac
                                cursus commodo, tortor mauris condimentum nibh.</p>
                            <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
                    </div>
                    <div className="col-lg-4">
                        <img className="rounded-circle"
                             src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                             alt="Generic placeholder image" width="140" height="140" />
                            <h2>Heading</h2>
                            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus
                                commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                            <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
                    </div>
                </div>
                <hr className="featurette-divider" />
                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span>
                            </h2>
                            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula
                                porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl
                                consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div className="col-md-5">
                            <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto"
                                 alt="500x500"
                                 src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_173fa4b3225%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_173fa4b3225%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.109375%22%20y%3D%22261.203125%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                 data-holder-rendered="true" />
                        </div>
                    </div>

                    <hr className="featurette-divider" />
                    <div className="row featurette">
                        <div className="col-md-7 order-md-2">
                            <h2 className="featurette-heading">Oh yeah, it's that good. <span
                                className="text-muted">See for yourself.</span></h2>
                            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
                                ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque
                                nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div className="col-md-5 order-md-1">
                            <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto"
                                 alt="500x500"
                                 src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_173fa4b3227%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_173fa4b3227%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.109375%22%20y%3D%22261.203125%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                 data-holder-rendered="true" />
                        </div>
                    </div>

                    <hr className="featurette-divider" />
                        <div className="row featurette">
                            <div className="col-md-7">
                                <h2 className="featurette-heading">And lastly, this one. <span
                                    className="text-muted">Checkmate.</span></h2>
                                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                                    id ligula porta felis euismod semper. Praesent commodo cursus magna, vel
                                    scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                            </div>
                            <div className="col-md-5">
                                <img className="featurette-image img-fluid mx-auto"
                                     data-src="holder.js/500x500/auto" alt="500x500"
                                     src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_173fa4b3229%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_173fa4b3229%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.109375%22%20y%3D%22261.203125%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                     data-holder-rendered="true" />
                            </div>
                        </div>
                    <hr className="featurette-divider" />
            </div>
        </div>
    )
}
