import axios from "axios";
import { useEffect, useState } from "react"

const usePost = (URL, params, headers) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDT = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await axios.post(URL, { params }, { headers });
                setData(res.data);

            } catch (err) {
                setError(err.message || 'ERROR 404')
            } finally {
                setLoading(false);
            }
        };
        fetchDT();
    }, [URL, params]);

    return { data, loading, error }
}
export default usePost