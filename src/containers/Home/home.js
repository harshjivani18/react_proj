'use client'

import { useNavigate } from 'react-router-dom';
// import Header from "../../components/Header/header";

const Home = () => {
    const router = useNavigate()
    console.log("router", router)
    return (
        <>
            {/* <Header /> */}

            <div>
                Hello Users
                <br />
                <button onClick={() => router("/signin")}>sign In</button>
            </div>
        </>
    )
}

export default Home;