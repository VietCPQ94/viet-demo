import { sLog } from '@/app.store';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function SideBar() {
    const log = sLog.use(n => n.info)

    if (!log) {
        return <></>
    }

    const { sessionInfo, botInfo, botConfig } = log.metadata

    type TkeySessionInfo = keyof typeof sessionInfo
    type TkeyBotInfo = keyof typeof botInfo;
    type TkeyBotConfig = keyof typeof botConfig;

    return (
        <div className="card">
            <Accordion multiple activeIndex={0}>
                <AccordionTab
                    header={
                        <span className="flex align-items-center w-full gap-2">
                            <i className='pi pi-box text-2xl'></i>
                            <span className="font-bold white-space-nowrap">Session Information</span>
                        </span>
                    }
                >
                    <div className='flex flex-wrap'>
                        {
                            Object.keys(sessionInfo).map((k) => {
                                const obj = sessionInfo[k as TkeySessionInfo];
                                return <div key={k} className='w-6 p-2 border-box'>
                                    <h4>{k}</h4>
                                    <p className='text-xs word-break'>{typeof obj === "object" ? "[ Object ]" : obj ?? '-'}</p>
                                </div>
                            })
                        }
                    </div>
                </AccordionTab>
                <AccordionTab
                    header={
                        <span className="flex align-items-center gap-2 w-full">
                            <i className='pi pi-microchip-ai text-2xl'></i>
                            <span className="font-bold">{botInfo.botName}</span>
                        </span>
                    }
                >
                    <div className='flex flex-wrap'>
                        {
                            Object.keys(botInfo).map((k) => {
                                return <div key={k} className='w-6 p-2 border-box'>
                                    <h4>{k}</h4>
                                    <p className='text-xs word-break'>{botInfo[k as TkeyBotInfo] ?? '-'}</p>
                                </div>
                            })
                        }
                    </div>
                </AccordionTab>
                <AccordionTab
                    header={
                        <span className="flex align-items-center gap-2 w-full">
                            <i className='pi pi-cog text-2xl'></i>
                            <span className="font-bold">Bot Configuration</span>
                        </span>
                    }
                >
                    <div className='flex flex-column'>
                        {
                            Object.keys(botConfig).map((k) => {
                                return <div key={k} className='flex gap-2 align-items-center'>
                                    <p className='text-xs'>{k}</p>
                                    <span className='flex-1 border-bottom-1 border-300'></span>
                                    <p className='text-xs word-break'>{botConfig[k as TkeyBotConfig] + ""}</p>
                                </div>
                            })
                        }
                    </div>
                </AccordionTab>
            </Accordion>
        </div>
    )
}
