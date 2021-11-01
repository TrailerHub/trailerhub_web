import { Container, Heading, SubHeading, WhiteInnerContainer, WhiteMiddleContainer, ArrowContainer, DownArrow, H2, HR, CenterFlex, P, Grid } from './InsuranceSectionElements';
import { mainMessage, listMessage, insuranceData } from '../../content/insuranceData'
import PostContainer from '../PostContainer'

const InsuranceSection = () => {

    return (
        <div id="insurance">
            <Container>
                <div>
                    <Heading>Insurance</Heading>
                    <CenterFlex><SubHeading>{mainMessage}</SubHeading></CenterFlex>
                    <ArrowContainer>
                        <DownArrow />
                    </ArrowContainer>
                </div>
            </Container>
            <WhiteMiddleContainer>
                <div>
                    <WhiteInnerContainer>
                        <div>
                            <H2>Insurance Reimbursement</H2>
                            <CenterFlex><HR /></CenterFlex>
                            <CenterFlex><P> If you are in Texas, TrailerHub offers to reimburse you for your monthly insurance premium.
                                If you choose the reimbursement option, TrailerHub will charge a 20% service fee for your rentals
                                instead of the normal 10% service fee. Contact insurance@trailerhub.io with proof of
                                your insurance policy to get started.</P></CenterFlex>
                        </div>
                    </WhiteInnerContainer>
                    <H2>Insurance Companies</H2>
                    <CenterFlex><HR /></CenterFlex>
                    <CenterFlex><P> {listMessage}</P></CenterFlex>
                    {insuranceData &&
                        <Grid>
                            {insuranceData.map((post) => (
                                <PostContainer post={post} />
                            ))}
                        </Grid>
                    }
                </div>
            </WhiteMiddleContainer>
        </div >
    )
}

export default InsuranceSection;