import React, {useEffect} from 'react';
import './Blog.css'
import BlogPreview from "../../components/Blog/BlogPreview";

function Blog() {
    useEffect(() => {
        document.title = "Blog"
    }, []);


    return (
        <div id="blogContainer">
            <h1>Blog</h1>
            <div id='previews-container'>
                <BlogPreview photo={"1"} title={"Une nouvelle IA"}/>
                <BlogPreview photo={'2'} title={"Salut tout le monde"}/>
            </div>
        </div>
    )
}

export default Blog;