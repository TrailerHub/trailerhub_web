export const rentSecOne = {
    id: 'step1',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Step 1",
    headline: "Verification",
    description: <p>The first step anyone has to take before renting or posting a trailer is a 3 part verification process. We'll verify your phone number, email address, and your drivers license in order to keep TrailerHub safe for all of our users.</p>,
    buttonLabel: 'Next',
    imgStart: false,
    img: "/images/trailer_rent_page.png",
    alt: 'TrailerHub Trailer Summary Page',
    dark: true,
    primary: true, 
    darkText: false ,
    linkButton: true,
    buttonLinkTo: 'step2',
    appLinks: false,
}

export const rentSecTwo = {
    id: 'step2',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Step 2",
    headline: "Search",
    description: <><p>Use the search bar to search for trailers by entering a location and (optionally) booking dates. You can further refine your search results by tapping the filters button next to the search bar. You can browse the search results from the pop up list or by simply tapping the trailer icons on the map. Tap on a trailer to see more information.</p><p>Make sure that the trailer you choose is compatible with your vehicle's hitch coupling and electrical connections.</p></>,
    buttonLabel: 'Next',
    imgStart: false,
    img: "/images/trailer_rent_page.png",
    alt: 'TrailerHub Trailer Summary Page',
    dark: true,
    primary: true, 
    darkText: false ,
    linkButton: true,
    buttonLinkTo: 'step3',
    appLinks: false,
}

export const rentSecThree = {
    id: 'step3',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Step 3",
    headline: "Booking",
    description: <><p>Once you've found the right trailer, select the dates you need it for (if you haven't already), and tap "Rent Trailer". This will take you to the booking page, where you can double check if all the information is correct and see a total estimate of the booking price.</p><p>If everything looks good, you can move on to the billing page, where you can select which payment method you want to use, or add a new one. We use <a href="https://stripe.com/" target="_blank" rel="noreferrer">Stripe</a>, one of the largest payment processing platforms, to keep all your payment information safe and secure.</p><p>Once you've selected your payment method, you're ready to book the trailer! Tap the "Rent It!" button to book the trailer.</p></>,
    buttonLabel: 'Next',
    imgStart: false,
    img: "/images/trailer_rent_page.png",
    alt: 'TrailerHub Trailer Summary Page',
    dark: true,
    primary: true, 
    darkText: false ,
    linkButton: true,
    buttonLinkTo: 'step4',
    appLinks: false,
}

export const rentSecFour = {
    id: 'step4',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Step 4",
    headline: "Pick up",
    description: <><p>Instantly after you book a trailer, we'll initiate an in-app conversation between you and the trailer host so that you can get any additional information you may need throughout the rental period. You will now also have access to the complete pick up / drop off address for the trailer. Make sure to message or call the host through the in-app service to confirm the booking details.</p><p>When you arrive to pick up the trailer, take pictures of the trailer and any preexisting damage, and send the pictures to the host through the in-app messaging service. This is so that you are not held responsible for those damages when you return the trailer.</p></>,
    buttonLabel: 'Next',
    imgStart: false,
    img: "/images/trailer_rent_page.png",
    alt: 'TrailerHub Trailer Summary Page',
    dark: true,
    primary: true, 
    darkText: false ,
    linkButton: true,
    buttonLinkTo: 'step5',
    appLinks: false,
}

export const rentSecFive = {
    id: 'step5',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Step 5",
    headline: "Drop off",
    description: <><p>When you're finished using the trailer, return it to the agreed upon drop off location no later than the booking end time. You may be charged late fees if you return the trailer after the booking end time. After dropping off the trailer, go to the "Booking" page and press the "Finalize" button to complete the booking.</p><p>Thanks for using TrailerHub!</p></>,
    buttonLabel: 'Next',
    imgStart: false,
    img: "/images/trailer_rent_page.png",
    alt: 'TrailerHub Trailer Summary Page',
    dark: true,
    primary: true, 
    darkText: false ,
    linkButton: true,
    buttonLinkTo: 'info',
    appLinks: false,
}

export const renterAdInfo = [
    {
        headline: 'Cancellation',
        body: 'You can cancel the booking without penalty up to 24 hours before the start time. If you cancel within 24 hours of the booking start time, you will be charged one days rent price (see our terms of service for more information).'
    },
    {
        headline: 'Notice',
        body: 'Make sure to balance the load on the trailer to prevent fish-tailing and other problems that can arise from improper loading. If you are new to towing trailers please make sure to read up on the nuances of driving while towing a trailer. Your vehicle will behave differently while towing a trailer, and things like turn radius and start/stop time will be different.'
    }
]