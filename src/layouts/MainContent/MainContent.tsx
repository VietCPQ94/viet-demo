import { sLog } from '@/app.store';
import './mainContent.scss';
import SideBar from './partials/SideBar';

export default function MainContent() {
    const isHaveLog = sLog.use(n => !!n.info);

    if (!isHaveLog) {
        return <></>
    }

    return (
        <div className='mainContent flex mt-4 gap-4'>
            <div className='mainContent_sidebar'>
                <h3>Information</h3>
                <SideBar />
            </div>
            <div className='flex-1'>
                <h3>Camera Feed</h3>
                <img className='mainContent_img-log' src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg" alt="Image" />
            </div>
        </div>
    )
}
