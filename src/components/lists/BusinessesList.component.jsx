import { Component } from "react";

import ListItemBusiness from "../list-item/list-item-business.component";

class BusinessesList extends Component {
  render() {
    const { businesses } = this.props;

    if (businesses === 0) {
      return <div>Loading data....</div>;
    }

    const businessesList = businesses.map((business) => {
      return <ListItemBusiness key={business.id} business={business} />;
    });

    return (
      <div>
        <ul>{businessesList}</ul>
      </div>
    );
  }
}

export default BusinessesList;
