import {useState} from "react";

const useAxios = (baseUrl) => {
    const [responses, setResponses] = useState([]);
    const addResponseData = async (format = data => data,restOfUrl = '') => {
        const response = await axios.get(`${baseUrl}${restOfUrl}`);
        setResponses(data => [...data, format(response.data)] )
    };
    
    const clearResponses = () => setResponses([]);
    
    return [responses, addResponseData, clearResponses]
}