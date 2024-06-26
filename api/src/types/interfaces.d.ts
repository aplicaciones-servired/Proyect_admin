import { Optional } from "sequelize"

export interface MetasAttributes {
  FECHA: Date,
  GANE5: number,
  ASTRO: number,
  CHANCE: number,
  BETPLAY: number,
  PAGAMAS: number,
  PAGATODO: number,
  CHOLADITO: number,
  DOBLECHANCE: number,
  PATA_MILLONARIA: number,
  PAGATODO_JAMUNDI: number,
  CHANCE_MILLONARIO: number,
  LOTERIA_FISICA: number,
  LOTERIA_VIRTUAL: number,
  SOAT: number,
  GIROS: number,
  RECAUDOS: number,
  RECARGAS: number,
  ZONA: number,
  CCOSTO: number,
  SUCURSAL: number,
  MT_CHANCE: number,
  PROMEDIO_DIARIO_CHANCE: number,
  MT_PAGAMAS: number,
  PROMEDIO_DIARIO_PAGAMAS: number,
  MT_PAGATODO: number,
  PROMEDIO_DIARIO_PAGATODO: number,
  MT_GANE5: number,
  PROMEDIO_DIARIO_GANE5: number,
  MT_PAGATODO_JAMUNDI: number,
  PROMEDIO_DIARIO_PGTJAMUNDI: number,
  MT_CHOLADITO: number,
  PROMEDIO_DIARIO_CHOLADITO: number,
  MT_PATA_MILLONARIA: number,
  PROMEDIO_DIARIO_PATAMI: number,
  MT_DOBLECHANCE: number,
  PROMEDIO_DIARIO_DOBLECHANCE: number,
  MT_CHANCE_MILLONARIO: number,
  PROMEDIO_DIARIO_CHMILL: number,
  MT_ASTRO: number,
  PROMEDIO_DIARIO_ASTRO: number,
  MT_LOTERIA_FISICA: number,
  PROMEDIO_DIARIO_LF: number,
  MT_LOTERIA_VIRTUAL: number,
  PROMEDIO_DIARIO_LV: number,
  MT_BETPLAY: number,
  PROMEDIO_DIARIO_BETPLAY: number,
  MT_GIROS: number,
  PROMEDIO_DIARIO_GIROS: number,
  MT_SOAT: number,
  PROMEDIO_DIARIO_SOAT: number,
  MT_RECAUDOS: number,
  PROMEDIO_DIARIO_RECAUDOS: number,
  MT_RECARGAS: number,
  PROMEDIO_DIARIO_RECARGAS: number,
  PROMO1: number,
  META_PROMO1: number,
  PROMO2: number,
  META_PROMO2: number,
  VERSION: string
}

export interface MetasProductMultired extends Omit<MetasAttributes, 'FECHA' | 'VERSION' | 'ZONA' | 'CCOSTO' | 'SUCURSAL' | 'CHOLADITO' | 'MT_CHOLADITO' | 'PAGATODO_JAMUNDI' | 'MT_PAGATODO_JAMUNDI' | 'PROMEDIO_DIARIO_CHOLADITO' | 'PROMEDIO_DIARIO_PGTJAMUNDI' > {}

export interface MetasProductServired extends Omit<MetasAttributes, 'FECHA' | 'VERSION' | 'ZONA' | 'CCOSTO' | 'SUCURSAL' | 'PAGAMAS' | 'MT_PAGAMAS' | 'PAGATODO' | 'MT_PAGATODO' | 'PROMEDIO_DIARIO_PAGAMAS' | 'PROMEDIO_DIARIO_PAGATODO' > {}

export type MetasCreationAttributes = Optional<MetasAttributes, 'SUCURSAL'>