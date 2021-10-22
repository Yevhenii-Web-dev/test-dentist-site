function ibg() {

   let ibg = document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}

ibg();



// Initialize and add the map
function initMap() {
   // The location of Uluru
   const uluru = { lat: 49.22053864328574, lng: 28.449197397577574 };
   // The map, centered at Uluru
   const map = new google.maps.Map(document.getElementById("item__map"), {
      zoom: 15,
      center: uluru,
   });
   // The marker, positioned at Uluru
   const marker = new google.maps.Marker({
      position: uluru,
      map: map,
      title: `бульвар Свободи, 8, Вінниця, Вінницька область, Украина, 21000  ІМПЛ+`
   });

   const info = new google.maps.infoWindow({

   })

   marker.addEventListener('click', () => {
      info.open(myMap, marker)
   })
}