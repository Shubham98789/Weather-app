import React from 'react'
import './Weather.css';
import clearIcon from '../Images/clear.png'
import rainIcon from '../Images/rain.png'
import drizzleIcon from '../Images/drizzle.png'
import cloudIcon from '../Images/cloud.png'
import humidityIcon from '../Images/humidity.png'
import searchIcon from '../Images/search.png'
import snowIcon from '../Images/snow.png'
import windIcon from '../Images/wind.png'

const Weather = () => {
    let apiKey="fe56f6032013617f446747a7820eaa65";
    const Search = () => {
        const element=document.getElementsByClassName("searchBar");
        if(element[0].value===" "){
            return 0;
        }
    }

  return (
    <div className="container">
        <div className="navbar">
            <input type="text" className='searchBar' placeholder='Search Location' />
            <div className="search" onClick={() => {Search()}}>
                <img src={searchIcon} id='searchIcon' alt="..." />
            </div>
        </div>
        <div className="image">
            <img src={clearIcon} alt="" />
        </div>
        <div className="temperature">20 C</div>
        <div className="location">Delhi</div>
        <div className="container1">
            <div className="humidity">
                <img src={humidityIcon} alt="" />
                <div className="humidityData">
                    <div className="percent">50%</div>
                    <div className="text">Humidity</div>
                </div>                
            </div>
            <div className="wind">
                <img src={windIcon} alt="" />
                <div className="windData">
                    <div className="speed">50%</div>
                    <div className="text">Wind</div>
                </div>                
            </div>

        </div>
    </div>

  )
}

export default Weather