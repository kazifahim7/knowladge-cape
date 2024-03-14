import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleClick, handleMark }) => {
    return (
        <div className='mt-2 shadow-xl p-4 shadow-violet-200 rounded-xl'>
            <img src={blog.cover} alt="" className='w-1/2 rounded-xl' />
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center mt-1'>
                    <img src={blog.author_img} alt="" className='w-16 rounded-full' />
                    <div>
                        <h3 className="text-2xl">{blog.author}</h3>
                        <p>{blog.posted_date}</p>
                    </div>

                </div>
                <div className='flex items-center gap-2'>
                    <span>{blog.reading_time}min read</span>
                    <button onClick={()=>handleClick(blog)}
                    
                    
                    
                    className='text-2xl }' ><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h1 className='text-3xl font-bold'>{blog.title}</h1>
            <span>{blog.hashtags[0]} {blog.hashtags[1]}</span>
            <br />

            <button className='underline text-purple-700'
            
                onClick={() => handleMark(blog.id, blog.reading_time)}
            >mark as read</button>
            
            



        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleClick:PropTypes.func.isRequired,
    handleMark:PropTypes.func.isRequired
}

export default Blog;