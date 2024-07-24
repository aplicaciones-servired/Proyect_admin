import { CardMetas, CardMetaDia } from './iu'

import { type Dashboard } from '../types/metas'
import { type Empresa } from '../types/user'

import { useEffect, useState } from 'react'
import axios from 'axios'

import { DonutChartComp } from './iu/DonutChart'
import { Card, Title } from '@tremor/react'
import { CardVentaDia } from './iu/CardVentaDia'

const DahsBoard = ({ company }: { company: Empresa }): JSX.Element => {
  const [data, setData] = useState<Dashboard>({ metaDia: 0, porcentaje: 0, products: [], ventaChance: 0 })

  useEffect(() => {
    const fetchData = (): void => {
      void axios.get(`http://localhost:3000/api/metas/${company === 'Servired' ? '39628' : '39627'}`)
        .then(response => {
          setData(response.data as Dashboard)
        })
        .catch(error => {
          console.log(error)
        })
    }

    fetchData() // Fetch data immediately

    const intervalId = setInterval(fetchData, 5 * 60 * 1000) // Fetch data every 5 minutes

    return () => { clearInterval(intervalId) } // TODO: limpia el intervalo para evitar fugas de memoria y errores cuando el componente se desmonta
  }, [company])

  return (
    <>

      <article className='lg:flex gap-2 mx-1'>
        <Card className='lg:w-6/12 2xl:w-7/12 flex flex-col items-center' >
          <Title className='text-center'>Productos Chance {company}</Title>
          <DonutChartComp items={data.products} />
        </Card>

        <Card className='lg:w-6/12 2xl:w-5/12 flex flex-col gap-2'>
          <Title className='text-center'>Cumplimiento {company} </Title>
          <CardMetaDia titulo='Meta Productos Chance' venta={data?.metaDia} porcentaje={data.porcentaje} />
          <CardVentaDia nombre='Venta Actual Chance' venta={data.ventaChance} />
        </Card>
      </article>

      <Title className='text-center py-2 border mx-1 my-1 rounded-md'>Resumen Cumplimiento Productos y/o Servicios {company}</Title>
      <section className='grid lg:grid-cols-3 2xl:grid-cols-4 gap-2 px-2'>
        {
          data.products.map(item => (
            <CardMetas key={item.id} nombre={item.nombre} venta={item.venta} porcentaje={item.porcentaje} />
          ))
        }
      </section>

    </>
  )
}

export default DahsBoard
