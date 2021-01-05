import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Cards, ListOfCards, CardsWrapper } from "./ServiceCard.styled";
import { useList } from "react-firebase-hooks/database";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ItemInfo from "../Catalog/ItemInfo";
import {
  Wrapper,
  SelectionWrapper,
  Option,
  Selection,
  FilterWrapper,
  FilterInput,
} from "./ControlPanel.styled";
import "../Catalog/loading.css";
import { connect } from "react-redux";

function ServiceCard({ database }) {
  let [data, loading] = useList(database);
  const [service, setService] = useState("");
  const [name, findByName] = useState("");

  data = data.filter((hotel) => hotel.val().services.includes(service));
  data = data.filter((hotel) => hotel.val().name.includes(name));

  return (
    <>
      <Wrapper>
        <SelectionWrapper color="#C9A66B">
          Filter by
          <Selection onChange={(event) => setService(event.target.value)}>
            <Option></Option>
            <Option value="Ukraine">Ukraine</Option>
            <Option value="Italy">Italy</Option>
            <Option value="Turkey">Turkey</Option>
          </Selection>
        </SelectionWrapper>
        <FilterWrapper>
          <FilterInput
            id="lawyerName"
            placeholder="Enter name of hotel"
            onChange={(event) => findByName(event.target.value)}
          ></FilterInput>
        </FilterWrapper>
      </Wrapper>
      {loading && <div class="loader">Loading...</div>}
      <CardsWrapper>
        <Cards>
          <BrowserRouter>
            <Route path={"/catalog/info/"}>
              <ItemInfo data={data} />
            </Route>
            <Route exact path={"/catalog"}>
              <ListOfCards>
                {data.map((hotel) => (
                  <Card
                    style={{
                      width: "18rem",
                      height: "550px",
                      marginLeft: "24px",
                      backgroundColor: "#C9A66B",
                    }}
                    key={hotel.key}
                  >
                    <Card.Img height="265px"
                      variant="top"
                      src={hotel.val().image}
                      alt="lawyer"
                    />
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
                          Price: {hotel.val().pricePerDayInDollars}$ per day
                        </Card.Text>
                        <Card.Text>Rating: {hotel.val().rating}/5</Card.Text>
                        <Link to={"catalog/info/" + hotel.key}>View more</Link>
                      </>
                    </Card.Body>
                  </Card>
                ))}
              </ListOfCards>
            </Route>
          </BrowserRouter>
        </Cards>
      </CardsWrapper>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    database: state.hotelFirm.database,
  };
};

export default connect(mapStateToProps)(ServiceCard);
