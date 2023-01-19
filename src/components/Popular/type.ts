export interface IPopularItem {
    title: string
    rating: number
    episodes?: number
    genre: string
    img: string
}

export interface IPopularProps {
    items: IPopularItem[]
    classname?: string
}