const UserProfilePage = (props) => {
    return (
        <div>
            <h1>{props.username}</h1>
        </div>
    );
};

export default UserProfilePage;

export const getServerSideProps = async (context) => {
    // context gives access to everything getStaticProps plus request object and response object
    const { params, req, res } = context;

    console.log('Server side code');

    return {
        props: { username: 'Max' },
    };
};
