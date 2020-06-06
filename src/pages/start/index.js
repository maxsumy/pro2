import React from "react";
import {useState, useEffect} from 'react';
import "./start.css";


const Start = ()=>{
    const [lost, setValueLost] = useState("I lost my pet!");
    const [found, setValueFound] = useState("I found a pet!");
    const [name_fl, setValueName_fl] = useState(true);
    const [password_fl, setValuePassword_fl] = useState(true);
    const [opSingIn, setopSingIn] = useState({
       opacity: 0.28,
    });
    const [opSingUp, setopSingUp] = useState({
        opacity: 1,
    });


    const onMouseOverLost =  () =>{
        setValueLost("Click to find!");
    }

    const onMouseOverFound =  () =>{
        setValueFound("What to do?");
    }

    const onMouseOutLost =  () =>{
        setValueLost("I lost my pet!");
    }

    const onMouseOutFound =  () =>{
        setValueFound("I found a pet!");
    }

    const singIn = ()=>{
        setValueName_fl(false);
        setValuePassword_fl(false);

        setopSingIn({
                ...opSingIn,
                opacity: 1,
            });

        setopSingUp({
            ...opSingUp,
            opacity: 0.28,
        });

    }



    const singUp = ()=>{
        setValueName_fl(true);
        setValuePassword_fl(true);

        setopSingUp({
            ...opSingUp,
            opacity: 1,
        });

        setopSingIn({
            ...opSingIn,
            opacity: 0.28,
        });
    }

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
                                    <button className="sing_in_btn" >Sign in</button>
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
                            <div className="text2" onMouseOver={onMouseOverLost} onMouseOut={onMouseOutLost}>
                                {lost}
                            </div>
                            <div className="text3" onMouseOver={onMouseOverFound} onMouseOut={onMouseOutFound}>
                                {found}
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

            <div className="section3">
                <div className="section3-left">
                    <img src={require("./images/pets.png")} alt="pets"/>
                </div>
                <div className="section3-right">
                    <p className="section3-title">Here is collected everything that your pet needs:</p>
                    <ul>
                        <li className="li1">professional veterinarian tips;</li>
                        <li className="li2">useful information about education and care;</li>
                        <li className="li3">fostering home search;</li>
                        <li className="li4">information about pet-sitting and walking service;</li>
                        <li className="li5">and of course, great communication with new </li>
                        <li >friends in your social network!</li>

                    </ul>

                </div>
            </div>

            <div className="section4">
                <div className="container-section4">
                    <div className="section4-left">
                        <div>Coming soon</div>
                    </div>
                    <div className="section4-middle">
                        <p>We are planing to open a new service,</p>
                        <p>where your cats and dogs can find their love!</p>

                    </div>
                    <div className="section4-right">
                        <img src={require("./images/heart-regular.svg")} alt="heart" className="heart"/>
                        LOVE
                    </div>
                </div>

            </div>

            <div className="footer">
                <div className="container-section4">
                    <div className="footer-left">
                        <a href="#"><img src={require("./images/propets_logo.svg")} alt="logo" className="footer-logo"/></a>
                    </div>
                    <div className="footer-middle">
                        <div className="footer-middle-icons">
                            <a href="#"><img src={require("./images/facebook-brands.svg")} alt="facebook-logo" className="footer-face"/></a>
                            <a href="#"><img src={require("./images/instagram-brands.svg")} alt="instagram-logo" className="footer-inst"/></a>
                        </div>
                        <div className="footer-middle-text">
                            <p>1600 Amphitheatre Pkwy</p>
                            <p>Mountain View, CA 94043, USA</p>
                        </div>

                    </div>
                    <div className="footer-right">
                        <div className="footer-right-col1">
                            <ul>
                                <li className="fli1"><a href="">Lost</a></li>
                                <li className="fli2"><a href="">Found</a></li>
                                <li className="fli3"><a href="">VetHelp</a></li>
                            </ul>
                        </div>
                        <div className="footer-right-col2">
                            <ul>
                                <li className="fli4"><a href="">Hotels</a></li>
                                <li className="fli5"><a href="">Walking</a></li>
                                <li className="fli6"><a href="">Fostering</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>

            <div className="sing">
                <div className="sing-container">

                    <div className="sing-header">
                        <div className="sing-logo"><a href="#"><img src={require("./images/sing/propets_logo.svg")} alt="logo"/></a></div>
                        <div className="X">X</div>
                    </div>

                    <div className="sing-text">
                        Welcome! Please sign in / sign up to continue
                    </div>

                    <div className="sing-buttons">

                        <div className="sing-button1"  onClick={singUp} style={opSingUp}>Sign up</div>
                        <div className="sing-button2" onClick={singIn} style={opSingIn}>Sign in</div>
                    </div>

                    <div className="input-group-sing">
                        <form>

                            {name_fl && (
                                <div>
                                    <label className="label1">Name</label>
                                    <input className="label-sing" type="text" name="name" />
                                </div>
                            )

                            }

                            <div>
                                <label className="label2">Email</label>
                                <input className="label-sing" type="text" name="email"/>
                            </div>
                            <div>
                                <label>Password</label>
                                <input className="label-sing" type="password" name="pwd1"/>
                            </div>

                            {password_fl && (
                                <div>
                                    <label>Password</label>
                                    <input className="label-sing" type="password" name="pwd2"/>
                                </div>)
                            }



                            <div>
                                <button className="form-button-cancel" type="cancel" >Cancel</button>
                                <button className="form-button-submit" type="submit" >Submit</button>
                            </div>


                        </form>

                      </div>




                    </div>
            </div>


        </div>
        

        

    )
}

export  default Start;