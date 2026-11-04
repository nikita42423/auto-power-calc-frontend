import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import type { Device } from '../model/types'
import defaultImage from '../../../shared/assets/default.png'

interface Props {
  device: Device
}

export function DeviceCard({ device }: Props) {
  return (
    <Link to={`/feed/${device.id}`}>
      <Card className="device-card">
        <div className="card-head">
          <Card.Img src={device.image_url || defaultImage} alt={device.name} className="card-image" />
        </div>
        <Card.Body className="device-card-body">
          <Card.Title className="description-title">
            {device.power} Вт | {device.resistance} Ом
          </Card.Title>
          <Card.Text>{device.name}</Card.Text>
          <Card.Text className="mt-auto">👍 {device.likes.length}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}
