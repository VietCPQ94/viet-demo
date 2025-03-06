import { sLog } from '@/app.store';
import { Topic } from '@/types/log.typs';
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from "primereact/inputtextarea";
import { sCam } from '../mainContent.store';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function Topics() {
    const topic = sCam.use(n => n.topic)
    const lsTopic = sLog.use<Topic[]>(n => n.info ? n.info.topics : []);
    const lsOption = lsTopic.map(n => ({
        label: n.topicName,
        value: n
    }));

    return (
        <div className='flex mt-2 gap-5'>
            <Card className='flex-1'>
                <p className='mt-0'>Select Topic</p>
                <Dropdown
                    value={topic}
                    onChange={(e) => sCam.set(n => n.value.topic = e.value)}
                    options={lsOption}
                    className="w-full"
                    placeholder='Choose topic...'
                />
                <sCam.Wrap>
                    {n => <InputTextarea
                        className='mt-2 w-full'
                        autoResize
                        value={
                            n.topic ?
                                JSON.stringify(n.topic.messages.find(e => e.timestamp >= n.timestamp)?.data, null, 2)
                                :
                                ""
                        }
                        disabled
                        rows={20}
                    />}
                </sCam.Wrap>
            </Card>
            <Card className='flex-1 '>
                <p className='mt-0'>Log Console</p>
                <div className="p-inputgroup flex-1">
                    <InputText placeholder="Keyword" />
                    <Button icon="pi pi-search" className="p-button-warning" />
                </div>
                <InputTextarea className='mt-2 w-full' autoResize value={""} disabled rows={20} />
            </Card>
        </div>
    )
}
