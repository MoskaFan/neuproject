import { Address } from "./address"

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
    startDate?: "",
    endDate?: ""
}