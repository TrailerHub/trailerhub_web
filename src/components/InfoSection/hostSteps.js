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
    img: "/images/trailer_rent_page.png",
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
    img: "/images/trailer_rent_page.png",
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
    img: "/images/trailer_rent_page.png",
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
    img: "/images/trailer_rent_page.png",
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
    img: "/images/trailer_rent_page.png",
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
    topLine: "Step 5",
    headline: "Get paid",
    description: <p>To retrieve your earnings you'll need to access your Stripe dashboard through the "Billing" page. The Stripe dashboard allows you to withdraw your earnings directly into your bank account. Earnings will typically show up on your dashboard within a day after the booking has been finalized.  Transferring money from Stripe to your bank will usually take around 1-3 business days.</p>,
    buttonLabel: 'Additional Info',
    imgStart: false,
    img: "/images/trailer_rent_page.png",
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
        body: 'You earn 90% of the total price, TrailerHub earns 10%.'
    },{
        headline: 'Safety',
        body: 'Your trailer location and contact information will not be disclosed to anyone unless they are currently renting one of your trailers.'
    },
    {
        headline: 'Insurance',
        body: 'TrailerHub does not currently provide any trailer insurance, however we strongly suggest that you get a policy through a third party insurance company.'
    },{
        headline: 'Cancellation',
        body: 'The Renter can cancel the booking without penalty 24 hours before the start time. If cancelled less than 24 hours, we have a rental cancellation policy (please see the Terms of Service for more information). You, the Host, can cancel the rental anytime before the start date. If you need to cancel after the Renter has picked up the trailer, please call our support at +1 (888)-777-9423 or email us at support@trailerhub.io'
    },
    {
        headline: 'Trailer Companies',
        body: 'YIf you have a lot of trailers you’d like to add to TrailerHub you don’t need to add them one by one, just contact our support team and we can help get you set up. All we’ll need is a spreadsheet with your trailers’ information and some pictures of each trailer.'
    }
]