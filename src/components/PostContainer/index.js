import React from 'react'
import { Container, AuthorText, H3, Img, DescriptionP } from './PostContainerElements'

const PostContainer = ({post}) => {
    return (
        <Container href={post.url} target="_blank">
            <Img src={post.imageUrl} alt={post.alt}/>
            <AuthorText>{post.author} {post.website && <span>| {post.website}</span>}</AuthorText>
            <H3>{post.title}</H3>
            <DescriptionP>{post.description}</DescriptionP>
        </Container>
    )
}

export default PostContainer
