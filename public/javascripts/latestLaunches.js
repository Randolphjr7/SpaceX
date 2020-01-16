axios
  .get("https://api.spacexdata.com/v3/launches/past")
  .then(result => {
    let data = result.data;
    // console.log(data)

    // LATEST # OF LAUNCHES
    // CURRENTLY SET TO 6
    let latestLaunches = data.slice(-6).reverse();
    // console.log("These are the last 6 ", latestLaunches)

    var missionName;
    var date;
    var video;
    var article;

    let missionsDiv = $(".lastMissions");

    // three
// VIDEO STUFF: <iframe src="https://www.youtube.com/embed/${latestLaunches[i].links.youtube_id}" class="align-self-center mr-3" frameborder="0"></iframe>
// <iframe src="https://www.youtube.com/embed/" class="align-self-center mr-3" frameborder="0"></iframe>
    missionsDiv.html("");

    for (i = 0; i < latestLaunches.length; i++) {
      





      missionsDiv.append(
        `
            <div class="media">
              <img src="${latestLaunches[i].links.mission_patch}" style="height: 200px; width: 200px; "class="align-self-center mr-3">
              <div class="media-body">
                <h1 class="mt-0 mb-1">${latestLaunches[i].mission_name}</h1>
                <h2 class="mt-0 mb-1">${latestLaunches[i].rocket.rocket_name}</h2>
                <h5 class="mt-0 mb-1">${latestLaunches[i].launch_date_utc}</h5>
                <h5 class="mt-0 mb-1">${latestLaunches[i].launch_site.site_name_long}</h5>
                <h3 class="mt-0 mb-1" style="color: green;">SUCCESS</h3>

              </div>


              <iframe src="https://www.youtube.com/embed/${latestLaunches[i].links.youtube_id}" width="225" height="200" frameborder="0"></iframe>
              
            </div>

        `
      );
    }
    
  }) // END OF .then

  .catch(err => {
    console.log("error my dude", err);
  });
