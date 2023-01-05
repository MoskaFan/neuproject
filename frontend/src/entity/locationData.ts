import { Address } from "./address"

export type LocationData={
    id?:string,
    name:string,
    image?:string,
    description?:string,
    website?:string,
    pricePerPerson?:number,
    size?: number,
    eventType?:string,
    maxCapacity?: number,
    address?: Address,
    startDate?: string,
    endDate?: string
}