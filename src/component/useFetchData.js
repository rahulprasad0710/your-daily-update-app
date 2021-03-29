// -------------- CUstom Hook -----------------------//

import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (apiUrl) => {
    const [fetchData, setFetchData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);
                setFetchData(response);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [apiUrl]);

    return { fetchData, isLoading };
};

export default useFetchData;
