import React, { Component } from "react";
import CollectionPriview from "../../components/collection-preview/collection-preview.component";

import SHOP_DATA from "./shop.data";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colletions: SHOP_DATA,
    };
  }
  render() {
    const { colletions } = this.state;
    return (
      <>
        <div className="shop-page">
          {colletions.map(({ id, ...otherCollectionProps }) => (
            <CollectionPriview key={id} {...otherCollectionProps} />
          ))}
        </div>
      </>
    );
  }
}

export default ShopPage;
