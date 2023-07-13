import { Country } from "./Country"

export interface Player {
    id: number
    name: string
    slug: string
    country: Country
    position: string
}