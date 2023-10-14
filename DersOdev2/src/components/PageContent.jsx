import React from 'react'
import ProjectSection from './ProjectSection'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'

function PageContent() {
    return (
        <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
            <ProjectSection />
            <AboutSection />
            <ContactSection />

            {/* Image of location/map */}
            <div className="w3-container">
                <img
                    src="https://www.w3schools.com/w3images/map.jpg"
                    className="w3-image"
                    style={{ width: "100%" }}
                />
            </div>
        </div>
    )
}

export default PageContent