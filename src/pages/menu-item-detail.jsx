import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MenuItemDetail = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [menuItem, setMenuItem] = useState({});

    const { id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        client.getById(id).then((response) => {
            setRestaurant(response.data);
            setIsLoading(false);
        });
    }, [id]);

    return (
        <div className="restaurant-detail-main-container">
            <Navbar />
            <div className="restaurant-detail-content">
                {isLoading ? (
                    <img src={loading} alt="Loading..." />
                ) : (
                    <div className="restaurant-detail">
                        <img src={defaultImage} alt="image" />
                        <div className="restaurant-detail-info">
                            <p className="restaurant-detail-name">
                                {menuItem.name}
                            </p>
                            <div className="restaurant-contact">
                                <p>
                                    <GrMap />
                                    {menuItem.description}
                                </p>
                                <p>
                                    <BsTelephone />
                                    {menuItem.price}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="restaurant-food">
                <p className="restaurant-food-title">Food</p>
                <div className="restaurant-food-content">
                    {isLoading ? (
                        <img src={loading} alt="Loading..." />
                    ) : (
                        <div className="restaurant-food-cards">
                            <li>
                                <div className="restaurant-food-card">
                                    <div className="restaurant-food-card-details">
                                        <p>Pizza Casei</p>
                                        <p className="restaurant-food-card-description">
                                            Aluat cu maia, sos alb, mozzarella
                                            fior di latte, fâşii din piept de
                                            pui marinat
                                        </p>
                                        <p className="restaurant-food-card-price">
                                            38.99 Lei
                                        </p>
                                    </div>
                                    <img src={pizza} alt="food" />
                                </div>
                            </li>
                            <li>
                                <div className="restaurant-food-card">
                                    <div className="restaurant-food-card-details">
                                        <p>Pizza Casei</p>
                                        <p className="restaurant-food-card-description">
                                            Aluat cu maia, sos alb, mozzarella
                                            fior di latte, fâşii din piept de
                                            pui marinat
                                        </p>
                                        <p className="restaurant-food-card-price">
                                            38.99 Lei
                                        </p>
                                    </div>
                                    <img src={pizza} alt="food" />
                                </div>
                            </li>
                            <li>
                                <div className="restaurant-food-card">
                                    <div className="restaurant-food-card-details">
                                        <p>Pizza Casei</p>
                                        <p className="restaurant-food-card-description">
                                            Aluat cu maia, sos alb, mozzarella
                                            fior di latte, fâşii din piept de
                                            pui marinat
                                        </p>
                                        <p className="restaurant-food-card-price">
                                            38.99 Lei
                                        </p>
                                    </div>
                                    <img src={pizza} alt="food" />
                                </div>
                            </li>
                            <li>
                                <div className="restaurant-food-card">
                                    <div className="restaurant-food-card-details">
                                        <p>Pizza Casei</p>
                                        <p className="restaurant-food-card-description">
                                            Aluat cu maia, sos alb, mozzarella
                                            fior di latte, fâşii din piept de
                                            pui marinat
                                        </p>
                                        <p className="restaurant-food-card-price">
                                            38.99 Lei
                                        </p>
                                    </div>
                                    <img src={pizza} alt="food" />
                                </div>
                            </li>
                            <li>
                                <div className="restaurant-food-card">
                                    <div className="restaurant-food-card-details">
                                        <p>Pizza Casei</p>
                                        <p className="restaurant-food-card-description">
                                            Aluat cu maia, sos alb, mozzarella
                                            fior di latte, fâşii din piept de
                                            pui marinat
                                        </p>
                                        <p className="restaurant-food-card-price">
                                            38.99 Lei
                                        </p>
                                    </div>
                                    <img src={pizza} alt="food" />
                                </div>
                            </li>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default MenuItemDetail;
