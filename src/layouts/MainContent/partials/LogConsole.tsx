
import { Data16 } from '@/types/log.type';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { sCam } from '../mainContent.store';
import convertMilliseconds from '../usecases/convertMilliseconds';

export default function LogConsole() {
    const [search, setSearch] = useState('');

    return (
        <Card className='flex-1 '>
            <p className='mt-0'>Log Console</p>
            <div className="p-inputgroup flex-1">
                <InputText placeholder="Keyword" onChange={e => setSearch(e.target.value)} value={search} />
                <Button icon="pi pi-search" className="p-button-warning" />
            </div>
            <sCam.Wrap>
                {n => (
                    <div className='mt-2 w-full overflow-auto h-30rem border-1 border-300 border-round text-sm border-box p-2'>
                        {
                            n.topicLogs &&
                            n.topicLogs.messages.filter(e =>
                                (e.data as Data16).msg.toLowerCase().includes(search.toLowerCase()) &&
                                e.timestamp <= n.time + (n.topicLogs?.messages[0].timestamp ?? 0)
                            ).map((e, i) => (
                                <div className='flex gap-2' key={i}>
                                    <span className='text-xs text-500'>
                                        [{convertMilliseconds(e.timestamp - (n.topicLogs?.messages[0].timestamp ?? 0))}]
                                    </span>
                                    <div className='flex-1 flex flex-column'>
                                        {(e.data as Data16).msg.split('\n').map((n, i2) => <p className='mt-0' key={`child${i}-${i2}`}>{n}</p>)}
                                    </div>
                                </div>)
                            )
                        }
                    </div>
                )}
            </sCam.Wrap>
        </Card>
    )
}
