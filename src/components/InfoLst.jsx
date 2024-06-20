import React, { useEffect, useState } from 'react';
import Info from './Info';

const InfoLst = () => {
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const response = await fetch('/api/items');
        const data = await response.json();
        setItems(data);
    };

    useEffect(() => {
        fetchItems();
        const interval = setInterval(fetchItems, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {items.map((item) => (
                <Info key={item.id} item={item} />
            ))}
        </div>
    );
};

export default InfoLst;

