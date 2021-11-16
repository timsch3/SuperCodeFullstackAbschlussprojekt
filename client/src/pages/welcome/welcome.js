import './welcome.scss';

import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

import React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticTimePicker from '@mui/lab/StaticTimePicker';
import './GlobalCssClock.css';

import Titel from '../../components/titel/titel';
import Button from '../../components/button/button';


const Login = (props) => {

    const [user, setUser] = useState({})
    const [error, setError] = useState(null)
    const [authenticated, setAuthenticated] = useState(false)

    const [isToggled, setIsToggled] = useState(true);
    const [value, setValue] = useState(new Date());
    const toggle = () => setIsToggled(!isToggled);

    const days = ['SU', 'M', 'T', 'W', 'TH', 'F', 'S'];
    const getWeekDay = (date) => {
        return days[date.getDay()];
    }

    // useEffect(() => {
    //     fetch("http://localhost:3000/auth/login/success", {
    //         method: "GET",
    //         credentials: "include",
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json",
    //             "Access-Control-Allow-Credentials": true
    //         }
    //     })
    //         .then(response => {
    //             if (response.status === 200) return response.json();
    //             throw new Error("failed to authenticate user");
    //         })
    //         .then(responseJson => {
    //             setAuthenticated(true)
    //             setUser(responseJson.user)
    //         })
    //         .catch(error => {
    //             setAuthenticated(false)
    //             setError("Failed to authenticate user")
    //         });
    // }, [])

    const getWelcome = () => {
        return (
            <>
                <Titel />
                <div className="content-wel">
                    <h2>Hi Uladzimir,<br />
                        welcome<br />
                        to Silent Moon
                    </h2>
                    <div className="but-wel ">
                        <div className="but-but">
                            <Button onClick={toggle} name={'GET STARTED'} />
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const getReminders = () => {
        return (
            <>
                <Titel />
                <div className="reminders">
                    <div className="remindersCont">
                        <div className="remindersText">
                            <h2>What time would you<br />
                                like to meditate?</h2>
                            <p>Any time you can choose but We<br />
                                recommend first thing in the morning.</p>
                        </div>
                        <div className="timePicker">
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <StaticTimePicker
                                    displayStaticWrapperAs="mobile"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </div>
                        <div className="remindersText">
                            <h2>Any time you can choose but We<br />
                                recommend first thing in the morning.</h2>
                            <p>Everyday is best, but we recommend
                                picking at least five.</p>
                        </div>
                        <div className="daysList">
                            <ul>
                                {days.map((elt, i) => (
                                    <li className={getWeekDay(value) === elt ? 'today' : null} key={i}><span>{elt}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="but-rem">
                        <div className="but-but">
                            <Link to="/home">
                                <Button name={'SAVE'} />
                            </Link>
                            <Link to="/home">
                                <Button buttonStyle={{ background: 'none', color: '#E28F83' }} name={'NO THANKS'} />
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            {isToggled ?
                getWelcome()
                :
                getReminders()
            }
        </>
    );
}

export default Login;