import { Component } from "react";
import axios from "axios";

import BusinessesList from "../components/lists/BusinessesList.component";
import SearchBox from "../components/search-box/search-box.component";

class BusinessesPage extends Component {
  state = {
    businesses: [],
    searchField: "",
  };

  searchHandler = (event) => {
    this.setState((prevState, prevProps) => {
      return {
        searchField: event.target.value,
      };
    });
  };

  componentDidMount() {
    const corsApiUrl = "https://cors-anywhere.herokuapp.com/";
    // const corsApiUrl = "";

    axios
      .get(
        `${corsApiUrl}https://api.yelp.com/v3/businesses/search?location=usa`,
        {
          headers: {
            Authorization: `${process.env.REACT_APP_API_KEY}`,
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "http://localhost:8000",
            withCredentials: true,
          },
        }
      )
      .then((json) => {
        console.log(json.data.businesses);
        this.setState({ businesses: json.data.businesses });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { businesses, searchField } = this.state;

    const filteredBusinesses = businesses.filter((business) =>
      business.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div>
        <div>
          <SearchBox
            placeholder="Search by restaurant"
            searchHandler={this.searchHandler}
          />
        </div>
        {!this.state.error && filteredBusinesses.length > 0 ? (
          <div>
            <BusinessesList businesses={filteredBusinesses} />
          </div>
        ) : (
          <div>Loading data...</div>
        )}
      </div>
    );
  }
}

export default BusinessesPage;
