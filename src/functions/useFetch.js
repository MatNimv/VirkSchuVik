import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        //används för att stoppa fetchen.
        //ex på en sida som inte använder fetchen
        const abortCont = new AbortController();

        console.log('use effect');

        fetch(url, {signal: abortCont.signal})
            .then(response => {
                if(!response.ok){
                    throw Error('Megafel. Inte fetch bla')
                }
                return response.json()
            })
            .then((data) => {
                setData(data);
                //visar laddsymbol när articles håller på att laddas
                //felmeddelande finns inte. 
                setIsLoading(false);
                setError(null);
            })
            .catch(error => {
                if(error.name === 'AbortError'){console.log('fetch aborted');}
                else{
                //om något är fel skrivs det ett error ist. laddning finns ej
                    setError(error.message);
                    setIsLoading(false);
                }
            })

        return () => abortCont.abort();
    }, [url]);
    //varje gång "url" ändras kommer useEffect köras igen.
    
return {data, isLoading, error}
}


export default useFetch;