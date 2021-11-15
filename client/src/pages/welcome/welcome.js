import './welcome.scss';

import { useState } from 'react';

import { Link } from 'react-router-dom';

import React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticTimePicker from '@mui/lab/StaticTimePicker';
import './GlobalCssClock.css';

import Titel from '../../components/titel/titel';
import Button from '../../components/button/button';


const Login = (props) => {

    const [isToggled, setIsToggled] = useState(true);
    const toggle = () => setIsToggled(!isToggled);

    const [value, setValue] = useState(new Date());

    const { loginData } = props;

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
                                <li><span>SU</span></li>
                                <li><span>M</span></li>
                                <li><span>T</span></li>
                                <li><span>W</span></li>
                                <li><span>TH</span></li>
                                <li><span>F</span></li>
                                <li><span>S</span></li>
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