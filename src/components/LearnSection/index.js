import React from 'react'
import { learnData } from '../../content/learnData'
import PostContainer from '../PostContainer'
import { Container, Heading, SubHeading, Grid } from './LearnSectionElements'

export const LearnSection = () => {
    return (
        <div id="learn">
            <Container>
                <div>
                    <Heading>Learn</Heading>
                    <SubHeading>This isn't official advice, always do your own research for the trailer you're using.</SubHeading>
                    {learnData &&
                        <Grid>
                            {learnData.map((post) => (
                                <PostContainer post={post} />
                            ))}
                        </Grid>
                    }
                </div>
            </Container>
        </div>
    )
}
