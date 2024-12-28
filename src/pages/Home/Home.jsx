import { Link } from "react-router-dom";
import background from "../../assets/images/Rectangle1.png"
import sajek from "../../assets/images/Sajek.png"
const Home = () => {
    return (
        <>
            <div
                className="hero min-h-screen "
                style={{
                    backgroundImage: `url(${background})`,
                }}>
                <div className="hero-overlay bg-opacity-75"></div>
                <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                    <img
                        src={sajek}
                        className="max-w-xs rounded-lg shadow-2xl" />
                    <div className="text-gray-50">
                        <h1 className="text-7xl uppercase font-bold">Cox`s bazar</h1>
                        <p className="py-6">
                            Cox`s Bazar is a city, fishing port, tourism <br />centre and district headquarters in southeastern <br /> Bangladesh. It is famous mostly for its long natural sandy beach, and it ...
                        </p>
                        <Link to="/login" className="btn btn-warning">Booking</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;