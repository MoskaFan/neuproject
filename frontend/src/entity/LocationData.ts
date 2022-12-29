import { Address } from "./Address"
import { Date } from "./Date"

export type LocationData={
    id?:"",
    name:"",
    image?:"",
    description?:"",
    website?:"",
    pricePerPerson?:"",
    size?: "",
    eventType?:"",
    maxCapacity?: "",
    address?: Address,
    startDate?: Date,
    endDate?: Date

}