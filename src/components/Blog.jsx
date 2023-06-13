import React from 'react'
import imgBlog from '../assets/image_resources/home/blog.jpg'

const Blog = () => {
    return (
        <div className="Blog flex-columns flex-reverse">
            <div className="row">
                <div className="column">
                    <div className="column-1">
                        <img src={imgBlog} alt="" />
                    </div>
                </div>
                <div className="column bg-secondary">
                    <div className="column-2 ">
                        <h4>March 16 2023</h4>
                        <h2>Blog Post One</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quaerat cupiditate aspernatur obcaecati voluptas ipsa ipsam beatae recusandae ab sit?</p>
                        <a href="#" className="btn btn-outline">
                            <i className="fas fa-chevron"></i>
                            Read Our Blog
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog