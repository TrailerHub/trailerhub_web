export const hostCalculationsExample1 = "Example 1: you own a 5'x12' utility trailer," +
    " and you rent it out for a <b>$25</b> per day rental rate. Your trailer is rented on average 10 days every month, so you will earn $225 per month " +
    " (that's your $25 per day rate multiplied by 10 days, minus the TrailerHub 10% service fee). ";

export const hostCalculationsExample2 = "Example 2: you own a 6'x16' enclosed cargo trailer that you rent out for $70 per day. That's $630 per month if it's rented 10 days per month, and $7,560 per year!";

export const hostCalculationsMessage1 = "As a Host, you can earn a side income by renting out your underused trailer to people in your community." +
    " Here are a couple of examples of how much you could earn: ";

export const hostCalculationsMessage2 = "When calculating your potential profits, remember to factor in your other costs like maintenance, taxes, and insurance. Typically, insurance will cost between $15-$50 per month " +
    "for the insurance premium. If you are in Texas, TrailerHub offers to reimburse you for your monthly insurance premium. If you choose the reimbursement option," +
    " TrailerHub will charge a 15% service fee for your rentals instead of the normal 10% service fee.";

export const hostCalculationsMessage3 = "For more information on insurance and insurance premium" +
    " reimbursement vist the \"Insurance\" page of the website or call us at +1 (888) 777-9423. Happy hosting!";



// export const hostCalculationsSec = {
//     id: 'calc',
//     lightBg: false,
//     lightText: true,
//     lightTextDesc: true,
//     topLine: "Earnings",
//     headline: "How Much You Could Earn",
//     description: 
//     buttonLabel: 'Learn the Process',
//     imgStart: false,
//     // img: "/images/verification_page.png",
//     // alt: 'TrailerHub Trailer Summary Page',
//     dark: true,
//     primary: true,
//     darkText: false,
//     linkButton: true,
//     buttonLinkTo: 'step1',
//     appLinks: false,
// }

export const hostSecOne = {
    id: 'step1',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Step 1",
    headline: "Verification",
    description: "The first step anyone has to take before renting or posting a trailer is a 3 part verification process. We'll verify your phone number, email address, and your drivers license in order to keep TrailerHub safe for all of our users.",
    buttonLabel: 'Next',
    imgStart: false,
    img: "/images/verification_page.png",
    alt: 'TrailerHub Trailer Summary Page',
    dark: true,
    primary: true,
    darkText: false,
    linkButton: true,
    buttonLinkTo: 'step2',
    appLinks: false,
}

export const hostSecTwo = {
    id: 'step2',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Step 2",
    headline: "Upload your trailer",
    description: <><p>In order to upload your trailer you'll need your VIN number, general trailer specs, a good pickup/drop off address, and photos of your trailer. This is where you'll decide on a daily rental price and availability for your trailer. </p><p>You can manage your trailer's price, availability, and photos through the "Your trailers" page later on.</p></>,
    buttonLabel: 'Next',
    imgStart: false,
    img: "/images/add_trailer_listing.png",
    alt: 'TrailerHub Trailer Summary Page',
    dark: true,
    primary: true,
    darkText: false,
    linkButton: true,
    buttonLinkTo: 'step3',
    appLinks: false,
}

export const hostSecThree = {
    id: 'step3',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Step 3",
    headline: "Secure your earnings",
    description: <><p>Before your trailer can go live on TrailerHub, we need a place to send your earnings. Head over to the settings page and select "Billing" to add your bank account information on <a href="https://stripe.com/" target="_blank" rel="noreferrer">Stripe</a>.</p><p>Stripe is one of the largest payment processing platforms and we use it across our platform in order to keep all your payment information safe and secure.</p></>,
    buttonLabel: 'Next',
    imgStart: false,
    img: "/images/your_trailers.png",
    alt: 'TrailerHub Trailer Summary Page',
    dark: true,
    primary: true,
    darkText: false,
    linkButton: true,
    buttonLinkTo: 'step4',
    appLinks: false,
}

export const hostSecFour = {
    id: 'step4',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Step 4",
    headline: "Your trailer is live!",
    description: <><p>Your trailer is now ready for booking and will show up for anyone searching for a trailer in your area. Upon booking, you will receive a notification in the app and through email. We’ll also initiate an in-app conversation between you and the renter, so you can answer any questions they may have about your trailer and stay in contact throughout the rental period. If there is any specific information regarding pick up or drop off of your trailer, this is the time to let the Renter know. </p><p>Payments are accepted upon booking and we hold the funds until both you and the Renter have finalized the booking.</p></>,
    buttonLabel: 'Next',
    imgStart: false,
    img: "/images/listing_page.png",
    alt: 'TrailerHub Trailer Summary Page',
    dark: true,
    primary: true,
    darkText: false,
    linkButton: true,
    buttonLinkTo: 'step5',
    appLinks: false,
}

export const hostSecFive = {
    id: 'step5',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Step 5",
    headline: "Finalize a booking",
    description: <p>At the end of the rental period, the Renter will drop off your trailer at the specified drop off location. If everything looks good with your trailer, finalize the booking by using the "Finalize" button at the bottom of the booking page, if not you can use the "Something wrong?" button (above the Finalize button) to enter a dispute.</p>,
    buttonLabel: 'Next',
    imgStart: false,
    img: "/images/booking_page_host.png",
    alt: 'TrailerHub Trailer Summary Page',
    dark: true,
    primary: true,
    darkText: false,
    linkButton: false,
    buttonLinkTo: 'step6',
    appLinks: false,
}

export const hostSecSix = {
    id: 'step6',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Step 6",
    headline: "Get paid",
    description: <p>To retrieve your earnings you'll need to access your Stripe dashboard through the "Billing" page. The Stripe dashboard allows you to withdraw your earnings directly into your bank account. Earnings will typically show up on your dashboard within a day after the booking has been finalized.  Transferring money from Stripe to your bank will usually take around 1-3 business days.</p>,
    buttonLabel: 'Additional Info',
    imgStart: false,
    img: "/images/stripe_payouts.png",
    alt: 'TrailerHub Trailer Summary Page',
    dark: true,
    primary: true,
    darkText: false,
    linkButton: false,
    buttonLinkTo: 'info',
    appLinks: false,
}

export const hostAdInfo = [
    {
        headline: 'Earnings',
        body: 'You earn 90% of the total price, TrailerHub earns 10%.',
        headline2: 'Safety',
        body2: 'Your trailer location and contact information will not be disclosed to anyone unless they are currently renting one of your trailers.'
    },
    {
        headline: 'Insurance',
        body: 'TrailerHub does not currently provide any trailer insurance, however we strongly suggest that you get a policy through a third party insurance company.',
        headline2: 'Cancellation',
        body2: <p>You, the Host, can cancel the rental anytime before the start date. Renters can cancel without penalty up to 24 hours before the start time. Once within the 24 hour window, they are charged a days rent. Please see the <a href='/termsofservicedoc.html' target="_blank">Terms of Service</a> for more information.</p>
    },
]