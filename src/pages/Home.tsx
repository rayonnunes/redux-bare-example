import { Link } from "react-router";

const Home = () => {
    return (
        <div style={{ display: 'flex', gap: '16px' }}>
            <Link to="to-do">
                <button>Go to ToDo challenge</button>
            </Link>

            <Link to="voting">
                <button>Go to Voting challenge</button>
            </Link>
        </div>
    );
};

export default Home;