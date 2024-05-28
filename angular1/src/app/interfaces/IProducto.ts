import { ICategoria } from "./ICategoria"
import { IImagen } from "./IImagen"

export interface IProducto {
    nombreproducto : string
    descripcion : string
    precio : number
    categoria : ICategoria
    imagen : IImagen
}