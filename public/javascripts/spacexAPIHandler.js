class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  /////////////////////////////////GET LIST OF ROCKETS//////////////////////////////////////////
  getFullListRockets() {
    const container = $(".rockets-container");

    axios
      .get("https://api.spacexdata.com/v3/rockets")
      .then(result => {
        console.log("the object is: ", result);
        container.html("");

        // display the data
        result.data.map(eachRocket => {
          let list = `
        <div class="rocket-info">
            <div class="name"> Rocket Id: <span>${eachRocket.id}</span></div>
            <div class="name">Rocket Name: <span>${
              eachRocket.rocket_name
            }</span></div>
            <div class="occupation">Description: <span>${
              eachRocket.description
            }</span></div>
            <div class="image">  <img src="${
              eachRocket.flickr_images[0]
            }"> </div>
         </div>         
        `;

          // append to container
          container.append(list);
        });
      })
      .catch(err => {
        console.log("An error occure during getFullList()", err);
      });
  }

  /////////////////////////////////////GET ONE ROCKET//////////////////////////////////////
  getOneRocket() {
    const container = $(".rockets-container");
    const theId = $("input[name=rocket-id]").val();

    axios
      .get(`https://api.spacexdata.com/v3/rockets/${theId}`)
      .then(theRocket => {
        /*       console.log("the single rocket is: ", theRocket);
      console.log("the rocket id: ", theRocket.data.id);
      console.log("the rocket name is: ", theRocket.data.rocket_name);
      console.log("the flicker: ", theRocket.data.flickr_images[0]); */
        container.html("");

        // Display information
        let singleRocket = `
        <div class="rocket-info">
          <div class="name">Rocket ID:  <span>${theRocket.data.id}</span></div>
          <div class="name">Rocket NAME: <span>${
            theRocket.data.rocket_name
          }<span></div>
          <div class="weapon">Rocket Description: <span>${
            theRocket.data.description
          }</span></div>
          <div class="image"> <img src="${
            theRocket.data.flickr_images[0]
          }"> </div>
        </div>
      `;
        container.append(singleRocket);
        $("input[name=rocket-id").val("");
      });
  }

  ///////////////////////////////////GET FULL LIST OF MISSIONS///////////////////////////////n
  getFullListMissions() {
    const container = $(".missions-container");

    axios
      .get("https://api.spacexdata.com/v3/launches/past")
      .then(result => {
        console.log("the mission object is: ", result);
        container.html("");

        // display the data
        result.data.map(eachMission => {
          let list = `
        <div class="mission-info">
            <div class="name"><span><h2>${eachMission.mission_name}</h2></span></div>
            
            <div class="site"><span>${eachMission.launch_site.site_name_long}</span></div>
            <div class="date"><span>${eachMission.launch_date_utc}</span></div>
            <div class="details"><span>${eachMission.details}</span></div>
            <div class="patch"><img src="${eachMission.links.mission_patch}"></div>
            <div class="wikipedia"><span><a href="${eachMission.links.wikipedia}">Article</a></span></div>
           
         </div>         
        `;
          // append to container
          container.append(list);
        });
      })
      .catch(err => {
        console.log("An error occure during getFullListMissions()", err);
      });
  }

  ////////////////////////////////////GET ONE MISSION/////////////////////////////////////////
  getOneMission() {
    const container = $(".missions-container");
    const theId = $("input[name=mission-id]").val();

    axios
      .get(`https://api.spacexdata.com/v3/missions/${theId}`)
      .then(singleMission => {
        console.log(
          "the single mission name is: ",
          singleMission.data.mission_name
        );

        container.html("");

        // Display information
        let mission = `
      <div class="mission-info">
          <div class="name"><span><h2>${singleMission.data.mission_name}</h2></span></div>
          <div class="wikipedia"> <span><a href="${singleMission.data.wikipedia}">${singleMission.data.wikipedia}</a></span></div>
          <div class="twitter"> <span><a href="${singleMission.data.twitter}">${singleMission.data.twitter}</a></span></div>
          <div class="description"> <span>${singleMission.data.description}</span> </div>
       </div>         
      `;
        container.append(mission);
        $("input[name=mission-id").val("");
      })
      .catch(err => {
        console.log("An error occure during getOneMission()", err);
      });
  }

  ////////////////////////////////////////GET NEWS///////////////////////////////////////////////
  getNews() {
    const container = $(".news-container");

    axios
      .get("https://spaceflightnewsapi.net/api/v1/articles")
      .then(result => {
        console.log("the news object is: ", result);
        console.log("the news.data is: ", result.data);
        console.log("the news.data.docs is: ", result.data.docs);
        console.log(
          "the newsdata.data.docs.title is: ",
          result.data.docs.title
        );

        container.html("");

        // display the data
        result.data.docs.map(eachNews => {
          console.log("eachNews.title -> ", eachNews.title);

          let list = `
        <div class="news-info">
            <div class="title"> <span><h2>${eachNews.title}</h2></span></div>
            <div class="site">Site: <span>${eachNews.news_site_long}</span></div>
            <div class="url"> url: <span><a href="${eachNews.url}">${eachNews.url}</a></span></div>
            <div class="news-image"> <img src="${eachNews.featured_image}"> </div>
         </div>         
        `;
          // append to container
          container.append(list);
        });
      })
      .catch(err => {
        console.log("An error occure during getNews()", err);
      });
  }
}
