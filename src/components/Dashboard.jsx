import { useEffect } from 'react';
import { M } from '../lib';

import Home from './Home';
import Resident from './Resident';
import Request from './Request';
import Personnel from './Personnel';
import More from './More';
import Settings from './Settings';

export default function Dashboard() {
    useEffect(() => {
        MInit()
    }, []);

    const MInit = async () => {
        await M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'), {
            container: document.querySelector('#dropdown-container')
        })
        await M.Tabs.init(document.querySelectorAll('.tabs'));
    }

    return (
        <>
            <More />
            <Settings />

            <div className='row'>
                <div className='col-span-12 sticky z-50 top-0 right-0 bottom-0 left-0'>
                    <ul className='tabs flex justify-end'>
                        <li className='tab col-span-2'><a href='#home' className='active'>Home</a></li>
                        <li className='tab col-span-2'><a href='#request'>Request</a></li>
                        <li className='tab col-span-2'><a href='#resident'>Resident List</a></li>
                        <li className='tab col-span-2'><a href='#personnel'>Personnel</a></li>
                        <li className='tab col-span-2'><a data-target='more' id='d1' className='dropdown-trigger btn'>More</a></li>
                        <li className='tab col-span-2'><a data-target='settings' className='dropdown-trigger pt-2'><i className='material-icons'>settings</i></a></li>
                    </ul>
                </div>

                <div id="dropdown-container" className='w-1/2'></div>

                <div id='home' className='col-span-12 content-center center-align'>{<Home />}</div>
                <div id='request' className='col-span-12 '>{<Request />}</div>
                <div id='resident' className='col-span-12 pt-5 px-5 center-align'>{<Resident />}</div>
                <div id='personnel' className='col-span-12  pt-5 px-5'>{<Personnel />}</div>
            </div>
        </>
    );
}