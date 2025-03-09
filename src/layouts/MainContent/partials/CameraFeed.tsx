import { sCam } from "../mainContent.store";
import CameraPlayer from "./CameraPlayer";
import VirtualPlace from "./VirtualPlace";


export default function CameraFeed() {
    const { lsImg, time } = sCam.use(n => ({
        lsImg: n.imgLogs ?? [],
        time: n.time
    }));

    let imageidx = lsImg.findIndex(e => e.timestamp >= time + (lsImg[0].timestamp));
    imageidx = imageidx < 0 ? lsImg.length - 1 : imageidx;

    return (
        <div>
            <CameraPlayer />
            {
                lsImg?.map((n, i) => <img key={i} className='mainContent_img-log' style={{ width: imageidx === i ? "100%" : 0 }} src={n.source} alt="Image" />)
            }
            <VirtualPlace />
        </div>
    )
}
