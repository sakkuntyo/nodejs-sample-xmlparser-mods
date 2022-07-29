const axios = require('axios').default;
const xml2js = require("xml2js");

(async () => {
  async function get_channel_guide() {
      return new Promise((resolve, reject) => {
          axios.get("http://radiko.jp/v3/program/now/JP13.xml")
              .then((response) => {
                  resolve(response.data)
              })
              .catch((err) => {
                  reject(err)
              })
      });
  };
  var aaa = await get_channel_guide();
  xml2js.parseString(aaa, function (err, result) {
    if (err) {
      console.log(err.message)
    } else {
      console.log(result)
    }
  });
})();
