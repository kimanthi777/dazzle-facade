import React from 'react'
import { useDocumentTitle } from '../../core/hooks/use-document-title'

const Blog = () => {
    useDocumentTitle('Blog')
    
    return (
        <div>Blog</div>
    )
}

export default Blog