// console.log('hello world');

// console.log('d23d29774fb24f4297e0ab1948a3ac62');
// console.log('Fetcing News');

const fetchNews = async (query, page) => {
    // console.log(`Fetching news for ${query}, Page Number ${page}...`);
    // { MY API }
    var url = `https://newsapi.org/v2/everything?q=${query}&page=${page}&from=2023-03-24&sortBy=publishedAt&apiKey=d23d29774fb24f4297e0ab1948a3ac62`;

    // { REQUEST }
    let req = new Request(url);
    let a = await fetch(req);
    let response = await a.json();
    // console.log(JSON.stringify(response));

    // { SAVED DATA }
    // let response = { "status": "ok", "totalResults": 52072, "articles": [{ "source": { "id": null, "name": "Lifehacker.com" }, "author": "Jake Peterson", "title": "Finally, There’s an Easy Way to Reduce Background Noise on Your iPhone", "description": "Phone calls sound like crap. They sound better than they used to, but if you need to rely on a special alphabet system for separating B’s from D’s, it’s not looking great. A new iPhone feature aims to tackle this problem by boosting your voice and reducing ba…", "url": "https://lifehacker.com/finally-there-s-an-easy-way-to-reduce-background-noise-1850262365", "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/7e5482bf0e90a4c1c9989cdac92ce0fb.jpg", "publishedAt": "2023-03-27T13:30:00Z", "content": "Phone calls sound like crap. They sound better than they used to, but if you need to rely on a special alphabet system for separating Bs from Ds, its not looking great. A new iPhone feature aims to t… [+1612 chars]" }, { "source": { "id": null, "name": "Lifehacker.com" }, "author": "Jake Peterson", "title": "Here's How Much a 'Max' Subscription Will Cost You After May 23", "description": "There’s a new name in the sea of streaming options, as HBO Max and Discovery Plus are combining platforms. Netflix, Hulu, Prime Video, Disney+, Apple TV+, and now...Max. Fortunately, it might not cost extra to subscribe, seeing as its a combination of two exi…", "url": "https://lifehacker.com/heres-how-much-a-max-subscription-will-cost-you-after-m-1850329419", "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/60edc8ca94fef5cde3d9fd78831303a6.png", "publishedAt": "2023-04-13T12:00:00Z", "content": "Theres a new name in the sea of streaming options, as HBO Max and Discovery Plus are combining platforms. Netflix, Hulu, Prime Video, Disney+, Apple TV+, and now...Max. Fortunately, it might not cost… [+2608 chars]" }, { "source": { "id": "engadget", "name": "Engadget" }, "author": "Jeff Dunn", "title": "The Apple Watch SE drops back to $219", "description": "The Apple Watch SE is back on sale for $219 at Amazon and Best Buy, bringing what was already one of the better values on the wearable market within $10 of the lowest price we've tracked. Though we've seen this deal a few times since the SE launched last Sept…", "url": "https://www.engadget.com/the-apple-watch-se-drops-back-to-219-144032655.html", "urlToImage": "https://s.yimg.com/uu/api/res/1.2/W1NIL9wNjhSl6YHebTaADQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-09/c9c5f720-346c-11ed-bfff-3db68993c49c.cf.jpg", "publishedAt": "2023-04-03T14:40:32Z", "content": "All products recommended by Engadget are selected by our editorial team, independent of our parent company. Some of our stories include affiliate links. If you buy something through one of these link… [+2035 chars]" }, { "source": { "id": "engadget", "name": "Engadget" }, "author": "Jon Fingas", "title": "Apple accused of illegally firing pro-union workers", "description": "Apple is once again facing accusations of cracking down on union organizers. The Communications Workers of America union (CWA) has filed charges with the National Labor Relations Board (NLRB) asserting that Apple illegally intimidated and fired workers at Hou…", "url": "https://www.engadget.com/apple-accused-of-illegally-firing-pro-union-workers-140058541.html", "urlToImage": "https://s.yimg.com/uu/api/res/1.2/JhU.VhcCl6NyVdW06dkC8A--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-11/55121710-6cb6-11ed-bece-b7cffd6e7139.cf.jpg", "publishedAt": "2023-03-28T14:00:58Z", "content": "Apple is once again facing accusations of cracking down on union organizers. The Communications Workers of America union (CWA) has filed charges with the National Labor Relations Board (NLRB) asserti… [+1855 chars]" }, { "source": { "id": "engadget", "name": "Engadget" }, "author": "Steve Dent", "title": "Apple Music bug on iOS is reportedly mixing up people's playlists", "description": "Apple Music users on iOS are highlighting a fairly serious bug that is causing other people's playlists and songs to appear in their libraries, according to multiple Redditors. On top of that, some users have complained that their own playlists have outright …", "url": "https://www.engadget.com/apple-music-bug-on-ios-is-reportedly-mixing-up-peoples-playlists-073003381.html", "urlToImage": "https://s.yimg.com/uu/api/res/1.2/nI1OvVbO7jgK9vgdLUC2zA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-03/55f97d90-c93f-11ed-a3ff-26d7308c2770.cf.jpg", "publishedAt": "2023-03-23T10:30:03Z", "content": "Apple Music users on iOS are highlighting a fairly serious bug that is causing other people's playlists and songs to appear in their libraries, according to multiple Redditors. On top of that, some u… [+866 chars]" }, { "source": { "id": "engadget", "name": "Engadget" }, "author": "Igor Bonifacic", "title": "Apple reportedly held anti-union meetings at all of its US stores", "description": "Apple appears to have taken its most aggressive step yet to warn its retail employees against unionizing. According to Bloomberg\r\n, the company recently held meetings at all of its roughly 270 stores across the United States. The tone of the gatherings was “c…", "url": "https://www.engadget.com/apple-reportedly-held-anti-union-meetings-at-all-of-its-us-stores-223528059.html", "urlToImage": "https://s.yimg.com/uu/api/res/1.2/WTJvlAHiTzyWypyt60hFWA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-02/4f8f89f0-90ff-11ec-a7f2-b9590c79df0c.cf.jpg", "publishedAt": "2023-04-09T22:35:28Z", "content": "Apple appears to have taken its most aggressive step yet to warn its retail employees against unionizing. According to Bloomberg, the company recently held meetings at all of its roughly 270 stores a… [+2102 chars]" }, { "source": { "id": "engadget", "name": "Engadget" }, "author": "Will Shanklin", "title": "Latest Apple headset rumors say it’ll include VR workouts and sports", "description": "Apple is reportedly readying a wide array of apps and services for its upcoming mixed reality headset, according toBloomberg’s Mark Gurman. The company appears to be moving forward with plans to announce its first VR / AR headset at its Worldwide Developers’ …", "url": "https://www.engadget.com/latest-apple-headset-rumors-say-itll-include-vr-workouts-and-sports-192316389.html", "urlToImage": "https://s.yimg.com/uu/api/res/1.2/p8m4hAcruwmCS64mu85RjQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/370e8300-de19-11ed-8df5-805de2a747af.cf.jpg", "publishedAt": "2023-04-18T19:23:16Z", "content": "Apple is reportedly readying a wide array of apps and services for its upcoming mixed reality headset, according toBloombergs Mark Gurman. The company appears to be moving forward with plans to annou… [+4241 chars]" }, { "source": { "id": "engadget", "name": "Engadget" }, "author": "Sean Buckley", "title": "iOS 16.4 is out with bug fixes and a ton of new emoji", "description": "If you own an Apple device, check your notifications: Apple has officially released updates for each of its major Platforms. The MacOS 13.3, and iOS / iPadOS 16.4 and WatchOS 9.4 updates include 21 new emoji, improved voice isolation for calls and a smatterin…", "url": "https://www.engadget.com/ios-164-is-out-with-bug-fixes-and-a-ton-of-new-emoji-181331049.html", "urlToImage": "https://s.yimg.com/uu/api/res/1.2/AaszvJX.1SQsIYxF9OCgLA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-03/0346b8e0-ccca-11ed-9e95-0b9981748702.cf.jpg", "publishedAt": "2023-03-27T18:13:31Z", "content": "If you own an Apple device, check your notifications: Apple has officially released updates for each of its major Platforms. The MacOS 13.3, and iOS / iPadOS 16.4 and WatchOS 9.4 updates include 21 n… [+1399 chars]" }, { "source": { "id": "engadget", "name": "Engadget" }, "author": "Jon Fingas", "title": "Apple's Weather app is broken for many users", "description": "You might not want to rely on Apple's built-in Weather app to see if you need a jacket today. As Apple's status page confirms, many users are reporting that the app isn't loading information on all of the company's platforms, including iOS and macOS. We've as…", "url": "https://www.engadget.com/apples-weather-app-is-broken-for-many-users-135409192.html", "urlToImage": "https://s.yimg.com/uu/api/res/1.2/PiECvRp_B8vyegQS0DfjjA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2021-06/40e40f60-ca04-11eb-9777-405b78e49260.cf.jpg", "publishedAt": "2023-04-04T13:54:09Z", "content": "You might not want to rely on Apple's built-in Weather app to see if you need a jacket today. As Apple's status page confirms, many users are reporting that the app isn't loading information on all o… [+1184 chars]" }, { "source": { "id": "engadget", "name": "Engadget" }, "author": "Igor Bonifacic", "title": "Developer logs suggest Apple’s long-rumored 15-inch MacBook Air could arrive soon", "description": "Apple’s forthcoming 15-inch MacBook Air\r\n will feature a processor “on par” with the company’s current M2 chip. According to Bloomberg\r\n, Apple recently began testing the laptop to ensure its compatibility with third-party App Store apps, something the compan…", "url": "https://www.engadget.com/developer-logs-suggest-apples-long-rumored-15-inch-macbook-air-could-arrive-soon-154131810.html", "urlToImage": "https://s.yimg.com/uu/api/res/1.2/hLpCdikFYxx6bCnt3a9jgA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-07/8f5b30d4-0318-11ed-9ffb-0933759ff154.cf.jpg", "publishedAt": "2023-04-15T15:41:31Z", "content": "Apples forthcoming 15-inch MacBook Air\r\n will feature a processor on par with the companys current M2 chip. According to Bloomberg\r\n, Apple recently began testing the laptop to ensure its compatibili… [+1089 chars]" }, { "source": { "id": "engadget", "name": "Engadget" }, "author": "Jon Fingas", "title": "Apple's third-gen AirPods are back on sale for $150", "description": "Now that spring is making outdoor walks more of a pleasure, you might want some wireless earbuds — and thankfully, Amazon is making them more affordable. The retailer is again selling Apple's third-generation AirPods for $150, or $20 off. That's a record-low …", "url": "https://www.engadget.com/apples-third-gen-airpods-are-back-on-sale-for-150-131553863.html", "urlToImage": "https://s.yimg.com/uu/api/res/1.2/dRCWtH4PB.H3rbF82OuYZg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-07/86691650-0c59-11ed-aeea-f62a1d412790.cf.jpg", "publishedAt": "2023-04-04T13:15:53Z", "content": "All products recommended by Engadget are selected by our editorial team, independent of our parent company. Some of our stories include affiliate links. If you buy something through one of these link… [+1489 chars]" }, { "source": { "id": "engadget", "name": "Engadget" }, "author": "Jeff Dunn", "title": "The best music streaming services in 2023", "description": "It’s difficult to pinpoint the best music streaming service for everyone. Most of the popular options available today hit on the essentials: a giant and diverse library of music that you can access à la carte, sort into playlists, download for offline listeni…", "url": "https://www.engadget.com/best-music-streaming-service-130046189.html", "urlToImage": "https://s.yimg.com/uu/api/res/1.2/fKCyDewwHqsZ9oAkSIXVfw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/d5d49740-d3c9-11ed-b3ef-0f77a048a0d1.cf.jpg", "publishedAt": "2023-04-06T13:00:46Z", "content": "All products recommended by Engadget are selected by our editorial team, independent of our parent company. Some of our stories include affiliate links. If you buy something through one of these link… [+18174 chars]" }] }
    console.log(response);

    let str = ""
    resultCount.innerHTML = response.totalResults;

    for (let item of response.articles) {
        str = str + `<div class="card my-4 mx-2 bg-dark text-white p-3" style="width: 18rem;height:500px">
        <img height="184" src="${item.urlToImage}" class="card-img-top" alt="...">
        <div class="card-body align-items-center d-flex justify-content-center row" >
            <h5 class="card-title">${item.title.slice(0, 45).concat('...')}</h5>
            <p class="card-text" style=""> ${item.description.slice(0, 143).concat('...')} </p>
            <a href="${item.url}" target="_blank" class="btn btn-primary">Read Full Article</a>
        </div>
    </div>`
    }
    document.querySelector('.content').innerHTML = str;
}

fetchNews('all', 1);


let currentQuery = "all";
let currentPage = 1;

search.addEventListener('click', (e) => {
    e.preventDefault();
    let query = searchInput.value
    currentQuery = query
    fetchNews(query, 1);
});

prev.addEventListener('click', (e) => {
    e.preventDefault()
    if (currentPage > 1) {
        currentPage = currentPage - 1;
        // currentQuery = query;
        fetchNews(currentQuery, currentPage);
    }
    // let query = searchInput.value;

});

next.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage = currentPage + 1;
    // currentQuery = query;
    fetchNews(currentQuery, currentPage);
});


home.addEventListener('click', () => {
    fetchNews('all', currentPage);
});
sports.addEventListener('click', () => {
    fetchNews('sports', currentPage);
});
weather.addEventListener('click', () => {
    fetchNews('weather', currentPage);
});
technology.addEventListener('click', () => {
    fetchNews('technology', currentPage);
});