import { MapearProductosZona, MetaChance, PorcentajeCumplimiento, ReduceMultired, ReduceServired, VentaChanceDia } from '../utils/funtions';
import { getMetasService, getMetasPdvService } from '../services/metas.services'
import { MetasProductMultired, MetasProductServired } from '../types/interfaces'
import { Metas } from '../model/metasproducts.model';
import { Request, Response } from 'express'

const initialObjectMultired = {
  ASTRO: 0,
  BETPLAY: 0,
  CHANCE: 0,
  CHANCE_MILLONARIO: 0,
  DOBLECHANCE: 0,
  GANE5: 0,
  GIROS: 0,
  LOTERIA_FISICA: 0,
  LOTERIA_VIRTUAL: 0,
  MT_ASTRO: 0,
  MT_BETPLAY: 0,
  MT_CHANCE: 0,
  MT_CHANCE_MILLONARIO: 0,
  MT_CHOLADITO: 0,
  MT_DOBLECHANCE: 0,
  MT_GANE5: 0,
  MT_GIROS: 0,
  MT_LOTERIA_FISICA: 0,
  MT_LOTERIA_VIRTUAL: 0,
  MT_PAGAMAS: 0,
  MT_PAGATODO: 0,
  MT_PATA_MILLONARIA: 0,
  MT_RECARGAS: 0,
  MT_RECAUDOS: 0,
  MT_SOAT: 0,
  PAGAMAS: 0,
  PAGATODO: 0,
  PATA_MILLONARIA: 0,
  META_PROMO1: 0,
  META_PROMO2: 0,
  PROMEDIO_DIARIO_ASTRO: 0,
  PROMEDIO_DIARIO_BETPLAY: 0,
  PROMEDIO_DIARIO_CHANCE: 0,
  PROMEDIO_DIARIO_CHMILL: 0,
  PROMEDIO_DIARIO_DOBLECHANCE: 0,
  PROMEDIO_DIARIO_GANE5: 0,
  PROMEDIO_DIARIO_GIROS: 0,
  PROMEDIO_DIARIO_LF: 0,
  PROMEDIO_DIARIO_LV: 0,
  PROMEDIO_DIARIO_PAGAMAS: 0,
  PROMEDIO_DIARIO_PAGATODO: 0,
  PROMEDIO_DIARIO_PATAMI: 0,
  PROMEDIO_DIARIO_RECARGAS: 0,
  PROMEDIO_DIARIO_RECAUDOS: 0,
  PROMEDIO_DIARIO_SOAT: 0,
  PROMO1: 0,
  PROMO2: 0,
  RECARGAS: 0,
  RECAUDOS: 0,
  SOAT: 0,
} as MetasProductMultired;

const initialObjectServired = {
  ASTRO: 0,
  BETPLAY: 0,
  CHANCE: 0,
  CHANCE_MILLONARIO: 0,
  CHOLADITO: 0,
  DOBLECHANCE: 0,
  GANE5: 0,
  GIROS: 0,
  LOTERIA_FISICA: 0,
  LOTERIA_VIRTUAL: 0,
  META_PROMO1: 0,
  META_PROMO2: 0,
  MT_ASTRO: 0,
  MT_BETPLAY: 0,
  MT_CHANCE: 0,
  MT_CHANCE_MILLONARIO: 0,
  MT_CHOLADITO: 0,
  MT_DOBLECHANCE: 0,
  MT_GANE5: 0,
  MT_GIROS: 0,
  MT_LOTERIA_FISICA: 0,
  MT_LOTERIA_VIRTUAL: 0,
  MT_PAGAMAS: 0,
  MT_PAGATODO: 0,
  MT_PATA_MILLONARIA: 0,
  MT_RECARGAS: 0,
  MT_RECAUDOS: 0,
  MT_SOAT: 0,
  PAGAMAS: 0,
  PAGATODO: 0,
  MT_PAGATODO_JAMUNDI: 0,
  PAGATODO_JAMUNDI: 0,
  PATA_MILLONARIA: 0,
  PROMEDIO_DIARIO_ASTRO: 0,
  PROMEDIO_DIARIO_BETPLAY: 0,
  PROMEDIO_DIARIO_CHANCE: 0,
  PROMEDIO_DIARIO_CHMILL: 0,
  PROMEDIO_DIARIO_CHOLADITO: 0,
  PROMEDIO_DIARIO_DOBLECHANCE: 0,
  PROMEDIO_DIARIO_GANE5: 0,
  PROMEDIO_DIARIO_GIROS: 0,
  PROMEDIO_DIARIO_LF: 0,
  PROMEDIO_DIARIO_LV: 0,
  PROMEDIO_DIARIO_PATAMI: 0,
  PROMEDIO_DIARIO_PGTJAMUNDI: 0,
  PROMEDIO_DIARIO_RECARGAS: 0,
  PROMEDIO_DIARIO_RECAUDOS: 0,
  PROMEDIO_DIARIO_SOAT: 0,
  PROMO1: 0,
  PROMO2: 0,
  RECARGAS: 0,
  RECAUDOS: 0,
  SOAT: 0,
} as MetasProductServired

// TODO ReduceMultired es una función que recibe un array de objetos y los suma por llave y retorna un solo objeto con la suma de todas las llaves
function useReduce(array: MetasProductMultired[] | MetasProductServired[], zona: number) {
  if (zona === 39627) {
    array = array as MetasProductMultired[];
    return array.reduce(ReduceMultired, initialObjectMultired);
  } else if (zona === 39628) {
    array = array as MetasProductServired[];
    return array.reduce(ReduceServired, initialObjectServired);
  }
  throw new Error('Zona no encontrada');
}

export const getMetasController = async (req: Request, res: Response) => {
  const data = req.params;
  const zona = parseInt(data.zona);

  try {
    const metas = await getMetasService(zona);
    const test = useReduce(metas, zona);
    const metaDia = MetaChance(test, zona);
    const ventaChance = VentaChanceDia(test, zona);
    const porcentaje = PorcentajeCumplimiento(test, zona);
    const products = MapearProductosZona(test, zona); 
    return res.json({ metaDia, ventaChance, porcentaje, products });
  } catch (error) {
    console.log(error);
    return res.status(500).send('Error en el servidor');
  }
};

export const getMetasPdv = async (req: Request, res: Response) => {
  const data = req.params
  const zona = parseInt(data.zona)

  try {
    const data = await getMetasPdvService(zona)

    return res.json(data)
  } catch (error) {
    console.log(error);
    return res.status(500).send('Error en el servidor')
  }
}

export const getMetasSucursal = async (req: Request, res: Response) => {
  const data = req.params
  const sucursal = parseInt(data.sucursal)
  try {
    const result = await Metas.findOne({ 
      where: { SUCURSAL: sucursal } 
    })

    if (!result) {
      return res.status(404).json({ message: 'No se encontraron metas para esta sucursal' })
    }

    return res.status(200).json(result)
  } catch (error) {
    console.log(error);
    return res.status(500).send('Error en el servidor')
  }
}