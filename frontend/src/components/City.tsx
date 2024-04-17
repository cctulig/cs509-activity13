import axios from "axios";
import {useEffect, useState} from "react";

function City() {
    const [response, setResponse] = useState([]);
    const getdata = async () => {
        try {
            const res = await axios.get("http://localhost:5156/api/v1/City?id=1");
            setResponse(res.data);
        }
        catch (error) {
            console.log("Error!")
        }
    }

    useEffect(() => {
        getdata();
    }, []);

    if (response) {
        return (<h1> My city {JSON.stringify(response)} </h1>);
    }
    else {
        return (<h1> My city </h1>);
    }
}

export default City;