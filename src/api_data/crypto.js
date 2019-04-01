import React, { Component } from "react";
import rp from "request-promise";
// import axios from "axios";

class CryptoData extends Component {
  state = {
    crypto: {}
  };

  componentDidMount() {
    const requestOptions = {
      method: "GET",

      uri:
        "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      qs: {
        start: 1,
        limit: 5000,
        convert: "USD"
      },
      headers: {
        "X-CMC_PRO_API_KEY": "baa97d99-bd9e-411f-9ff2-f7c0a68d5dab"
      },
      json: true,
      gzip: true
    };

    rp(requestOptions)
      .then(response => {
        this.setState({ crypto: response });
        console.log("API call response:", response);
      })
      .catch(err => {
        console.log("API call error:", err);
      });
  }

  render() {
    // console.log(this.state.crypto);
    return (
      <ul>
        <li>test</li>
      </ul>
    );
  }
}

export default CryptoData;
