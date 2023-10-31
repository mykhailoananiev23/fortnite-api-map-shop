const apiUrl = "https://fortnite-api.com/v2/shop/br";

async function getDataFromAPI() {
  try {
    const response = await fetch(apiUrl); // Replace with the actual API URL
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data.featured.entries;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // You can handle the error or rethrow it for upper-level handling
  }
}

async function landingArr() {
  var items = await getDataFromAPI();
  var res = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    var stt = 0;
    if (i == 0) {
      res.push(items[i].section.index);
    }
    for (let j = 0; j < res.length; j++) {
      const idx = res[j];
      if (idx == items[i].section.index) {
        stt++;
      }
    }
    if (stt == 0) {
      res.push(items[i].section.index);
    }
  }
  var result = [];
  for (var i = 0; i < res.length; i++) {
    var tmp_arr = [];
    for (var j = 0; j < items.length; j++) {
      if (res[i] == items[j].section.index) {
        tmp_arr.push(items[j]);
      }
    }
    result.push(tmp_arr);
  }
  return result;
}

async function getById(id) {
  var items = await getDataFromAPI();
  var r_id = "v2:/" + id;
  var matchedItem = items.find((item) => item.offerId === r_id);
  return matchedItem;
}

async function mdl_shopData(req, res, next) {
  if(req.query.permission == 3303){
    try {
      req.items = JSON.stringify(await landingArr())
      next();
    } catch (error) {
      
    }
  } else {
    return res.send('<h1>Bye Bye for Now!!!</h1>')
  }
  next()
}

module.exports = mdl_shopData;