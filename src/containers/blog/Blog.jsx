import React from "react";
import './blog.css';
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog01} date="Sep 26, 2023" title="GPT-3 and Open AI is the future. Let us explore"/>
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imgUrl={blog02} date="Nov 14, 2023" title="Unlocking the Potential of GPT-3: A Journey into the Future"/>
                    <Article imgUrl={blog03} date="Dec 8, 2023" title="Exploring the Boundless Horizons of GPT-3 and Open AI"/>
                    <Article imgUrl={blog04} date="Jan 22, 2024" title="The Rise of GPT-3: Shaping Tomorrow's World with Open AI"/>
                    <Article imgUrl={blog05} date="Mar 5, 2024" title="Unleashing the Power of GPT-3: Navigating the Path Forward"/>
                </div>
            </div>
        </div>
    )
}

export default Blog;