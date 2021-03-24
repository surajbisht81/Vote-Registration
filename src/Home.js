import React from 'react'
import "./Home.css";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";

function Home() {
    return (
        <div className="home">
            <Header />

            <div className="language__select">
                <div className="button__part">
                    <button>A+</button>
                    <button>A-</button>
                </div>
                <div className="language__part">
                    <h4>Select Language: </h4>
                    <select>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                    </select>
                </div>
            </div>

            <h1>Note: Fields marked with asterisks ( * ) are mandatory</h1>

            <Card />
            <Footer />
        </div>
    )
}

export default Home
