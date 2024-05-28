import {
  CalcularMetaDiaMultired, CalcularMetaDiaServired, CalcularVentaDiaMultired,
  CalcularVentaDiaServired, MapearProductosMultired, MapearProductosServired
} from '../utils/funciones'

import { type MetasServired, type MetasMultired } from '../types/metas'

import { type Empresa } from '../types/user'
import { useEffect, useState } from 'react'
import { CardMetas } from './iu/cardMetas'
import { CardDia } from './iu/cardDia'
import axios from 'axios'

const DahsBoard = ({ company }: { company: Empresa }): JSX.Element => {
  const [dataServired, setDataServired] = useState<MetasServired>()
  const [dataMultired, setDataMultired] = useState<MetasMultired>()

  // TODO: Esta forma de tipar la respuesta funciona sin embargo al implementar un hook personalizado se podria mejorar
  // TODO: por el momento quedara así para continuar con el renderizado de la información
  useEffect(() => {
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
  }, [company])

  // TODO: INTENTAR MANEJAR AMBAS EMPRESAS EN UN SOLO ESTADO ES COMPLICADO MEJOR PROBAR MEJOR IMPLEMENTACIÓN CON UN RENDERIZADO CONDICIONAL  */
  return (
    <section className='flex flex-col gap-4'>

      <article className='flex flex-col px-12 gap-2'>

        <article className='w-full'>
          <CardMetas nombre={`Cumplimiento ${company}`} porcentaje={80} venta={23040300} />
        </article>

        {
          company === 'Servired'
            ? (
              <article className='flex items-center w-full'>
                {dataServired !== undefined ? <CardDia nombre='Meta Del Día' venta={CalcularMetaDiaServired(dataServired)} /> : null}
                {dataServired !== undefined ? <CardDia nombre='Venta Actual Día' venta={CalcularVentaDiaServired(dataServired)} /> : null}
              </article>
              )
            : (
              <article className='flex items-center w-full'>
                {dataMultired !== undefined ? <CardDia nombre='Meta Del Día' venta={CalcularMetaDiaMultired(dataMultired)} /> : null}
                {dataMultired !== undefined ? <CardDia nombre='Venta Actual Día' venta={CalcularVentaDiaMultired(dataMultired)} /> : null}
              </article>
              )
        }
      </article>

      <article className=''>
        {
          company === 'Servired'
            ? (
              <section className='px-12 grid grid-cols-4 gap-2 pb-4 font-bold'>
                {dataServired !== undefined
                  ? MapearProductosServired(dataServired).map(item => <CardMetas key={item.id} nombre={item.nombre} porcentaje={item.porcentaje} venta={item.venta} />)
                  : null
                }
              </section>
              )
            : (
              <section className='px-12 grid grid-cols-4 gap-2 pb-4 font-bold'>
                {dataMultired !== undefined
                  ? MapearProductosMultired(dataMultired).map(item => <CardMetas key={item.id} nombre={item.nombre} porcentaje={item.porcentaje} venta={item.venta} />)
                  : null
                }
              </section>
              )

        }
      </article>

    </section>
  )
}

export default DahsBoard
