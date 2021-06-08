import React from 'react';
import LottieAnimation from '../Animaciones/Animaciones';
import noRoute from '../Animaciones/5451-search-file.json';
import { Link } from "react-router-dom"
import "./NoRoute.css"

export const NoRoute = () => {


    return (
        <div className="container">
            <LottieAnimation lotti={noRoute} height={400} width={300} />
            <h5 className="title">It seems that this page does not exist</h5>
            <Link to="/" className="backHome">Back to LebronStore´s Home</Link>
        </div>
    )

}