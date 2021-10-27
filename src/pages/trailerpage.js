import { Redirect, useLocation } from 'react-router-dom'
import ImageSlider from '../components/ImageSlider';
import Contact from '../components/Contact'
import TrailerContent from '../components/TrailerContent';
import { toast } from 'react-toastify';
import api from '../service/api';
import { useQuery } from 'react-query'
import Loading from '../components/Loading';

const TrailerPage = () => {
    const loc = useLocation();
    let params = new URLSearchParams(loc.search);
    const trailerId = params.get('id');

    const showToast = (msg) => {
        toast(msg, {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const { isLoading, error, data } = useQuery('repoData', () =>
        api.post('/webFetchTrailerInfo', {
            trailerId: trailerId
        }).then(res =>
            res.data
        ), { retry: 2 }
    );

    const rentButtonTapped = () => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return data['trailerDoc'];
        } else {
            return 'https://apps.apple.com/us/app/trailerhub-rent-trailers/id1551725129';
        }
    }

    if (isLoading) return <Loading />

    if (error) showToast(error.message);

    if (trailerId === undefined || error || data == null) {
        <Redirect to="/404" />
    }

    return (
        <div>
            {data !== undefined && <>{data['trailerImages'] !== undefined &&
                <ImageSlider slides={data['trailerImages'] ?? []} />}
                <TrailerContent
                    topLine={`${data['trailerDoc']['modelYear']} ${data['trailerDoc']['manufacturer']} ${data['trailerDoc']['model']} | ${data['trailerDoc']['width']}' x ${data['trailerDoc']['length']}'`}
                    headline={`${data['trailerDoc']['trailerBodyType']}`}
                    description={`${data['trailerDoc']['description']}`}
                    buttonLinkTo={rentButtonTapped()}
                    buttonLabel="Rent on TrailerHub"
                    dailyRate={`$${data['trailerDoc']['dailyRate']}`}
                    location={`${data['trailerDoc']['city']}, ${data['trailerDoc']['state']}`}
                    rating={`${data['trailerDoc']['rating']}`}
                />
                <Contact /></>}
        </div>
    )
}

export default TrailerPage

let res2 = {
    "trailerDoc": {
        "ownerDateJoined": "2021-06-22T00:45:32.514034Z",
        "gvwr": "3000",
        "exclusiveRentersList": null,
        "numberOfRatings": 0,
        "ownerRating": "0",
        "thumbnailId": "ecf60c5a-1f57-489a-9050-6654b4e38f28",
        "height": "11.7",
        "zip": "78163",
        "awaitingVerification": false,
        "ownerUid": "poUI87eKcuQwkFtUpbzuO2FNTdP2",
        "imageIds": [
            "ecf60c5a-1f57-489a-9050-6654b4e38f28",
            "62b713e7-5622-4420-b4b6-6892a87c4aee",
            "f4470ce9-b13b-480a-832a-6398b885e0c5",
            "73ee4acc-597f-45f6-94b9-8d0a0d5b5872",
            "9a16ded9-78ec-4ae7-a21d-6ac53714ea4e"
        ],
        "unavailableDateTimes": [],
        "trailerBodyType": "Boat Trailer",
        "deactivated": false,
        "city": "Bulverde",
        "latitude": 29.75022305115151,
        "maximumRentalLengthDays": 14,
        "model": "300",
        "dateAdded": "2021-08-25T03:33:44.041263Z",
        "dailyRate": "25",
        "modelYear": "2015",
        "axles": "4",
        "hitchSize": "1-7/8",
        "reviewDocIds": [],
        "description": "Description",
        "rating": "N/A",
        "length": "7.3",
        "trailerType": "Gooseneck",
        "connectorType": "4-Way Flat",
        "ownerName": "Jacob Martin",
        "longitude": -98.39790367674024,
        "manufacturer": "Good Times",
        "blockedRentersList": null,
        "daysAvailable": [true, true, true, true, true, true, true],
        "width": "9.5",
        "pickupDropoffAvailableTimes": ["7:00 AM*6:00 PM", "7:00 AM*6:00 PM", "7:00 AM*6:00 PM", "7:00 AM*6:00 PM", "7:00 AM*6:00 PM", "7:00 AM*6:00 PM", "7:00 AM*6:00 PM"],
        "documentId": "0fee5eb5-b547-4666-a35c-7d9efb84fd1c",
        "state": "Texas"
    },
    "trailerLink": "https://devlink.trailerhub.io/dev/kbVSQes9DwPAYyoZ6"
};