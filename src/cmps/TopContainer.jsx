import React from 'react'
import Header from './Header'

export function TopContainer() {
    return (
        <div className="top-container">
            <Header />
            <div className="main-layout">
                <div className="hero">
                    <div>
                        <h1>Find the</h1>
                        <h1>best talent</h1>
                    </div>

                    <div>
                        <p>Finding the right people and building high</p>
                        <p>performing teams can be hard. Most companies</p>
                        <p> aren’t tapping into the abundance of global talent. </p>
                        <p>  We’re about to change that.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
