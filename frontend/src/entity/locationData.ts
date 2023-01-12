
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
    address?: {
        country: string,
        city: string,
        zipCode: string,
        street: string,
        houseNumber: string
    },
    startDate?: string,
    endDate?: string
}