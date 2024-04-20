import { type Sucursales } from '../types/sucursal'
import { useMemo, useState } from 'react'

interface FilterPDV {
  filteredPDV: Sucursales
  searchPDV: string
  setSearchPDV: React.Dispatch<React.SetStateAction<string>>
  searchCate: string
  setSearchCate: React.Dispatch<React.SetStateAction<string>>
}

function filterByPDV (pdv: Sucursales, searchPDV: string): Sucursales {
  return pdv.filter(({ PDV_NOMBRE, PDV_SUCURSAL }) =>
    PDV_NOMBRE.toLowerCase().includes(searchPDV.toLowerCase()) ||
    PDV_SUCURSAL.toString().toLowerCase().includes(searchPDV.toLowerCase())
  )
}

function filterByCate (pdv: Sucursales, searchCate: string): Sucursales {
  return pdv.filter(({ PDV_CATE }) =>
    PDV_CATE.toLowerCase().includes(searchCate.toLowerCase())
  )
}

export function useFilter (pdv: Sucursales): FilterPDV {
  const [searchPDV, setSearchPDV] = useState('')
  const [searchCate, setSearchCate] = useState('')

  const filteredPDV = useMemo(() => {
    let filtered = filterByPDV(pdv, searchPDV)
    filtered = filterByCate(filtered, searchCate)
    return filtered
  }, [pdv, searchPDV, searchCate])

  return { searchPDV, setSearchPDV, filteredPDV, setSearchCate, searchCate }
}
