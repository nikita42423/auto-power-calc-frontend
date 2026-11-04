export interface Device {
  id: number
  name: string
  power: number
  resistance: number
  description: string
  image_url: string
  video_url: string
  real_url: string
  likes: string[]
  status: 'черновик' | 'опубликован' | 'удален'
}
