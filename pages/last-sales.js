import { useEffect, useState } from 'react';
import useSWR from 'swr';

const LastSalesPage = (props) => {
    const [sales, setSales] = useState(props.sales);
    // const [isLoading, setIsLoading] = useState(false);

    // const { data, error } = useSWR(
    //     'https://nextjs-course-25052-default-rtdb.firebaseio.com/sales.json'
    // );

    // useEffect(() => {
    //     if (data) {
    //         const transformedSales = [];

    //         for (const key in data) {
    //             transformedSales.push({
    //                 id: key,
    //                 username: data[key].username,
    //                 volume: data[key].volume,
    //             });
    //         }

    //         setSales(transformedSales);
    //     }
    // }, [data]);

    // useEffect(() => {
    //     setIsLoading(true);

    //     fetch(
    //         'https://nextjs-course-25052-default-rtdb.firebaseio.com/sales.json'
    //     )
    //         .then((res) => res.json())
    //         .then((data) => {
    //             const transformedSales = [];

    //             for (const key in data) {
    //                 transformedSales.push({
    //                     id: key,
    //                     username: data[key].username,
    //                     volume: data[key].volume,
    //                 });
    //             }

    //             setSales(transformedSales);
    //             setIsLoading(false);
    //         })
    //         .catch((err) => console.error(err));
    // }, []);

    // if (error) {
    //     return <p>Failed to load...</p>;
    // }

    if (!sales) {
        return <p>Loading...</p>;
    }

    return (
        <ul>
            {sales.map((sale) => (
                <li key={sale.id}>
                    {sale.username} - ${sale.volume}
                </li>
            ))}
        </ul>
    );
};

export const getStaticProps = async () => {
    return fetch(
        'https://nextjs-course-25052-default-rtdb.firebaseio.com/sales.json'
    )
        .then((res) => res.json())
        .then((data) => {
            const transformedSales = [];

            for (const key in data) {
                transformedSales.push({
                    id: key,
                    username: data[key].username,
                    volume: data[key].volume,
                });
            }
            return { props: { sales: transformedSales } };
        });
};

export default LastSalesPage;
