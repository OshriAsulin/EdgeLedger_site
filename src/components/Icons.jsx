import React from 'react'
import '../styles/Icons.css'
const Icons = () => {
    return (
        <div className='icons bg-light'>
            <div className="flex-items">
                <div>
                    <i className="fas fa-university fa-2x"></i>
                    <div>
                        <h3>Ivestment Banking</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, iste.</p>
                    </div>
                </div>
                <div>
                    <i className="fas fa-book-reader fa-2x"></i>
                    <div>
                        <h3>Portfolio Manager</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, iste.</p>
                    </div>
                </div>
                <div>
                    <i className="fas fa-pencil-alt fa-2x"></i>
                    <div>
                        <h3>Tax & Custodial</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, iste.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Icons