import Navbar from "../navbar/navbar";
import Banner from "../Banner/banner";
import Products from "../Products/products";
const Home = () => {
return (
    <>
    <Navbar />
    <Banner />
    <div className='product-card-container'>
        <Products />
    </div>
    </>
);
};

export default Home;