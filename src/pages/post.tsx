import { useState, useEffect } from 'react';
import CardsComponent from './ui/cards/cards';

export default function Cards() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <ul className="w-full flex justify-around flex-wrap">
            {Array.isArray(data) && data.length ? (
                data.map((elem: { id: number; title: string; body: string }) => (
                    <CardsComponent key={elem.id.toString()} userId={elem.id} title={elem.title} body={elem.body} />
                ))
            ) : (
                <li>Loading...</li>
            )}
        </ul>
    );
}