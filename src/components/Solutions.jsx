import React from 'react'
import imgPeople from '../assets/image_resources/home/people.jpg'
const Solutions = () => {
    return (
        <div id='about' className="solutions flex-columns">
            <div className="row">
                <div className="column">
                    <div className="column-1">
                        <img src={imgPeople} alt="" />
                    </div>
                </div>
                <div className="column bg-primary">
                    <div className="column-2 ">
                        <h4>What you are looking for</h4>
                        <h2>We provide bespoke solutions</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quaerat cupiditate aspernatur obcaecati voluptas ipsa ipsam beatae recusandae ab sit?</p>
                        <a href="#" className="btn btn-outline">
                            <i className="fas fa-chevron"></i>
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solutions