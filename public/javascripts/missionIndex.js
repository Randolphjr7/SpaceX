const spaceXAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {


  

    spaceXAPI.getFullListMissions();    
  
  
  document.getElementById('fetch-mission').onclick = function(){
    spaceXAPI.getOneMission();    
  }

})
