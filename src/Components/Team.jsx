import React from "react";
import '../styles/Team.css';

function Team () {

    return (
        <div className="team-container">
            <div className="columns">
                <div className="image">
                    <div className="img-container">
                        <img src={require('../Images/photo-1.png')} alt="Bill Mahoney" />
                        <p>Product Owner</p>
                    </div>
                    <h2>Bill Mahoney</h2>
                </div>
                <div className="image">
                    <div className="img-container img2">
                        <img src={require('../Images/photo-2.png')} alt="Saba Cabrera" />
                        <p>Art Director</p>
                    </div>
                    <h2>Saba Cabrera</h2>
                </div>
                <div className="image">
                    <div className="img-container">
                        <img src={require('../Images/photo-3.png')} alt="Shae Le" />
                        <p>Teach Lead</p>
                    </div>
                    <h2>Shae Le</h2>
                </div>
                <div className="image">
                    <div className="img-container">
                        <img src={require('../Images/photo-4.png')} alt="Skylah Lu" />
                        <p>UX Designer</p>
                    </div>
                    <h2>Skylah Lu</h2>
                </div>
                <div className="image">
                    <div className="img-container img5">
                        <img src={require('../Images/photo-5.png')} alt="Griff Richards" />
                        <p>Developer</p>
                    </div>
                    <h2>Griff Richards</h2>
                </div>
                <div className="image">
                    <div className="img-container">
                        <img src={require('../Images/photo-6.png')} alt="Stan John" />
                        <p>Developer</p>
                    </div>
                    <h2>Stan John</h2>
                </div>
            </div>
        </div>
    )
}

export default Team;