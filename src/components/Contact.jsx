import React from 'react'
import imgContact from '../assets/image_resources/home/contact.jpg'
import '../styles/Form.css';

const Contact = () => {

    return (
        <div id='contact' className="contact flex-columns">
            <div className="row">
                <div className="column">
                    <div className="column-1">
                        <img src={imgContact} alt="" />
                    </div>
                </div>
                <div className="column">
                    <div className="column-2 bg-light">
                        <h2>Request Callback</h2>
                        <form  className="callback-form">
                            <div className="form-control">
                                <label htmlFor=""></label>
                                <input type="text" placeholder='Enter name' />
                            </div>
                            <div className="form-control">
                                <label htmlFor=""></label>
                                <input type="email" placeholder='Enter email' />
                            </div>
                            <div className="form-control">
                                <label htmlFor=""></label>
                                <input type="tel" placeholder='Enter phone' />
                            </div>
                            <button className='btn'>submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact