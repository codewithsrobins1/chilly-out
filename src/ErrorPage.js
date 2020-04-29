import React from 'react'
import './ErrorPage.css'

function Error() {
    return (
        <div className="error-container">
            <main className="error-main">
                <h1 className="error-main-heading-1">
                    4
                    <span className="error-span"><i className="fas fa-ghost"></i></span>
                    4
                </h1>
                <h2 className="error-main-heading-2">Error: 404 page not found</h2>
                <p className="error-main-description">Sorry, the page you're looking for cannot be accessed</p>
            </main>
        </div>
    )
}

export default Error;
