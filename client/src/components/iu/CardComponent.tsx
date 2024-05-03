import { Card, ProgressBar } from '@tremor/react'

interface Props {
  cumplimiento: string
  porcentaje: number
}

export function CardComponent ({ cumplimiento, porcentaje }: Props): JSX.Element {
  return (
    <Card decoration="top" decorationColor={porcentaje > 50 ? 'emerald' : 'rose'} >
      <p className="text-tremor-default text-center mt-1 text-tremor-content dark:text-dark-tremor-content">{cumplimiento}</p>
      <p className="text-3xl text-center mt-1 text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{porcentaje} %</p>
      <ProgressBar value={porcentaje} />
    </Card>

  )
}
