import Image from "next/image";
import type { FC} from "react";
import { useState} from "react";
import { useEffect } from "react";

type Props = {
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

export const CarCard: FC<Props> = (props) => {
    return (
        <div className="flex flex-col w-[300px] rounded ring-2 ring-blue-400">
            <Image src={`/pictures/${props.id}.jpg`} width={300} height={200} alt={`Car ${props.id} Image`} />
            <div className="flex flex-1 flex-col px-4 py-2">
                <span><strong>Brand</strong>: {props.brand}</span>
                <span><strong>Model</strong>: {props.model}</span>

                <span><strong>Price per Day</strong>: {props.pricePerDay}</span>
                <span><strong>Price per Distance (Km)</strong>: {props.pricePerKm}</span>

                <span><strong>Max Duration</strong>: {props.availability.maxDuration}</span>
                <span><strong>Max Distance</strong>: {props.availability.maxDistance}</span>
            </div>
        </div>
    )
}