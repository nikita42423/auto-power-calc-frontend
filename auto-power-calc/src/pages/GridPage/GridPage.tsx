import { useEffect, useState } from 'react'
import { DeviceCard } from '../../entities/device/ui/DeviceCard'
import { getPublishedDevices } from '../../entities/device/model/mock'
import type { Device } from '../../entities/device/model/types'
import { POWER_LIMIT_MAX, POWER_LIMIT_MIN, PowerFilter } from '../../features/PowerFilter/PowerFilter'

export function GridPage() {
  const [powerMin, setPowerMin] = useState(POWER_LIMIT_MIN)
  const [powerMax, setPowerMax] = useState(POWER_LIMIT_MAX)
  const [devices, setDevices] = useState<Device[]>([])

  useEffect(() => {
    getPublishedDevices().then((data) => setDevices(data))
  }, [])

  const handleSearch = () => {
    getPublishedDevices().then((data) =>
      setDevices(data.filter((device) => device.power >= powerMin && device.power <= powerMax)),
    )
  }

  return (
    <div className="content-area">
      <h2>Каталог устройств</h2>
      <PowerFilter
        powerMin={powerMin}
        powerMax={powerMax}
        setPowerMin={setPowerMin}
        setPowerMax={setPowerMax}
        onSubmit={handleSearch}
      />
      <div className="cards">
        {devices.map((device) => (
          <DeviceCard key={device.id} device={device} />
        ))}
      </div>
    </div>
  )
}
