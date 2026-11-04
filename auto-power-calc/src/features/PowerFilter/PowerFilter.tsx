import type { FormEvent } from 'react'
import { Button, Form } from 'react-bootstrap'

export const POWER_LIMIT_MIN = 0
export const POWER_LIMIT_MAX = 2000

interface Props {
  powerMin: number
  powerMax: number
  setPowerMin: (value: number) => void
  setPowerMax: (value: number) => void
  onSubmit: () => void
}

export function PowerFilter({ powerMin, powerMax, setPowerMin, setPowerMax, onSubmit }: Props) {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    onSubmit()
  }

  return (
    <>
      <Form className="search" onSubmit={handleSubmit}>
        <div className="slider-block">
          <Form.Range
            className="range-slider"
            min={POWER_LIMIT_MIN}
            max={POWER_LIMIT_MAX}
            step={10}
            value={powerMin}
            onChange={(e) => setPowerMin(Math.min(Number(e.target.value), powerMax))}
          />
          <Form.Range
            className="range-slider"
            min={POWER_LIMIT_MIN}
            max={POWER_LIMIT_MAX}
            step={10}
            value={powerMax}
            onChange={(e) => setPowerMax(Math.max(Number(e.target.value), powerMin))}
          />
        </div>
        <Button type="submit" className="btn-accent">
          🔎 Найти
        </Button>
      </Form>
      <p>
        Мощность: от {powerMin} до {powerMax} Вт
      </p>
    </>
  )
}
