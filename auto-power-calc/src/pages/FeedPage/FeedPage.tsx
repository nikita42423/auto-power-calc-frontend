import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getPublishedDevices } from '../../entities/device/model/mock'
import type { Device } from '../../entities/device/model/types'
import defaultVideo from '../../shared/assets/default.mp4'

export function FeedPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [device, setDevice] = useState<Device | null>(null)
  const [nextId, setNextId] = useState<number | null>(null)

  useEffect(() => {
    getPublishedDevices().then((published) => {
      const current = id === undefined ? published[0] : published.find((d) => d.id === Number(id))

      if (!current) {
        navigate('/grid')
        return
      }

      const index = published.indexOf(current)
      setDevice(current)
      setNextId(published[(index + 1) % published.length].id)
    })
  }, [id, navigate])

  if (!device) {
    return <div className="content-area" />
  }

  const videoSrc = device.video_url || defaultVideo

  return (
    <div className="content-area feed-area">
      <video key={videoSrc} className="video-layout" src={videoSrc} autoPlay loop muted playsInline />
      <div className="info-overlay">
        <div className="info-side">
          <p className="description-text">
            Мощность {device.power} Вт<br />
            Сопротивление {device.resistance} Ом
          </p>
          <div className="like-next">
            <span className="btn-like-next">
              👍<br />
              {device.likes.length}
            </span>
            <Link to={`/feed/${nextId}`} className="btn-like-next">
              ➜
            </Link>
          </div>
        </div>
        <div className="description-text">
          <p className="description-title">{device.name}</p>
          <p className="line-clamp-2">{device.description}</p>
          <p>Еще</p>
        </div>
      </div>
    </div>
  )
}
