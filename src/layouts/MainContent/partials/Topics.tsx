import { sLog } from '@/app.store';
import { Topic } from '@/types/log.type';
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { sCam } from '../mainContent.store';

export default function Topics() {
    const topic = sCam.use(n => n.topic)
    const lsTopic = sLog.use<Topic[]>(n => n.info ? n.info.topics : []);
    const lsOption = lsTopic.map(n => ({
        label: n.topicName,
        value: n
    }));

    return (
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
                {n => <div className='mt-2 w-full overflow-auto h-30rem border-1 border-300 border-round text-sm border-box p-2 break-spaces'>
                    {
                        n.topic ?
                            JSON.stringify(n.topic.messages.find(e => e.timestamp >= n.time + (n.topic?.messages[0].timestamp ?? 0))?.data, null, 4)
                            :
                            ""
                    }
                </div>
                }
            </sCam.Wrap>
        </Card>
    )
}
