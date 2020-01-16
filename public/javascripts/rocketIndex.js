axios
  .get("https://api.spacexdata.com/v3/rockets")
  .then(result => {
    let data = result.data;

    //   var details;
    //   var name;
    //   var description;

    // for (i = 0; i < data.length; i++) {
    //   var details = data[i].details;
    //   var name = data[i].rocket_name;
    //   var description = data[i].description;
    // }

    f1 = data[0];
    f9 = data[1];
    fh = data[2];
    bfr = data[3];

    // ---------------------- FALCON 1 -----------------------
    let f1Name = f1.rocket_name;
    let f1Cost = f1.cost_per_launch;
    let f1Description = f1.description;

    let f1FirstLaunch = f1.first_flight;
    let f1Height = f1.height.feet;
    let f1Diameter = f1.diameter.feet;
    let f1Mass = f1.mass.lb;
    let f1Payloads = f1.payload_weights;
    let f1PayloadName = f1.payload_weights[0].name;
    let f1PayloadLbs = f1.payload_weights[0].lb;

    // APPEND
    $(".f1").html(`
      <div class="f1">
          <img src="https://spacexmissionwatch.com/static/16f013f76f1744544427d97bde6938ce/02ed2/falcon-1.webp">
          <h2>${f1Name}</h2>
      </div>

      <!-- SPECS MODAL -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#f1">
  SPECS
</button>

<!-- Modal -->
<div class="modal fade" id="f1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalCenterTitle">${f1Name}</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h4>First Launch: ${f1FirstLaunch}</h4>
        <h4>Height: ${f1Height} feet</h4>
        <h4>Diameter: ${f1Diameter} feet</h4>
        <h4>Mass: ${f1Mass} lbs</h4>
        <h4>${f1PayloadName + " Capacity: " + f1PayloadLbs + "lbs"}</h4>
        <h6>${f1Description}</h6>
        <h4>$${f1Cost} Dollars</h4>
      </div>
    </div>
  </div>
</div>

`);

    // ---------------------- FALCON 9 -----------------------
    let f9Name = f9.rocket_name;
    let f9Cost = f9.cost_per_launch;
    let f9Description = f9.description;

    let f9FirstLaunch = f9.first_flight;
    let f9Height = f9.height.feet;
    let f9Diameter = f9.diameter.feet;
    let f9Mass = f9.mass.lb;
    let f9Payloads = f9.payload_weights;
    let f9PayloadName = f9.payload_weights[0].name;
    let f9PayloadLbs = f9.payload_weights[0].lb;

    // APPEND
    $(".f9").html(`
    <div class="f9">
      <img src="https://spacexmissionwatch.com/static/be50af34c1b93d0deaff9b72b0af7c3f/b9575/falcon-9.webp">
      <h2>${f9Name}</h2>
    

    
    <!-- SPECS MODAL -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#f9">
  SPECS
</button>

<!-- Modal -->
<div class="modal fade" id="f9" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalCenterTitle">${f9Name}</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h4>First Launch: ${f9FirstLaunch}</h4>
        <h4>Height: ${f9Height} feet</h4>
        <h4>Diameter: ${f9Diameter} feet</h4>
        <h4>Mass: ${f9Mass} lbs</h4>
        <h4>${f9PayloadName + " Capacity: " + f9PayloadLbs + "lbs"}</h4>
        <h6>${f9Description}</h6>
        <h4>$${f9Cost} Dollars</h4>
        
      </div>
    </div>
  </div>
</div>

</div>
    `);

    // ---------------------- FALCON HEAVY -----------------------
    let fhName = fh.rocket_name;
    let fhCost = fh.cost_per_launch;
    let fhDescription = fh.description;

    let fhFirstLaunch = fh.first_flight;
    let fhHeight = fh.height.feet;
    let fhDiameter = fh.diameter.feet;
    let fhMass = fh.mass.lb;
    let fhPayloads = fh.payload_weights;
    let fhPayloadName = fh.payload_weights[0].name;
    let fhPayloadLbs = fh.payload_weights[0].lb;

    // APPEND
    $(".fh").html(`
    
    <div class="fh">
      <img src="https://spacexmissionwatch.com/static/2ad3bb3851e4a4d0300c0e6540632693/64c4d/falcon-heavy.webp">
      <h2>${fhName}</h2>
    </div>

    <!-- SPECS MODAL -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#fh">
  SPECS
</button>

<!-- Modal -->
<div class="modal fade" id="fh" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalCenterTitle">${fhName}</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h4>First Launch: ${fhFirstLaunch}</h4>
        <h4>Height: ${fhHeight} feet</h4>
        <h4>Diameter: ${fhDiameter} feet</h4>
        <h4>Mass: ${fhMass} lbs</h4>
        <h4>${fhPayloadName + " Capacity: " + fhPayloadLbs + "lbs"}</h4>
        <h6>${fhDescription}</h6>
        <h4>$${fhCost} Dollars</h4>
      </div>
    </div>
  </div>
</div>
    
    `);

    // ---------------------- BIG FALCON ROCKET -----------------------
    let bfrName = bfr.rocket_name;
    let bfrCost = bfr.cost_per_launch;
    let bfrDescription = bfr.description;

    let bfrFirstLaunch = bfr.first_flight;
    let bfrHeight = bfr.height.feet;
    let bfrDiameter = bfr.diameter.feet;
    let bfrMass = bfr.mass.lb;
    let bfrPayloadName = bfr.payload_weights[0].name;
    let bfrPayloadLbs = bfr.payload_weights[0].lb;

    // APPEND
    $(".bfr").html(`
    
    <div class="fh">
      <img src="https://spacexmissionwatch.com/static/bfc94f6d800ef5afa1b4e60c39b5a1be/b9575/bfr.webp" style="height: 2600px">
      <h2>${bfrName}</h2>
    </div>

 

<!-- SPECS MODAL -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#bfr">
  SPECS
</button>

<!-- Modal -->
<div class="modal fade" id="bfr" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalCenterTitle">${bfrName}</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h4>First Launch: ${bfrFirstLaunch}</h4>
        <h4>Height: ${bfrHeight} feet</h4>
        <h4>Diameter: ${bfrDiameter} feet</h4>
        <h4>Mass: ${bfrMass} lbs</h4>
        <h4>${bfrPayloadName + " Capacity: " + bfrPayloadLbs + "lbs"}</h4>
        <h6>${bfrDescription}</h6>
        <h4>$${bfrCost} Dollars</h4>
      </div>
    </div>
  </div>
</div>

  
    `);
  }) // END OF .THEN
  .catch(err => {
    console.log("Error my dude", err);
  }); // END OF .CATCH

$(document).ready(function() {
  setTimeout(() => {
    $("html,body").animate({ scrollTop: $(`#rocketInfo`).offset().top }, 900);
  }, 1000);

  // window.scrollTo(0, document.querySelector("#rocketContainer").scrollHeight);

  // document
  //   .getElementById("rocketInfo")
  //   .scrollIntoView({ block: "start", behavior: "smooth" });

  // $("#rocketInfo").animatedScroll({ easing: "easeOutExpo" });
  return false;
});
