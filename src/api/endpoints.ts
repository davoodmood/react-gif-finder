import { AxiosResponse } from "axios";
import request, {API_KEY} from "./apiService";

export interface ApiParams {
    endpoint: string;
    limit?: number;
    offset?:number;
    rating?: string;
    lang?: string;
    query?: NonNullable<string>
}

const fetchTrending = async (
    limit: number = 12,
    offset:number = 0,
    rating: string = 'g'
    ) => {
    return request({
        url: `trending?api_key=${API_KEY}&limit=${limit}&offset=${offset}&rating=${rating}`,
        method: 'get'
    })
    .then(
        (response: AxiosResponse) => {
            return response.data
        }
    )
}

const fetchSearch = async (
    limit: number = 12, 
    offset:number = 0, 
    rating: string = 'g', 
    lang: string = 'en',
    query: NonNullable<string>,
    ) => {
    return request({
        url: `search?api_key=${API_KEY}&q=${encodeURIComponent(query)}&limit=${limit}&offset=${offset}&rating=${rating}&lang=en`,
        method: 'get'
    })
    .then(
        (response: AxiosResponse) => {
            return response.data
        }
    )
}

const apiEndpoints = {
    fetchTrending,
    fetchSearch
}

export default apiEndpoints;