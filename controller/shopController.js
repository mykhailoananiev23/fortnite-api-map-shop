const apiUrl = "https://fnlookup-api.vercel.app/api?endpoint=shop&lang=en";

async function getDataFromAPI() {
  try {
    const response = await fetch(apiUrl); // Replace with the actual API URL
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.shop;
    // return data.data.featured.entries;
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
    if(item.mainId == null){
      continue;
    }
    var stt = 0;
    if (i == 0) {
      res.push(items[i].section.name + items[i].section.landingPriority);
    }
    for (let j = 0; j < res.length; j++) {
      const idx = res[j];
      if (idx == items[i].section.name + items[i].section.landingPriority) {
        stt++;
      }
    }
    if (stt == 0) {
      res.push(items[i].section.name + items[i].section.landingPriority);
    }
  }

  var result = [];
  for (var i = 0; i < res.length; i++) {
    var tmp_arr = [];
    for (var j = 0; j < items.length; j++) {
      if (res[i] == items[j].section.name + items[j].section.landingPriority) {
        tmp_arr.push(items[j]);
      }
    }
    result.push(tmp_arr);
  }
  return result;
}

exports.getShopPage = async function (req, res) {
  var items = await landingArr();
  try {
    res.render("shop", {
      title: "BOMBFN",
      filterStt: "landing",
      url:'/shop',
      cards: items,
    });
  } catch (error) {
    console.log("Error shopController/getShopPage");
  }
};

exports.getWebmanifest = function (req, res) {
  res.json({
    name: "Fortnite.GG",
    short_name: "Fortnite.GG",
    start_url: "https://localhost:8000",
    icons: [
      {
        src: "https://localhost:8000/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://localhost:8000/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#2f3136",
    background_color: "#2f3136",
    display: "standalone",
    categories: ["games", "entertainment"],
    scope: "https://localhost:8000/",
  });
};

exports.getItemDetails = async function (req, res) {
  res.send(req.item);
};

exports.getMapPage = async function (req, res) {
  res.render("index", {
    title: "BOMBFN",
    url:'/index',
  });
};

exports.getCosmeticsPage = function (req, res) {
  res.render("cosmetics", {
    title: "BOMBFN",
    filter: "default",
    item: "",
    url:'/cosmetics',
  });
};

exports.getAboutPage = function (req, res) {
  res.render("about", {
    title: "BOMBFN",
    url:'/about',
  })
}

exports.getPrivacyPage = function (req, res) {
  res.render("privacy", {
    title: "BOMBFN",
    url:'/index',
  })
}

exports.getTermsPage = function (req, res) {
  res.render("terms", {
    title: "BOMBFN",
    url:'/index',
  })
}

exports.getContactUs = function (req, res) {
  res.render("contact", {
    title: "BOMBFN",
    url:'/index',
  })
}