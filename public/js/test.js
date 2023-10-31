var crystalBall = 'https://discord.com/assets/1e183a34aa97fc91f7e6992bdd24f981.svg|46c8d137-adea4f05-5928e673-ffdcf29d';

function geturllang(url, type) {
    let t = '?';
    if (url.split('?').length > 1) {
        t = '&';
    }

    switch (type) {
        case 0: // Fortnite-API.com
            return url + t + 'language=en'
        case 1: // FortniteAPI.io
            return url + t + 'lang=en'
    }
}

async function drawItemDetailModal(id) {
    var content = ``;
    // get all items
    const all_items_res = await fetch(geturllang('https://fortniteapi.io/v2/items/list?fields=name,id,set,images', 1), {
        headers: { 'Authorization': crystalBall.split('|')[1]
    }})
    if(all_items_res.status !== 200){
        console.error(`Error itemFlgStt ${all_items_res.status}`)
    }
    const all_items = await all_items_res.json();

    // confirm items or bundle
    // var item_flg = all_items.items.some((ele) => ele.id.toLowerCase() === mId.toLowerCase());
    var item_flg = all_items.items.some((ele) => ele.name.toLowerCase() === id.toLowerCase());
    var {id} = all_items.items.find((ele)=> {
        return ele.name.toLowerCase() === id.toLowerCase()
    })
    var mId = id;

    // // get Item Info
    // const item_res = await fetch(geturllang('https://fnlookup-api.vercel.app/api?endpoint=item&id=' + mId, 1))
    // if(item_res.status !== 200){
    //     console.error(`Error itemFlgStt ${item_res.status}`)
    // }
    // const {item} = await item_res.json();

    // var childItems = []

}

drawItemDetailModal("Tricksy")