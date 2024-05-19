import React from 'react';
import './styles/TrainBooking.css'; // Corrected import path
import { useNavigate } from 'react-router-dom';

const TrainBooking = () => {
    const navigate = useNavigate();

    const modifySearch = () => {
        navigate('/main');
    };

    const bookNow = () => {
        navigate('/booking');
    };

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light nav-yellow border-bottom border-top p-0">
                    <div className="container">
                        <a className="navbar-brand fs-4 fw-bold" href="#"><i className="fa fa-cart-shopping fs-4"></i><span className="text-white">Railways</span></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                                <li className="nav-item">
                                    <a className="nav-link fw-semibold text-white me-1" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-semibold text-white me-1" href="#">Trains</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="container-fluid bg-black p-4">
                <div className="row">
                    <div className="col-4 px-4">
                        <select className="form-select">
                            <option value="">Pune</option>
                        </select>
                    </div>
                    <div className="col-4 px-4">
                        <select className="form-select">
                            <option value="">Nagpur</option>
                        </select>
                    </div>
                    <div className="col-2 px-2">
                        <input type="text" className="form-control" value="12-12-2023" />
                    </div>
                    <div className="col-2 text-end">
                        <button type="button" className="btn btn-primary btn-sm" onClick={modifySearch}>Modify Search</button>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-2">
                <div className="row">
                    {[
                        { id: 1, train: "NGP HUMSAFAR EX (22141)", time: "22:00 | PUNE JN | Thu, 30 Nov", duration: "15:05 hrs", arrival: "13:05 | NAGPUR | Fri, 01 Dec" },
                        { id: 2, train: "HOWRAH DURONTO (12221)", time: "15:15 | PUNE JN | Thu, 30 Nov", duration: "12:55 hrs", arrival: "04:10 | NAGPUR | Fri, 01 Dec" },
                        { id: 3, train: "PUNE SRC HUMSAFAR (20821)", time: "10:40 | PUNE JN | Thu, 30 Nov", duration: "14:40 hrs", arrival: "01:20 | NAGPUR | Fri, 01 Dec" },
                        { id: 4, train: "AZAD HIND EXPRESS (12129)", time: "18:35 | PUNE JN | Thu, 30 Nov", duration: "15:15 hrs", arrival: "09:50 | NAGPUR | Fri, 01 Dec" },
                        { id: 5, train: "NGP GARIBRATH (12113)", time: "17:35 | PUNE JN | Thu, 30 Nov", duration: "15:35 hrs", arrival: "09:10 | NAGPUR | Fri, 01 Dec" },
                        { id: 6, train: "MAHARASHTRA EXPRESS (11039)", time: "22:25 | PUNE JN | Thu, 30 Nov", duration: "17:00 hrs", arrival: "15:25 | NAGPUR | Fri, 01 Dec" }
                    ].map(train => (
                        <div className="col-6 mt-2" key={train.id}>
                            <div className="card">
                                <div className="card-header bg-black text-white">
                                    {train.train}
                                </div>
                                <div className="card-body">
                                    <div className="row pb-2">
                                        <div className="col-5">
                                            {train.time}
                                        </div>
                                        <div className="col-2">
                                            {train.duration}
                                        </div>
                                        <div className="col-5 text-end">
                                            {train.arrival}
                                        </div>
                                    </div>
                                    <button className="btn btn-primary btn-sm" onClick={bookNow}>Book Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TrainBooking;
