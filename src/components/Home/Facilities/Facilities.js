import React from 'react';
import './Facilities.css'
import photo from '../../../images/facilities-photo.jpeg'
import borderPhoto from '../../../images/car_border.png'
const Facilities = () => {
    return (
        <div style={{ margin: "0 !important", maxWidth: "100%", overflowX: "hidden" }} className="m-0 p-0">
            <div className="row my-5 facility-container">
                <div className="col-md-6 p-0 h-100">
                    <img className="w-100 img-fluid" src={photo} alt="" />
                </div>
                <div className="col-md-6 why-choose-us p-0">
                    <div className="why-choose-us-content">
                        <div className="facility-title">
                            <h3 className="section-title">ARE YOU LOOKING FOR A CAR ?</h3>
                            <img src={borderPhoto} alt="" />
                        </div>
                        <div className="icon-content my-2">
                            <div>
                                <h4><i class="fas fa-car"></i></h4>
                            </div>
                            <div>
                                <h4>CHOOSE A CAR</h4>
                                <p>Assess Your Needs. The "right car" depends on who you are and what you expect from a car. Set Your Budget.Decide If You Want to Lease.</p>
                            </div>
                        </div>
                        <div className="icon-content my-2">
                            <div>
                                <h4><i class="fas fa-car"></i></h4>
                            </div>
                            <div>
                                <h4>PICKUP A CAR</h4>
                                <p>Full-sized pickups and SUVs are an important source of revenue for major car manufacturers such as GM, Ford, and Stellantis, accounting for more than two-thirds</p>
                            </div>
                        </div>
                        <div className="icon-content my-2">
                            <div>
                                <h4><i class="fas fa-tachometer-alt"></i></h4>
                            </div>
                            <div>
                                <h4>ENJOY DRIVING</h4>
                                <p>Make your vehicle more comfortable · Keep the vehicle in great condition · Don't think of it as a chore ·  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;