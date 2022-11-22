export type CarInfo = {
    id: number,
    brand: string,
    model: string,
    pricePerDay: number,
    pricePerKm: number,
    availability: {
        maxDuration: number,
        maxDistance: number
    }
}