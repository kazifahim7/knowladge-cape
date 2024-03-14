import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleClick, handleMark }) => {
    const [blogs , setBlogs]=useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            {
                blogs.map((blog)=><Blog key={blog.id} blog={blog}
                    handleClick={handleClick}
                    handleMark={handleMark}
                
                ></Blog>)
            }
            
        </div>
    );
};
Blogs.propTypes = {
    handleClick:PropTypes.func.isRequired,
    handleMark:PropTypes.func.isRequired,
}

export default Blogs;