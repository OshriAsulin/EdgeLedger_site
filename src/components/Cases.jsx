import React from 'react'
import cases1 from '../assets/image_resources/cases/cases1.jpg'
import cases2 from '../assets/image_resources/cases/cases2.jpg'
import cases3 from '../assets/image_resources/cases/cases3.jpg'
import cases4 from '../assets/image_resources/cases/cases4.jpg'
import cases5 from '../assets/image_resources/cases/cases5.jpg'
import cases6 from '../assets/image_resources/cases/cases6.jpg'
import cases7 from '../assets/image_resources/cases/cases7.jpg'
import cases8 from '../assets/image_resources/cases/cases8.jpg'

const Cases = () => {
    return (
        <div id='cases' className='cases flex-grid section-padding'>
            <header className="section-header">
                <h4>This is what we do</h4>
                <h2>Buisness Cases</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, blanditiis?</p>
            </header>
            <div className="row">
                <div className="column">
                    <img src={cases1} alt="img1" />
                    <img src={cases2} alt="img2" />
                </div>
            
                <div className="column">
                    <img src={cases3} alt="img3" />
                    <img src={cases4} alt="img4" />
                </div>
           
                <div className="column">
                    <img src={cases5} alt="img5" />
                    <img src={cases6} alt="img6" />
                </div>
                <div className="column">
                    <img src={cases7} alt="img7" />
                    <img src={cases8} alt="img8" />
                </div>
            </div>
        </div>
    )
}

export default Cases