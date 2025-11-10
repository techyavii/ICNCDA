import React, { useState, useEffect } from "react";
import axios from "axios";

const CheckoutForm : React.FC = () => {
  const [participantType, setParticipantType] = useState("Research Student Author (Physical Mode)");
  const [price, setPrice] = useState("300");
  const [responseMessage, setResponseMessage] = useState("");
  const prices = {
      "Research Student Author (Physical Mode)": 300,
      "Research Student Author (Online Mode)": 200,
      "Standard Authors (Physical Mode)": 350,
      "Standard Authors (Online Mode)": 220,
      "Research Student Participants": 200,
      "Standard Participants": 250,
    };

  useEffect(() => {
    

    setPrice(prices[participantType] || "");
  }, [participantType]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(participantType)
      let country = "gbp";
      const ipResp=await axios.get("https://extreme-ip-lookup.com/json/?key=raZUg7OdrMqIABCEZxQV");
      country=ipResp?.data?.country;      
           
      if(!price || price=="0"){
        throw new Error('Price should be greater than 0')
      }
      const res = await axios.post(
        "https://aisgri-vista-website-nine.vercel.app/create-checkout-session",
        { participantType, price, country }
      );
      // console.log(res);
      // setResponseMessage(`Success: ${response.data.message}`)

      window.location.href = res.data.url;
    } catch (error) {
      setResponseMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-6">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Participant Form
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="participantType"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Participant Type:
            </label>
            <select
              id="participantType"
              name="participantType"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={participantType}
              onChange={(e) => setParticipantType(e.target.value)}
            >
                {Object.keys(prices).map((p)=>( <option value={p}>
                    {p}
                </option>))}              
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Price:
            </label>
            <input
  type="text"
  id="price"
  name="price"
  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  value={`£${price}`}
  onChange={(e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9.]/g, '');
    setPrice(numericValue);
  }}
  disabled={participantType !== 'Others'}
/>



            {/* </div> */}
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
        {responseMessage && (
          <p className="mt-4 text-center">{responseMessage}</p>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;
