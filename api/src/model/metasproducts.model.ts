import { con_db } from '../connections/mariaDB'
import { Model, DataTypes } from 'sequelize'

class MetasProducts extends Model { }

MetasProducts.init({
  FECHA: { type: DataTypes.DATE, allowNull: false, primaryKey: true },
  CHANCE: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PAGAMAS: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PAGATODO: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  GANE5: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PAGATODO_JAMUNDI: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  CHOLADITO: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PATA_MILLONARIA: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  DOBLECHANCE: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  CHANCE_MILLONARIO: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  ASTRO: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  LOTERIA_FISICA: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  LOTERIA_VIRTUAL: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  BETPLAY: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  GIROS: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  SOAT: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  RECAUDOS: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  RECARGAS: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  ZONA: { type: DataTypes.INTEGER, allowNull: false },
  CCOSTO: { type: DataTypes.INTEGER, allowNull: false },
  SUCURSAL: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
  MT_CHANCE: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_CHANCE: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_PAGAMAS: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_PAGAMAS: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_PAGATODO: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_PAGATODO: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_GANE5: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_GANE5: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_PAGATODO_JAMUNDI: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_PGTJAMUNDI: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_CHOLADITO: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_CHOLADITO: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_PATA_MILLONARIA: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_PATAMI: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_DOBLECHANCE: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_DOBLECHANCE: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_CHANCE_MILLONARIO: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_CHMILL: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_ASTRO: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_ASTRO: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_LOTERIA_FISICA: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_LF: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_LOTERIA_VIRTUAL: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_LV: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_BETPLAY: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_BETPLAY: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_GIROS: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_GIROS: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_SOAT: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_SOAT: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_RECAUDOS: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_RECAUDOS: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  MT_RECARGAS: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMEDIO_DIARIO_RECARGAS: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMO1: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  META_PROMO1: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  PROMO2: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  META_PROMO2: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  VERSION: { type: DataTypes.STRING, allowNull: true }
}, {
  sequelize: con_db,
  modelName: 'metas',
  tableName: 'METASPRODUCTOS',
  timestamps: false
})

export { MetasProducts }