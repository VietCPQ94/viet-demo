import { sLog } from '@/app.store';
import convertMilliseconds from '@/utils/convertMilliseconds';
import { Button } from 'primereact/button';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { memo, useCallback } from 'react';
import { Group, Quaternion } from 'three';
import { LS_SPEED } from '../constants/speedConfig';
import { sCam, sTimer, sVirtual } from '../mainContent.store';

const ssTime = sCam.slice(n => n.time);

function CameraPlayer() {
  const totalTime = sLog.use(n => n.info ? n.info.metadata.sessionInfo.duration : 0)
  const config = sCam.use()

  const handleChangeSpeed = useCallback((event: DropdownChangeEvent) => {
    sCam.set(n => n.value.speed = event.value)
  }, [])

  const handlePlay = () => {
    if (!sCam.value.isRuning) {
      sCam.set(n => {
        n.value.isRuning = true
        if (n.value.time >= totalTime) {
          n.value.time = 0;
        }
      })

      sTimer.set(n => n.value = setInterval(() => {
        sCam.set(n => {
          if (!n.value.isDrag) {
            n.value.time += 100 * n.value.speed;
          }

          if (sLog.value.info) {
            if (n.value.time >= sLog.value.info.metadata.sessionInfo.duration) {
              clearInterval(sTimer.value);
              n.value.isRuning = false;
            }
          }
        })
      }, 100));
    } else {
      clearInterval(sTimer.value);
      sCam.set(n => n.value.isRuning = false);
    }
  }

  ssTime.watch(time => {
    const { model, positions } = sVirtual.value;
    if (model instanceof Group && positions[time / 100]) {
      const pos = positions[time / 100].position;
      const rota = positions[time / 100].rotation;

      const quaternion = new Quaternion(rota.x, rota.y, rota.z, rota.w);
      model.quaternion.copy(quaternion);
      model.position.set(pos.x, pos.y, pos.z)
    }
  })

  return (
    <div className="flex gap-2 align-items-center mb-2">
      <Button outlined icon={config.isRuning ? "pi pi-pause" : "pi pi-play"} size="small" onClick={handlePlay} />
      <span className='w-6rem text-text-center'>{convertMilliseconds(config.time)}</span>
      <input
        className="flex-1"
        type="range"
        min="0"
        max={totalTime}
        step={100}
        value={config.time}
        onChange={(e) => sCam.set(n => n.value.time = Number(e.target.value))}
        onMouseDown={() => sCam.set(n => n.value.isDrag = true)}
        onMouseUp={() => sCam.set(n => n.value.isDrag = false)}
      />
      <span className='w-6rem text-text-center'>{convertMilliseconds(totalTime)}</span>
      <Dropdown value={config.speed} onChange={handleChangeSpeed} options={LS_SPEED} />
    </div >
  )
}

export default memo(CameraPlayer, () => true)