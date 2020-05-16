import React from "react";
import "./start.css";


const Start = ()=>{
    return (
        <div>

            <div className="header">
                <div className="container">
                    <div className="container__header">
                        <div className="container__inside">
                            <div className="header-wrapper">
                                <div className="start__logo">
                                    <a href="#"><img src={require("./images/propets_logo.svg")} alt="logo"/></a>
                                </div>
                                <div>
                                    <button className="sing_in_btn">Sign in</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="section1">
                <div className="container">
                    <div className="container__section1">
                        <div className="section1-left">
                            <div className="text1">
                                <p>Welcome to your</p>
                                <p><span className="text1-green">pawfessional</span></p>
                                <p>community</p>
                            </div>
                            <div className="text2">
                                I lost my pet!
                            </div>
                            <div className="text3">
                                I found a pet!
                            </div>
                            <div className="text4">
                                I’m okay, just want to <a href="#" className="join">JOIN</a> the pawsome community!
                            </div>

                        </div>
                        <div className="section1-right">

                        </div>
                    </div>
                </div>
            </div>

            <div className="section2">
                <div className="container-section2">
                    <p className="text-section2">Our fluffy space for lovers, admirers, dads and</p>
                    <p className="text-section2">moms of our four-legged, winged, tailed guys</p>
                </div>
            </div>


        </div>
        

        

    )
}

export  default Start;