import { Address } from "./Address"
import { Date } from "./Date"

export type LocationData={
    id?:"",
    name:"",
    image:"",
    description:"",
    website:"",
    pricePerPerson:0,
    size: 0.0,
    eventType:"",
    maxCapacity: 0,
    address: Address,
    startDate: Date,
    endDate: Date

}