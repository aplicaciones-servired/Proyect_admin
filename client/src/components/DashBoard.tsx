import {
  porcentajeCumplimientoServired, CalcularMetaDiaMultired, CalcularMetaDiaServired, CalcularVentaProductosChanceMultired,
  CalcularVentaProductosChanceServired, MapearProductosMultired, MapearProductosServired, porcentajeCumplimientoMultired
} from '../utils/funciones'

import { type MetasServired, type MetasMultired } from '../types/metas'

import { CardComponent } from './iu/CardComponent'
import { type Empresa } from '../types/user'
import { useEffect, useState } from 'react'
import { CardMetas } from './iu/cardMetas'
import { CardDia } from './iu/cardDia'
import axios from 'axios'

const DahsBoard = ({ company }: { company: Empresa }): JSX.Element => {
  const [dataServired, setDataServired] = useState<MetasServired>()
  const [dataMultired, setDataMultired] = useState<MetasMultired>()

  useEffect(() => {
    const fetchData = (): void => {
      void axios.get(`http://localhost:3000/api/metas/${company === 'Servired' ? '39628' : '39627'}`)
        .then(response => {
          const data = response.data
          if (company === 'Servired') {
            setDataServired(data as MetasServired)
          } else if (company === 'Multired') {
            setDataMultired(data as MetasMultired)
          } else {
            console.log('Company not found')
          }
        })
        .catch(error => {
          console.log(error)
        })
    }

    fetchData()

    const intervalId = setInterval(fetchData, 5 * 60 * 1000)

    return () => { clearInterval(intervalId) }
  }, [company])

  return (
    <section className='flex flex-col gap-4'>

      <section className='flex gap-2 px-12'>

        <article className='w-6/12 h-full'>
          {
            company === 'Servired'
              ? <>
                {dataServired !== undefined ? <CardDia nombre='Meta Del Día Chance' venta={CalcularMetaDiaServired(dataServired)} /> : null}
                {dataServired !== undefined ? <CardDia nombre='Venta Actual Día Chance' venta={CalcularVentaProductosChanceServired(dataServired)} /> : null}
                </>
              : <>
                {dataMultired !== undefined ? <CardDia nombre='Meta Del Día Chance' venta={CalcularMetaDiaMultired(dataMultired)} /> : null}
                {dataMultired !== undefined ? <CardDia nombre='Venta Actual Día Chance' venta={CalcularVentaProductosChanceMultired(dataMultired)} /> : null}
                </>
          }
        </article>

        <article className='flex w-6/12 max-h-max'>
          {
            company === 'Servired'
              ? (dataServired !== undefined ? <CardComponent cumplimiento={company} porcentaje={porcentajeCumplimientoServired(dataServired)} /> : null)
              : (dataMultired !== undefined ? <CardComponent cumplimiento={company} porcentaje={porcentajeCumplimientoMultired(dataMultired)} /> : null)
          }
        </article>

      </section>

      <section className='grid grid-cols-3 gap-2 px-12'>
        {
          company === 'Servired'
            ? <>
              {
                dataServired !== undefined
                  ? MapearProductosServired(dataServired).map(item => <CardMetas key={item.id} nombre={item.nombre} porcentaje={item.porcentaje} venta={item.venta} />)
                  : null
              }
              </>
            : <>
              {dataMultired !== undefined
                ? MapearProductosMultired(dataMultired).map(item => <CardMetas key={item.id} nombre={item.nombre} porcentaje={item.porcentaje} venta={item.venta} />)
                : null
              }
              </>
        }
      </section>

    </section>
  )
}

export default DahsBoard
