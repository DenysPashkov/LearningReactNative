import React, { createContext, useState } from "react";

// Create context with default value
const BlogContext = createContext();
const tempValue = [{title: 'title 1', content: 'content'},{title: 'title 2', content: 'content'},{title: 'title 3', content: 'content'}]

export const BlogProvider = ({ children }) => {
    const [getBlogPosts, setBlogPosts] = useState(tempValue)

    function addBlogPost() {
        setBlogPosts([...getBlogPosts, {title: `title ${getBlogPosts.length+1}`, content: "content"}])
    }

    return (
        <BlogContext.Provider value={{data:getBlogPosts, addBlogPost: addBlogPost}}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;
