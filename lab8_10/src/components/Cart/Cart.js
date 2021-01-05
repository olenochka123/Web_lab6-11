import { Card } from "react-bootstrap";
import {
  CardsWrapper,
  Cards,
  ListOfCards,
  QuantityWrapper,
  Plus,
  Minus,
  Container,
  Button,
  Trash,
  Order,
} from "./Cart.styled";
import { connect } from "react-redux";
import "../Catalog/loading.css";
import { removeFromCart, editQuantity } from "../../redux/actions";

function Cart({ cart, removeFromCart, editQuantity }) {
  var totalHotels = 0;
  var totalPrice = 0;
  cart.forEach((hotel) => {
    totalPrice += hotel.quantity * hotel.pricePerDayInDollars;
    totalHotels += hotel.quantity;
  });

  return (
    <>
      <Order>
        <Card
          style={{
            width: "18rem",
            height: "65px",
            marginLeft: "24px",
            backgroundColor: "#C9A66B",
          }}
        >
          <Card.Body>
            <p>
              Total price: {totalPrice} | Total items: {totalHotels}
            </p>
          </Card.Body>
        </Card>
      </Order>
      <CardsWrapper>
        <Cards>
          <ListOfCards>
            {cart.map((hotel) => (
              <Card
                style={{
                  width: "18rem",
                  height: "550px",
                  marginLeft: "24px",
                  backgroundColor: "#C9A66B",
                }}
                key={hotel.key}
              >
                <Card.Img height="265px" variant="top" src={hotel.image} alt="hotel" />
                <Card.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <>
                    <Card.Title>{hotel.name}</Card.Title>
                    <Card.Text>Location: {hotel.services}</Card.Text>
                    <Card.Text>
                      Price: {hotel.pricePerDayInDollars}$ per day
                    </Card.Text>
                    <Card.Text>Rating: {hotel.rating}/5</Card.Text>
                    <QuantityWrapper>
                      <Card.Text>Quantity: {hotel.quantity}</Card.Text>
                      <Container>
                        <Button
                          onClick={() => {
                            editQuantity(hotel.key, hotel.quantity - 1);
                          }}
                        >
                          <Minus />
                        </Button>
                        <Button
                          onClick={() => {
                            editQuantity(hotel.key, hotel.quantity + 1);
                          }}
                        >
                          <Plus />
                        </Button>
                        <Button
                          onClick={() => {
                            removeFromCart(hotel.key);
                          }}
                        >
                          <Trash />
                        </Button>
                      </Container>
                    </QuantityWrapper>
                  </>
                </Card.Body>
              </Card>
            ))}
          </ListOfCards>
        </Cards>
      </CardsWrapper>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.hotelFirm.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (key) => dispatch(removeFromCart(key)),
    editQuantity: (key, quantity) => dispatch(editQuantity(key, quantity)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
