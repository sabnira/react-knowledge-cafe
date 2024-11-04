import PropTypes from 'prop-types';
import './Blog.css'
import { BsBookmarkFill } from "react-icons/bs";


const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    
    const {id, title, cover, reading_time, author_img, author, posted_date, hashtags} = blog;

    return (
        <div className='blog-container'>
            <img className='cover-img' src={cover} alt={`cover picture of the title ${title}`} />

            <div className='flex justify-between pt-5'>
                <div className='flex gap-4'>
                    <img className='w-14 h-14 object-cover rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-2xl text-red-600'>
                        <BsBookmarkFill></BsBookmarkFill></button>
                </div>
            </div>

            <h2 className='text-4xl py-4'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href="">  #{hash}</a></span>)
                }
            </p>
            
            <button onClick={() => handleMarkAsRead(id, reading_time)} className='text-purple-600 font-bold pt-4 underline'>Mark As Read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
}


export default Blog;