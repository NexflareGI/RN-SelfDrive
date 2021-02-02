export const getCars = async () => {
  let data = {
    address: {
      start: {
        gds_id: "GDSBEJH7J",
        lat: 12.92655,
        lng: 77.66198,
        name:
          "Tower 4, Embassy Pristine, Iblur Village, Bellandur, Bengaluru, Karnataka 560102, India",
        voyager_id: "6771549831164675055",
      },
    },
    fuel_included: false,
    end_time: "1613457000000",
    start_time: "1613111400000",
    type: "default",
  };
  try {
    let response = await fetch(
      "http://192.168.0.134:8000/v1/search/cars/?price=low",
      {
        method: "POST",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    let responseData = await response.json();
    if (responseData.code == "200") {
      return responseData.response;
    } else {
      throw new Error(responseData.error.msg);
    }
  } catch (err) {
    throw new Error(err);
  }
};
