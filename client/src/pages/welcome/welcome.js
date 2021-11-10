import './welcome.scss'

import { useState } from 'react';

import { Link } from 'react-router-dom';

import React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticTimePicker from '@mui/lab/StaticTimePicker';
import './GlobalCssClock.css';

import Titel from '../../components/titel/titel'
import Button from '../../components/button/button'


const Login = (props) => {

    const [isToggled, setIsToggled] = useState(true);
    const toggle = () => setIsToggled(!isToggled);

    const [value, setValue] = useState(new Date());

    const { loginData } = props
    const photo = loginData.photos[0].value
    console.log(photo)

    const getWelcome = () => {

        return (
            <div className="content">
                <Titel />
                <div className="welcom-content">
                    <h2>Hi Uladzimir,<br />
                        welcome<br />
                        to Silent Moon
                    </h2>
                    <div className="but-but">
                        <Button onClick={toggle} name={'GET STARTED'} />
                    </div>
                </div>
            </div>
        )
    }

    const getReminders = () => {
        return (
            <div className="content">
                <Titel />
                <div className="reminders">
                    <div className="remindersText">
                        <h2>What time would you<br />
                            like to meditate?</h2>
                        <p>Any time you can choose but We<br />
                            recommend first thing in th morning.</p>
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
                            recommend first thing in th morning.</h2>
                        <p>Everyday is best, but we recommend<br />
                            picking at least five.</p>
                    </div>
                    <div className="but-but">
                        <Link to="/home">
                            <Button name={'SAVE'} />
                        </Link>
                    </div>
                </div>
            </div>
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