import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Detail = ({ url }) => {
    const [ detail, setDetail ] = useState({});

    useEffect(() => {
        axios
            .get(url)
            .then(res => setDetail(res.data))
    },[url ])

    return (
        <div>
            <p>Color: <b style={{color:"red"}}>{detail.color?.name}</b> cm</p>
            <p>Forma: <b style={{color:"red"}}>{detail.shape?.name}</b></p>
            <p>Habita: <b style={{color:"red"}}>{detail.habitat?.name}</b></p>
           
        </div>
    );
};

export default Detail;