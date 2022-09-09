import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from "./Card";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { geolocated, useGeolocated } from "react-geolocated";

const Api = () => {
    const [users, setUsers] = useState([]);
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });
    useEffect(() => {
        async function data() {
            const res = await axios.get('https://reqres.in/api/users?page=2');
            console.log(res.data.data);
            setUsers(res.data.data);
        }
        data();
    }, []);
    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        users.map((val,index)=>{
                            return <Card avatar={val.avatar} key={index} fname={val.first_name} lname={val.last_name} email={val.email} />;
                        })
                    }
                </div>
                 { !isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
        <table>
            <tbody>
                <tr>
                    <td>latitude</td>
                    <td>{coords.latitude}</td>
                </tr>
                <tr>
                    <td>longitude</td>
                    <td>{coords.longitude}</td>
                </tr>
                <tr>
                    <td>altitude</td>
                    <td>{coords.altitude}</td>
                </tr>
                <tr>
                    <td>heading</td>
                    <td>{coords.heading}</td>
                </tr>
                <tr>
                    <td>speed</td>
                    <td>{coords.speed}</td>
                </tr>
            </tbody>
        </table>
    ) : (
        <div>Getting the location data&hellip; </div>
    )}
            </div>
        </>
    );

}
export default Api;