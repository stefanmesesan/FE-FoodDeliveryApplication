import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as restaurantClient from "../clients/restaurant";
import * as reviewClient from "../clients/review";
import * as menuItemClient from "../clients/menu-item";
import { CartContext } from "../contexts/cart";
import Navbar from "../components/navbar-customer";
import "../style/restaurant-detail.css";
import loading from "../assets/loading.gif";
import defaultImage from "../assets/cardImage.png";
import { BsTelephone } from "react-icons/bs";
import { GrMap } from "react-icons/gr";
import pizza from "../assets/pizza.jpg";
import { IoCartOutline } from "react-icons/io5";

const RestaurantDetail = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [restaurant, setRestaurant] = useState({});
    const [reviews, setReviews] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);

    const [reviewRating, setReviewRating] = useState(0);
    const [reviewComment, setReviewComment] = useState("");

    const { id } = useParams();
    const { addToCart } = useContext(CartContext);

    const navigate = useNavigate();

    const role = localStorage.getItem("role");

    useEffect(() => {
        setIsLoading(true);
        Promise.all([
            restaurantClient.getById(id),
            reviewClient.getAllForRestaurant(id),
            menuItemClient.getByRestaurantId(id),
        ]).then(([restaurantResponse, reviewsResponse, menuItemsResponse]) => {
            setRestaurant(restaurantResponse.data);
            setReviews(reviewsResponse.data);
            setMenuItems(menuItemsResponse.data);
            setIsLoading(false);
        });
    }, [id]);

    const handleAddReview = () => {
        reviewClient
            .create(id, { rating: reviewRating, comment: reviewComment })
            .then(() => {
                reviewClient
                    .getAllForRestaurant(id)
                    .then((response) => setReviews(response.data));
            });
        if (!(reviewRating >= 1 && reviewRating <= 5)) {
            alert("ratingul trebuie sa fie intre 1 si 5!");
        }
    };

    const handleSendDeleteRequest = () => {
        restaurantClient.sendDeleteRequest().then(() => {
            alert("Cererea de stergere a fost trimisa.");
        });
    };

    const deleteMenuItem = (menuItemId) => {
        menuItemClient.deleteMenuItem(menuItemId).then(() => {
            menuItemClient.getByRestaurantId(id).then((response) => {
                setMenuItems(response.data);
            });
        });
    };

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
                                {restaurant.name}
                            </p>
                            <button
                                onClick={() =>
                                    navigate(
                                        "/restaurants/" + id + "/addMenuItem"
                                    )
                                }
                            >
                                Adauga menu item
                            </button>
                            <button onClick={() => handleSendDeleteRequest()}>
                                Trimite cerere de stergere
                            </button>
                            <div className="restaurant-contact">
                                <p>
                                    <GrMap />
                                    {restaurant.address}
                                </p>
                                <p>
                                    <BsTelephone />
                                    {restaurant.phoneNumber}
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
                            {menuItems.map((menuItem) => (
                                <li
                                    key={menuItem.id}
                                    onClick={() =>
                                        setSelectedMenuItem(menuItem)
                                    }
                                >
                                    <div className="restaurant-food-card">
                                        <div className="restaurant-food-card-details">
                                            <p>{menuItem.name}</p>
                                            <p className="restaurant-food-card-description">
                                                {menuItem.description}
                                            </p>
                                            <div className="cart-price">
                                                {role === "CUSTOMER" && (
                                                    <button
                                                        onClick={(event) => {
                                                            event.stopPropagation();
                                                            addToCart(menuItem);
                                                            alert(
                                                                menuItem.name +
                                                                    " was added to cart."
                                                            );
                                                        }}
                                                    >
                                                        <IoCartOutline />
                                                    </button>
                                                )}

                                                {role ===
                                                    "RESTAURANT_OPERATOR" && (
                                                    <button
                                                        onClick={(event) => {
                                                            event.stopPropagation();
                                                            deleteMenuItem(
                                                                menuItem.id
                                                            );
                                                            alert(
                                                                menuItem.name +
                                                                    " was deleted."
                                                            );
                                                        }}
                                                    >
                                                        Delete
                                                    </button>
                                                )}

                                                <p className="restaurant-food-card-price">
                                                    {menuItem.price} Lei
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                            {!!selectedMenuItem && (
                                <div className="modal-inset">
                                    <div className="menuItemModal">
                                        <h1>{selectedMenuItem.name}</h1>
                                        <p>{selectedMenuItem.description}</p>
                                        <button
                                            onClick={() =>
                                                setSelectedMenuItem(null)
                                            }
                                        >
                                            Close modal
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <div className="review-container">
                <p className="review-title">Add a review</p>
                <input
                    type="number"
                    value={reviewRating}
                    onChange={(event) => setReviewRating(event.target.value)}
                    placeholder="0"
                />
                <textarea
                    placeholder="comment..."
                    value={reviewComment}
                    onChange={(event) => setReviewComment(event.target.value)}
                />
                <button onClick={handleAddReview}>Add review</button>
            </div>

            <div className="rating-container">
                {reviews.map((review) => (
                    <div className="rating-card" key={review.id}>
                        <div>
                            <p>Rating: {review.rating}</p>
                            <p>Comment: {review.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RestaurantDetail;
