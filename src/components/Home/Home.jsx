
import Banner from '../Banner/Banner';
import Customer from '../Customer/Customer';
import Collection from '../Collection/Collection';
import Gallery from '../Gallery/Gallery';
import Shop from '../Shop/Shop';
import Sell from '../Sell/Sell';
import Favourite from '../Favourite/Favourite ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Shop></Shop>
            <Gallery></Gallery>
            <Collection></Collection>
            <Customer></Customer>
            <Sell></Sell>
            <Favourite></Favourite>
            
        </div>
    );
};

export default Home;