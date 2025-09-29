import React from "react";
import ReactDOM from "react-dom/client";

const restoData = [{
    id: 1,
    image: "https://tse4.mm.bing.net/th/id/OIP.ePVv1JczrMcISWA_RPFLwwHaEK?pid=Api&P=0&h=220",
    resName: "KFC",
    cuisine: "Fast Food",
    rating: "4.5 Stars",
    time: "30 Mins"
}, {
    id: 2,
    image: "https://tse1.mm.bing.net/th/id/OIP.jUfCu2A6ilKJAdybISEMgwHaHa?pid=Api&P=0&h=220",
    resName: "Burger King",
    cuisine: "Fast Food, Burgers",
    rating: "4.2 Stars",
    time: "25 Mins"
},{
    id: 3,
    image: "https://tse2.mm.bing.net/th/id/OIP.2IZQt4sml5k_VBEvmAFTFgHaEP?pid=Api&P=0&h=220",
    resName: "McDonald's",
    cuisine: "Fast Food, Burgers",
    rating: "4.0 Stars",
    time: "35 Mins"
},
{
    id: 4,
    image: "https://tse4.mm.bing.net/th/id/OIP.0dLqQTAvu5_lSgnGG4WEQAHaEK?pid=Api&P=0&h=220",
    resName: "Subway",
    cuisine: "Fast Food, Sandwiches",
    rating: "4.1 Stars",
    time: "20 Mins"
},{
    id: 5,
    image: "https://tse1.mm.bing.net/th/id/OIP.cFk7icN483HJD3wFnXXyawHaEo?pid=Api&P=0&h=220",
    resName: "Pizza Hut",
    cuisine: "Fast Food, Pizza",
    rating: "4.3 Stars",
    time: "40 Mins"
},{
    id: 6,
    image: "https://tse3.mm.bing.net/th/id/OIP.-9symUwoMum4h5O0eUsKSwHaFL?pid=Api&P=0&h=220",
    resName: "Meghalaya",
    cuisine: "Indian, Chinese",
    rating: "4.6 Stars",
    time: "45 Mins"
},{
    id: 7,
    image: "https://tse2.mm.bing.net/th/id/OIP.fDWEOEHk6trKCevpKK8-LgHaEO?pid=Api&P=0&h=220",
    resName: "Biryani House",
    cuisine: "Biryani, North Indian",
    rating: "4.4 Stars",
    time: "50 Mins"
},{
    id: 8,
    image: "https://tse2.mm.bing.net/th/id/OIP.NOtbGnn4ISzTMh7aWqD5jAHaHa?pid=Api&P=0&h=220",
    resName: "Taco Bell",
    cuisine: "Mexican, Fast Food",
    rating: "4.2 Stars",
    time: "30 Mins"
},{
    id: 9,
    image: "https://tse2.mm.bing.net/th/id/OIP.zMFtlEEJqLUrX3QgDoG-qwHaE8?pid=Api&P=0&h=220",
    resName: "Cafe Coffee Day",
    cuisine: "Cafe, Beverages",
    rating: "4.0 Stars",
    time: "15 Mins"
}, {
    id: 10,
    image: "https://tse3.mm.bing.net/th/id/OIP.MY_YxA7U0dK2L6ELo2fEVgHaFi?pid=Api&P=0&h=220",
    resName: "Cake Zone",
    cuisine: "Desserts, Bakery",
    rating: "4.5 Stars",
    time: "20 Mins"
}]

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" alt="logo" src="https://tse4.mm.bing.net/th/id/OIP.8kuEBgMkksdxISAbhul21QHaFT?pid=Api&P=0&h=220" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = ({resData}) => {
    const {image, resName, cuisine, rating, time} = resData;
    console.log(resData, "resData");
    return (
        <div className="restaurant-card">
            <img className="restaurant-logo" alt="restaurant-logo" src={image} />
            <h2 className="restaurant-name">{resName}</h2>
            <p className="restaurant-cuisine">{cuisine}</p>
            <p className="restaurant-rating">{rating}</p>
            <p className="restaurant-time">{time}</p>
        </div>
    )

}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="resto-container">
                {
                    restoData.map((restaurant) => {
                        return <RestaurantCard key={restaurant.id} resData={restaurant}/>
                    })
                }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);