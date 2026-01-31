import { useEffect, useState, useRef } from "react";
import api from "@/constants/api";

export function useCanaisData() {
    const [canaisData, setCanaisData] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<null | string>(null)

    const [baseCanaisUrl, setBaseCanaisUrl] = useState<any[]>([])

    useEffect(() => {
        api.get('/tv/canais')
            .then(res => {
                setCanaisData(res.data)
            })
            .catch(err => {
                setError('Erro ao buscar os canais')
            })
            .finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        api.get('/tv/canais/url')
            .then(res => {
                setBaseCanaisUrl(res.data)
            })
            .finally(() => setLoading(false))
    }, [])

    return { canaisData, baseCanaisUrl, loading, error }
}