import { Container, Heading, SubHeading, WhiteMiddleContainer, BulletListContainer } from './InsuranceSectionElements';

const InsuranceSection = () => {
    const mainMessage = `Unfortunately, TrailerHub does not currently offer insurance for Hosts or Renters through our platform. 
    We are working hard to make it happen, but until then we recommend all our Hosts to purchase a Trailer Rental Insurance 
    policy separately before offering their trailer for rent.`;

    const listMessage = `Here are some insurance companies that offer Trailer Rental 
    Insurance policies. Please shop around and properly vet the companies before purchasing a policy. 
    If you know of another insurance company that we do not have listed, please send us a message below, we'd love to expand this list!`;

    const listStyle = {
        listStyleType: 'disc',
        display: 'list-item'
    }

    return (
        <div id="insurance">
            <Container>
                <div>
                    <Heading>Insurance</Heading>
                    <SubHeading>{mainMessage}</SubHeading>
                </div>
            </Container>
            <WhiteMiddleContainer>
                <div>
                    <p> {listMessage}</p>
                    <BulletListContainer>
                    <dl >
                        <dt style={listStyle}><a href='https://mbainsurance.net/programs.php?type=UT'> MBA Insurance </a></dt>
                        <dd> MBA Insurance will work with companies and indiviudals, and will insure from a single trailer to a whole fleet.</dd>
                        <dt style={listStyle}><a href='https://www.allenins.com/commercial-products/coverage-for-specific-industries/daily-rental-insurance '> Allen Insurance Co </a></dt>
                        <dd> Allen Insurance likes working more with larger fleets of trailers.</dd>
                    </dl>
                    </BulletListContainer>

                </div>

                {/*  */}
            </WhiteMiddleContainer>

        </div>
    )
}

export default InsuranceSection;