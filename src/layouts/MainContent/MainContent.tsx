import { sLog } from '@/app.store';
import './mainContent.scss';
import SideBar from './partials/SideBar';
import CameraFeed from './partials/CameraFeed';
import Topics from './partials/Topics';

export default function MainContent() {
    const isHaveLog = sLog.use(n => !!n.info);

    if (!isHaveLog) {
        return <></>
    }

    return (
        <div className='mainContent flex mt-4 gap-4 flex-wrap-reverse'>
            <div className='w-full xl:w-30rem '>
                <h3>Information</h3>
                <SideBar />
            </div>
            <div className='flex-1'>
                <h3>Camera Feed</h3>
                <CameraFeed />
                <Topics />
            </div>
        </div>
    )
}
