import Navbar from '../components/Navbar';
import { useContext } from 'react';
import { listingDataContext } from '../context/ListingContext';
import Card from '../components/Card';

const Home = () => {
    const {listingData, setListingData,newListData} = useContext(listingDataContext)
    return (
        <div>
            <Navbar />
            <div className="w-full flex items-center justify-center gap-[25px] flex-wrap pt-[210px] md:pt-[150px] pb-0">
{newListData.map((list, index) =>(
    <Card key={index} id={list._id} title={list.title} description={list.description} landMark={list.landMark} city={list.city} image1={list.image1} image2={list.image2} image3={list.image3} rent={list.rent} ratings={list.ratings} isBooked={list.isBooked} host={list.host}/>
))}
            </div>
        </div>
    );
}

export default Home;

