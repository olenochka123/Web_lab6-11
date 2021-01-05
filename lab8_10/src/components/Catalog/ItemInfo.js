import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Wrapper, BackBtn, Info, BuyBtn } from "./ItemInfo.styled";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions";

function ItemInfo(props) {
  var hotels = props.data;
  const key = window.location.pathname.split("/").pop();
  var selectedHotel = hotels.filter((itemSelected) =>
    itemSelected.key.includes(key)
  );

  return selectedHotel.map((hotel) => (
    <Wrapper>
      <BackBtn>
        <Link
            style={{
                color: "black",
            }}to="/catalog">Back</Link>
      </BackBtn>
      <Card
        style={{
          width: "18rem",
          height: "580px",
          marginLeft: "24px",
          backgroundColor: "#C9A66B",
        }}
      >
        <Card.Img height="265px" variant="top" src={hotel.val().image} />
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <>
            <Card.Title>{hotel.val().name}</Card.Title>
            <Card.Text>Location: {hotel.val().services}</Card.Text>
            <Card.Text>
              Price: {hotel.val().pricePerDayInDollars}$
            </Card.Text>
            <Card.Text>Rating: {hotel.val().rating} ☆</Card.Text>
            <BuyBtn
              onClick={() => {
                props.addToCart(hotel.val().key);
              }}
            >
              Order a hotel
            </BuyBtn>
          </>
        </Card.Body>
      </Card>
      <Info>
          Overlooking the garden, More Apartments is located in Trogir, 300 meters from Seget Doni Beach. It offers free Wi-Fi and free private parking.

          The tiled rooms feature a fully equipped kitchen with a refrigerator, a dining area, a flat-screen TV with satellite channels, and a private bathroom with a shower and a hairdryer. Towels and bed linen are available at an additional cost.

          Guests can relax on the terrace.
      </Info>
    </Wrapper>
  ));
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (key) => dispatch(addToCart(key)),
  };
};

export default connect(null, mapDispatchToProps)(ItemInfo);
