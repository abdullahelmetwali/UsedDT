import { useState, useEffect } from "react";
import axios from "axios";

const useGet = (URL) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchingDT = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await axios.get(URL);
                setData(res.data);
            } catch (err) {
                setError(err.message || 'ERROR 404');
            } finally {
                setLoading(false);
            }
        };
        fetchingDT();
    }, [URL]);

    return { data, loading, error }
}
export default useGet