import {Link} from "react-router-dom";

function Home() {
    return (
        <>
            <button className="btn">Button</button>
            <button className="btn btn-primary">Button</button>
            <button className="btn btn-secondary">Button</button>
            <button className="btn btn-accent">Button</button>
            <button className="btn btn-ghost">Button</button>
            <button className="btn btn-link">Button</button>
            <div className="card w-64 bg-base-100 shadow-xl mt-10">
                <figure><img src="https://iscore-media.s3.us-east-2.amazonaws.com/Countries/England/bigben.jpeg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-red-300 rounded-box">
                <div className="carousel-item">
                    <Link to={
                        {
                            pathname: `/login`
                        }
                    }>
                        <img src="https://iscore-media.s3.us-east-2.amazonaws.com/Countries/England/bigben.jpeg" alt="Burger" />
                    </Link>
                </div>
                <div className="carousel-item">
                    <img src="https://iscore-media.s3.us-east-2.amazonaws.com/Countries/England/bigben.jpeg" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src="https://iscore-media.s3.us-east-2.amazonaws.com/Countries/England/bigben.jpeg" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src="https://iscore-media.s3.us-east-2.amazonaws.com/Countries/England/bigben.jpeg" alt="Burger" />
                </div>
            </div>
        </>
    );
}

export default Home;
