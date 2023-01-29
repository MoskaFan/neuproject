import {LocationData} from "./locationData";

export type OwnerData ={
    id?:string,
    username:string,
    email?:string,
    password:string,
    locations?: LocationData[]

}