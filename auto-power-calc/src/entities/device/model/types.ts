// Услуга = устройство автомобиля (поля как в collections.py лаб. 1)
export interface Device {
  id: number
  name: string
  power: number // мощность, Вт
  resistance: number // сопротивление, Ом
  description: string
  image_url: string // пустая строка -> изображение по умолчанию
  video_url: string // пустая строка -> видео по умолчанию
  real_url: string
  likes: string[]
  status: 'черновик' | 'опубликован' | 'удален'
}
