import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const BusinessDetailPage = () => {
  const { alias } = useParams();
  const [businessDetails, setBusinessDetails] = useState({});

  useEffect(() => {
    const corsApiUrl = "https://cors-anywhere.herokuapp.com/";

    axios
      .get(`${corsApiUrl}https://api.yelp.com/v3/businesses/${alias}`, {
        headers: {
          Authorization: `${process.env.REACT_APP_API_KEY}`,
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Origin": "http://localhost:8000",
          withCredentials: true,
        },
      })
      .then((json) => {
        setBusinessDetails(json.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div>
        <Link to="/">Return to List</Link>
      </div>
      <div>
        {!businessDetails ? (
          <h1>Loading data...</h1>
        ) : (
          <h1>{businessDetails.name}</h1>
        )}
      </div>
    </div>
  );
};

export default BusinessDetailPage;
