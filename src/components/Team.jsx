import React from 'react'
import person1 from '../assets/image_resources/team/person1.jpg'
import person2 from '../assets/image_resources/team/person2.jpg'
import person3 from '../assets/image_resources/team/person3.jpg'
const Team = () => {
    return (
        <div id='team' className='team section-padding'>
            <header className="section-header">
                <h4>Who We Are</h4>
                <h2>Our Professional Team</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, blanditiis?</p>
            </header>
            <div className="flex-items">
                <div>
                    <img src={person1} alt="person1" />
                    <h4>John Doe</h4>
                    <p>President</p>
                </div>
                <div>
                    <img src={person2} alt="person2" />
                    <h4>Jane Doe</h4>
                    <p>Vice President</p>
                </div>
                <div>
                    <img src={person3} alt="person3" />
                    <h4>Steve Smith</h4>
                    <p>Marketing Head</p>
                </div>
            </div>
        </div>
    )
}

export default Team