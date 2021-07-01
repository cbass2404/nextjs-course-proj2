import path from 'path';
import fs from 'fs/promises';

import Link from 'next/Link';

const HomePage = ({ products }) => {
    return (
        <ul>
            {products.map(({ id, title }) => (
                <li key={id}>
                    <Link href={`/${id}`}>{title}</Link>
                </li>
            ))}
        </ul>
    );
};

export const getStaticProps = async (context) => {
    console.log('(Re-)Generating');
    // export async function getStaticProps() {
    // cwd === current working directory
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    // fs === filesystem
    const jsonData = await fs.readFile(filePath);
    // JSON.parse === turning json data into javascript data
    const data = JSON.parse(jsonData);

    return {
        props: {
            products: data.products,
        },
        revalidate: 10,
    };
};

export default HomePage;
