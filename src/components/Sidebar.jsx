/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom"
import PathConstants from "../routes/pathConstants";
import logo from '../Assets/logo/logo.svg';
import grayDashboardIcon from '../Assets/gray-dashboard-icon.svg';
import blueDashboardIcon from '../Assets/blue-dashboard-icon.svg';
import grayAnalyticsIcon from '../Assets/gray-analytics-icon.svg';
import blueAnalyticsIcon from '../Assets/blue-analytics-icon.svg';
import grayCalendarIcon from '../Assets/gray-calendar-icon.svg';
import blueCalendarIcon from '../Assets/blue-calendar-icon.svg';
import grayQueriesIcon from '../Assets/gray-queries-icon.svg';
import blueQueriesIcon from '../Assets/blue-queries-icon.svg';
import grayRequestIcon from '../Assets/gray-request-icon.svg';
import blueRequestIcon from '../Assets/blue-request-icon.svg';
import grayTriagesIcon from '../Assets/gray-triages-icon.svg';
import blueTriagesIcon from '../Assets/blue-triages-icon.svg';
import profileImg from '../Assets/profile-pic.png';
import logoutIcon from '../Assets/logout-icon.svg';

export default function Sidebar({setLogin}) {
    const navigate = useNavigate();
    const [activeMenuId , setActiveMenuId] = useState()

    useEffect(() => {
        setActiveMenuId(window.location.pathname);
    },[window.location.pathname]);

    const routes = [
      {
        id: "/",
        to: PathConstants.DASHBOARD,
        route: "Dashboard",
        inactiveIcon: grayDashboardIcon,
        activeIcon: blueDashboardIcon,
      },
      {
        id: "/Analytics",
        to: PathConstants.ANALYTICS,
        route: "Analytics",
        inactiveIcon: grayAnalyticsIcon,
        activeIcon: blueAnalyticsIcon,
      },
      {
        id: "/Triages",
        to: PathConstants.TRIAGES,
        route: "Triages",
        inactiveIcon: grayTriagesIcon,
        activeIcon: blueTriagesIcon,
      },
      {
        id: "/Calendar",
        to: PathConstants.CALENDAR,
        route: "Calendar",
        inactiveIcon: grayCalendarIcon,
        activeIcon: blueCalendarIcon,
      },
      {
        id: "/AdminQueries",
        to: PathConstants.ADMINQUERIES,
        route: "Admin Queries",
        inactiveIcon: grayQueriesIcon,
        activeIcon: blueQueriesIcon,
      },
      {
        id: "/RequestSupport",
        to: PathConstants.REQUESTSUPPOT,
        route: "Request Support",
        inactiveIcon: grayRequestIcon,
        activeIcon: blueRequestIcon,
      },
    ];

    const handleMenuItemClick  = (id) => {
        setActiveMenuId(id);
    };

    const handleLogout = () => {
        setLogin(false);
        navigate('/Login')
    };

    return (
        <div className="bg-[#E5E5E5] flex flex-col gap-[370px] justify-between py-8">
            <div className="flex flex-col gap-6">
                <div className="flex justify-center items-center w-full">
                <img src={logo} alt="logo" className='w-[74px]'/>
                </div>
                <div className="flex flex-col gap-2 pr-8">
                    {routes.map(route => (
                    <Link to={route.to}><div className="flex gap-4 items-center cursor-pointer" onClick={() => handleMenuItemClick(route.id)}>
                        <img src={activeMenuId === route.id ? route.activeIcon : route.inactiveIcon } alt="_icon" className={`${activeMenuId === route.id ? "bg-[#d6dbdf]" : ""} py-4 pl-8 pr-1 rounded-r-md`}/>
                        <p className={` ${activeMenuId === route.id ? "text-[#0E72B7]" : "text-[#767D88]"} text-base font-medium leading-normal font-dm-sans`}>{route.route}</p>
                    </div>
                    </Link>
                    ))}
                </div>
            </div>
            <div className='flex px-4 items-center gap-5'>
                <div className='flex gap-2 items-center'>
                    <div className='rounded-[12px] w-[45px] h-[45px] bg-white'>
                        <img src={profileImg} alt="_dp"/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[#06152B] text-xs leading-normal font-dm-sans font-medium'>Dr. John Smith</p>
                        <p className='text-[#767d88] text-[10px] leading-normal font-dm-sans'>GP Partner</p>
                    </div>
                </div>
                <img onClick={handleLogout} src={logoutIcon} alt="_logout" className='cursor-pointer'/>
            </div>
        </div>
    )
}