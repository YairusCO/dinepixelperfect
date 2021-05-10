import React from 'react'
import iconPerson from '../assets/images/icon-person.svg'
import iconCog from '../assets/images/icon-cog.svg'
import iconChart from '../assets/images/icon-chart.svg'

export function MidContainer() {
    return (
        <div className="mid-container">

            <div className="main-layout flex">
                <div className="main-container">
                    <div className="left-container">
                        <h2>Build & manage distributed teams like no one else.</h2>
                    </div>
                    <div className="right-container">
                        <div className="menu-items">
                            <div>
                                <img src={iconPerson} />
                            </div>
                            <div className="menu-items-r">
                                <h4 className="fs18">Experienced Individuals</h4>
                                <p>Our network is made up of highly experienced professionals</p>
                                <p>who are passionate about what they do.</p>
                            </div>

                        </div>
                        <div><hr /></div>
                        <div className="menu-items">
                            <div>
                                <img src={iconCog} />
                            </div>
                            <div className="menu-items-r">
                                <h4 className="fs18">Easy to Implement</h4>
                                <p className="fs15">Our processes have been refined over years of implementation </p>
                                <p className="fs15">meaning our teams always deliver.</p>
                            </div>

                        </div>
                        <div><hr /></div>

                        <div className="menu-items">
                            <div>
                                <img src={iconChart} />
                            </div>
                            <div className="menu-items-r">
                                <h4 className="fs18">Enhanced Productivity</h4>
                                <p className="fs15">Our customized platform with in-built analytics helps you</p>
                                <p className="fs15">manage your distributed teams.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
