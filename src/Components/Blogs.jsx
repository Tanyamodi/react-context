import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner';
import "../App.css"


const Blogs = () => {
    const { posts, loading } = useContext(AppContext);
    console.log("Print inside blog component");
    console.log(posts);


    return (
        <div className='w-11/12 max-w-[670px] py-8  flex flex-col gap-y-7 mt-[66px] mb-[70px] justify-center items-center'>
            {
                loading ?

                    (< Spinner />) :
                    (
                        posts.length === 0 ?
                            (<div>
                                <p>No Post Found</p>
                            </div>) :
                            (posts.map((posts) => (
                                <div key={posts.id}>
                                    <p className='font-bold text-lg'>{posts.title}</p>
                                    <p className='text-sm mt-[4px]'>
                                        By <span className='italic'>{posts.author}</span>
                                        on <span className='underline font-bold'>{posts.category}</span>
                                    </p>
                                    <p className='text-sm mt-[4px]'>Posted on {posts.date}</p>
                                    <p className='text-md mt-[14px]'>{posts.content}</p>
                                    <div className='flex gap-x-3'>{posts.tags.map((tag, index) => {
                                        return <span key={index} className='text-red-700 underline bold font-bold text-xs mt-[5px]'>{`#${tag}`}</span>
                                    })}</div>
                                </div>
                            )))
                    )
            }
        </div>
    )
}

export default Blogs