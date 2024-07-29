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
                    <ul className='tabs flex justify-end bg-transparent'>
                        <li className='tab col-span-2'><a href='#home' className='active'><span className="text-white">Home</span></a></li>
                        <li className='tab col-span-2'><a href='#request'><span className="text-white">Request</span></a></li>
                        <li className='tab col-span-2'><a href='#resident'><span className="text-white">Resident List</span></a></li>
                        <li className='tab col-span-2'><a href='#personnel'><span className="text-white">Personnel</span></a></li>
                        <li className='tab col-span-2'><a data-target='more' id='d1' className='dropdown-trigger btn'><span className="text-white">More</span></a></li>
                        <li className='tab col-span-2'><a data-target='settings' className='dropdown-trigger pt-2'><i className='material-icons text-white'>settings</i></a></li>
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