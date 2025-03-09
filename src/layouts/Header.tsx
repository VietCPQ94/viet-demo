import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { useEffect, useState } from 'react';
import { sLog, sMain } from '../app.store';
import ionReaderDialog from '../utils/ionReaderDialog';
import { sCam } from './MainContent/mainContent.store';
import decodeImage from './MainContent/usecases/decodeImage';
import { Data2 } from '@/types/log.type';

export default function Header() {
  const [isProcessing, setIsProcessing] = useState(false);
  const handleGetFile = () => {
    setIsProcessing(true);

    ionReaderDialog((obj) => {
      sLog.set(n => n.value.info = obj);
      sCam.set(n => {
        n.value.topicLogs = obj.topics.find(n => n.topicName === "/rosout_agg");
        n.value.imgLogs = obj.topics.find(n => n.topicName === "/usb_cam/image_raw/compressed_throttle")?.messages.map(n => ({
          timestamp: n.timestamp,
          source: decodeImage((n.data as Data2).data)
        }));
      })
      setIsProcessing(false)
    }, () => setIsProcessing(false))
  }

  useEffect(() => {
    sMain.set(n => n.value.loaderStatus = "CLOSE");
  }, [])

  return <>
    <Toolbar
      className='p-3'
      start={
        <>
          <img src='logo.webp' className='h-2rem pr-2' />
          <h1 className='m-0'>OhmniLabs</h1>
        </>
      }
      end={<Button label='Upload' onClick={handleGetFile} icon="pi pi-check" loading={isProcessing} />}
    />
  </>;
}
