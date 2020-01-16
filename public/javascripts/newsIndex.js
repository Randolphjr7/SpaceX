const spaceXAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {


  

    spaceXAPI.getNews();    



})
