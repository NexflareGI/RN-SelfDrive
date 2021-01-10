export const getCars = async () => {
  let data = {
    address: {
      start: {
        gds_id: "",
        lat: 12.9518,
        lng: 77.644501,
        name: "",
        voyager_id: "",
      },
    },
    fuel_included: false,
    end_time: "1611815400000",
    start_time: "1611556200000",
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
      let {
        response: { cars_filtered },
      } = responseData;
      return cars_filtered;
    } else {
      throw new Error(responseData.error.msg);
    }
  } catch (err) {
    throw new Error(err);
  }
};
