const axios = require('axios').default;
import * as htmlparser2 from "htmlparser2";

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
  console.log(htmlparser2.parseDocument(aaa));
})();
