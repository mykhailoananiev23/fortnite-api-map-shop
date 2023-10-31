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

async function drawItemDetailModal(rq_id, numId) {
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
    var item_flg = await all_items.items.some((ele) => ele.name.toLowerCase() === rq_id.toLowerCase());
    var {id} = await all_items.items.find((ele)=> {
        return ele.name.toLowerCase() === rq_id.toLowerCase()
    })
    var mId = id;

    // get Item Info
    const item_res = await fetch(geturllang('https://fnlookup-api.vercel.app/api?endpoint=item&id=' + mId, 1))
    if(item_res.status !== 200){
        console.error(`Error itemFlgStt ${item_res.status}`)
    }
    const {item} = await item_res.json();

    var childItems = []

    if(item_flg && item.set !== null){
        for (let i of all_items.items) {
            if (i.set !== null) {
                if (i.set.name == item.set.name) {
                    childItems.push(i);
                }
            }
        }
    }
    // Contents grid

    if((item.type.id == "bundle") && item.grants.length > 0) {
        content += `<div style="text-align:center;overflow:hidden auto;max-height:100vh"><div class="bundle-items">`
        for (let grant of item.grants) {
            content += ` 
            <a href="/cosmetics?id=10568" class="item-icon" onclick="return modal(10568, &quot;item&quot;)">
                <div class="item-icon-img">
                    <img src="${grant.images.icon}">
                </div>
            </a>`;
        }
        content += `</div><img class="js-item-img" src="` + (item.images.icon != null ? item.images.icon : null) + `" style="display:inline-block;width:100%;max-width:960px;max-height:none;border-radius:8px" alt=""></div>`;
    }

    if(item_flg && (item.type.id != "bundle")){
        content += `<video class='item-video' muted loop autoplay playsinline data-id='${numId}' data-v='3' src='https://fnggcdn.com/items/${numId}/video.mp4?3' data-outfit='1'></video>`
    } else {

    }

    content += `<div class='fn-detail'><div>`
    item.name && (content += `<div class='fn-detail-name'>${item.name}</div>`);
    item.rarity.name && item.type.name && (content += `<div class='fn-detail-type'><span style='color:#e95eff'>${item.rarity.name}</span>${item.type.name}</div>`);
    item.price && (content += `<div class='fn-item-price'><img src='/img/vbucks.png' alt='V-Bucks'>${item.price}</div>`)
    item.description && (content += `<div class='fn-shop-text'>${item.description}</div>`)
    item.description && (content += `<div class='fn-detail-desc grey'>${item.description}</div>`)
    item.upcoming && (content += `<div class='fn-detail-desc grey'>${item.upcoming}</div>`)
    item.battlepass && (content += `<div class='fn-detail-desc grey'>`+ item.battlepassdisplayText.chapterSeason + ': ' + item.battlepassbattlePassName + (item.battlepasspage !== null ? ' - ' + item.battlepasspage : '' ) + ' (' + item.battlepasstype + ')' + `</div>`)
    content += `<div class='fn-detail-details'><table>`
    // <tr><th scope='row' class='grey'>Last seen:</th><td>${item.lastAppearance}</td></tr>
    item.releaseDate && (content += `<tr><th scope='row' class='grey'>Release date:</th><td>${item.releaseDate}</td></tr>`)
    item.lastAppearance && (content += `<tr><th scope='row' class='grey'>Last seen:</th><td>${item.lastAppearance}</td></tr>`)

    
    // shophistory
    if(item.shopHistory !== null){
        item.shopHistory && (content += `<tr class="fn-assets-header"><th scope="row" class="grey">Occurrences:</th><td>${item.shopHistory.length} <i class="arrow"></i></td></tr>`)
        content += `<tr class='fn-assets'><td colspan='2'><table><tr><th>Date</th><th>Days ago</th></tr>`
        for (let j = item.shopHistory.length - 1; j >= 0; j--) {
            let appearanceDate = item.shopHistory[j];
            var hdate = new Date(appearanceDate);
            var today = new Date();
            var dsince = Math.floor((today.getTime() - hdate.getTime()) / (1000 * 3600 * 24));
            content += `<tr><th>${appearanceDate}</th><th>`+ dsince + 'd'+ `</th></tr>`
        }
        content += `</table></td></tr>`
    }

    item.id && (content += `<tr><th scope='row' class='grey'>Last seen:</th><td>${item.lastAppearance}</td></tr>`)

    // details end
    content += `</table></div>`

    if(childItems.length > 0){
        content += `<div class='fn-detail-details'><div><div><span class='grey'>Part of the </span>${item.set.name} <pan class='grey'>set</pan></div><div class='fn-assets' style='display:block'>`
        for(childItem of childItems){
            content += `<a href='/cosmetics?id=5721' onclick='return modal(5721, "item")' class='item-icon'><div class='item-icon-img'><img src='${childItem.images.icon}' loading='lazy'></div></a>`
        }
        content += `</div></div>`
    }

    content += `</div><div class='fn-detail-space'></div></div></div>`

    return content;
}


async function mdl_itemDetail(req, res, next) {
    console.log(req.query.id)
    try {
        req.item = await drawItemDetailModal(req.query.id, req.query.num_id)
        next();
    } catch (error) {
        console.error("Error fetching data:", error);
        // res.status(500).err("")
        next()
    }
}

module.exports = mdl_itemDetail;