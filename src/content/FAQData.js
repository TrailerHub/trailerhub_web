import { Link as LinkR } from 'react-router-dom'

export const faqData = [
    {
        id: 1,
        title: 'How does the rental process work?',
        body: <p>For an in depth explanation of the hosting/renting process, visit the <LinkR to="/howitworks">how it works</LinkR> page of our website.</p>
    },
    {
        id: 2,
        title: 'What do I need to rent a trailer?',
        body: 'You will need a driver\'s license, credit card, a verified phone number, and a verified email address to rent a trailer.'
    },
    {
        id: 3,
        title: 'Can I cancel a rental?',
        body: <div><p>As a <strong>renter</strong>, you can cancel a booking up to 24 hours before the rental period begins without penalty. Once within the 24 hours you will be charged one days rent for the trailer. If the rental has already started you will be charged up to that moment plus one 24 hour period.</p><p>As a <strong>host</strong>, you can cancel a booking at any time before the rental period begins. Be careful when cancelling bookings close to their start date as it could affect your user rating.</p><p>For more information visit our <a href='/termsofservicedoc.html' target="_blank">Terms of Service</a>.</p></div>
    },
    {
        id: 4,
        title: 'How are payments processed?',
        body: 'TrailerHub uses Stripe across our application for processing credit card statements and paying our hosts.'
    },
    {
        id: 5,
        title: 'How do I finalize a rental?',
        body: 'To finalize a rental, select the rental record on the Home page, scroll down to the bottom, and select "Finalize". You will be prompted to rate and review your experience.'
    },
    {
        id: 6,
        title: 'How can I check and withdraw my earnings?',
        body: 'You can check and withdraw your earnings through your Stripe dashboard. You can access your dashboard through the Billing page, just tap the "Manage Bank Account on Stripe" button.'
    },
    {
        id: 7,
        title: 'How do I filter search results?',
        body: 'After you enter the search location and press "Search", you will be displayed all results in that location. Press the button located to the right of the search bar to filter the results based on length, trailer type, GVWR, etc.'
    },
    {
        id: 8,
        title: 'What if the renter doesn\'t return my trailer?',
        body: <p>If the renter does not return your trailer, and they are unresponsive to your attempts at communication, please go to the booking page and select the "Something Wrong?" button. In the message box explain what the problem is and any other relevant information that we should know. After submitting the dispute we recommend you call our support team, but if you don't then our support team will contact you using the phone number we have on file. If your trailer is stolen, you will likely need to file a stolen vehicle report with the police. We may, at your request, help you in communications with the relevant authorities. We have the renter’s information on file and we will do everything reasonably in our power to help return your trailer. Any users that steal trailers will be banned from future use of the app. TrailerHub may sue for damages, according to our <a href='/termsofservicedoc.html' target="_blank">Terms of Service</a>. Criminal charges may be filed against the offending party.</p>
    },
    {
        id: 9,
        title: 'What if the trailer I\'ve rented does not match the description?',
        body: 'If you have arrived to pick up the trailer and there is a material difference between the actual trailer and what was advertised, take photos of the trailer, and cancel the rental for a full refund. Please access your rental record from the app home page and select the "Something wrong?" button. From that page you can submit a "Dispute" where you can send us information about the problem you\'re experiencing. Please do not press the "Cancel" button at this time, since that will not refund you the whole payment amount. After you send the dispute message, please send our support team (Support@TrailerHub.io) an email with pictures that indicate what was wrong with the trailer. Feel free to call us to settle things faster, otherwise our support team will reach out to you via phone call shortly.'
    },
]