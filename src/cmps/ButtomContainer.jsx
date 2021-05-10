import React from 'react'
import kady from './../assets/images/avatar-kady.jpg'
import Aiysha from './../assets/images/avatar-aiysha.jpg'
import Arthur from './../assets/images/avatar-arthur.jpg'
export function ButtomContainer() {
    return (
        <div className="buttom-container">
            <div className="main-layout flex column">
                <div className="flex column">
                <div className="btm-title fs48">
                    <h2>Delivering real results for top </h2>
                    <h2>companies. Some of our <span>success stories.</span></h2>
                </div>
                <div className="flex">
                    <div>
                        <p> “The team perfectly fit the specialized skill set </p>
                        <p>required. They focused on the most essential</p>
                        <p> features helping us launch the platform </p>
                        <p>eight months faster than planned.”</p>
                        <h5>Kady Baker</h5>
                        <p>Product Manager at Bookmark</p>
                        <img src={kady} alt="" />
                    </div>
                    <div>
                        <p>“We needed to automate our entire onboarding</p>
                        <p>process. The team came in and built out the</p>
                        <p>whole journey. Since going live, user retention</p>
                        <p>has gone through the roof!”</p>
                        <h5>Aiysha Reese</h5>
                        <p>Founder of Manage</p>
                        <img src={Aiysha} alt="" />
                    </div>
                    <div>
                        <p>“Amazing. Our team helped us build an app that</p>
                        <p>delivered a new experience for hiring a physio.</p>
                        <p>The launch was an instant success with 100k</p>
                        <p>downloads in the first month.”</p>
                        <h5>Arthur Clarke</h5>
                        <p>Co-founder of MyPhysio</p>
                        <img src={Arthur} alt="" />
                    </div>
                </div>
            </div>
            </div>
        </div>

    )
}
