import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { useEffect, useState } from 'react';
import { sLog, sMain } from '../app.store';
import ionReaderDialog from '../utils/ionReaderDialog';

export default function Header() {
  const [isProcessing, setIsProcessing] = useState(false);
  const handleGetFile = () => {
    setIsProcessing(true);

    ionReaderDialog((obj) => {
      sLog.set(n => n.value.info = obj);
      setIsProcessing(false)
    }, () => setIsProcessing(false))
  }

  useEffect(() => {
    sMain.set(n => n.value.loaderStatus = "CLOSE");
  }, [])

  return <>
    <Toolbar
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
