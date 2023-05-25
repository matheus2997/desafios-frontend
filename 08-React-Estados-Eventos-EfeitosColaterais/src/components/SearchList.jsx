import React, { useState, useEffect } from "react";

const myList = [
    { id: '1', value: 'Fruta'},
    { id: '2', value: 'Carne'},
    { id: '3', value: 'Legume'}
]

export default function SearchList() {
    const [products, setProducts] = useState(myList);
    const [search, setSearch] = useState('');

    useEffect(() => {
        if (search) {
            const newList = myList.filter(item => {
                return item.value.toLowerCase().includes(search.toLowerCase());
            });
            setProducts(newList);
        } else {
            setProducts(myList);
        }
    }, [search]);

    return (
        <div>
            <h1>Efeitos Colaterais</h1>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="pesquise aqui"
            />

            {products.map(item => (
                <div key={item.id}>
                    <h4>{item.value}</h4>
                </div>
            ))}
        </div>
    );
}
