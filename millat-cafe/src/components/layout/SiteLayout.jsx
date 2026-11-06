import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingCTA } from './FloatingCTA';
import { ScrollToTop } from './ScrollToTop';

export function SiteLayout() { return <><ScrollToTop/><Navbar/><main id="main-content"><Outlet/></main><Footer/><FloatingCTA/></>; }
