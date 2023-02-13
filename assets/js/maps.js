// The following example creates complex markers to indicate beaches near
// Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
// to the base of the flagpole.
function initMap() {
    const map = new google.maps.Map(document.getElementById("maps"), {
      zoom: 10,
      center: { lat: -33.9, lng: 151.2 },
    });
  
    setMarkers(map);
}


// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
const beaches = [
    ["Bondi Beach", -33.890542, 151.274856, 4],
    ["Coogee Beach", -33.923036, 151.259052, 5],
    ["Cronulla Beach", -34.028249, 151.157507, 3],
    ["Manly Beach", -33.80010128657071, 151.28747820854187, 2],
    ["Maroubra Beach", -33.950198, 151.259302, 1],
];

function setMarkers(map) {
    // Adds markers to the map.
    // Marker sizes are expressed as a Size of X,Y where the origin of the image
    // (0,0) is located in the top left of the image.
    // Origins, anchor positions and coordinates of the marker increase in the X
    // direction to the right and in the Y direction down.
    const image = {
        url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(20, 32),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32),
    };
    // Shapes define the clickable region of the icon. The type defines an HTML
    // <area> element 'poly' which traces out a polygon as a series of X,Y points.
    // The final coordinate closes the poly by connecting to the first coordinate.
    const shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: "poly",
    };
  
    for (let i = 0; i < beaches.length; i++) {
        var div1 = document.createElement("div") ;
        div1.setAttribute("class","row bg-white p-2 content") ;

        var div2 = document.createElement("div") ;
        div2.setAttribute("class","col-md-12") ;
        
        var div3 = document.createElement("div") ;
        div3.setAttribute("class","media") ;

        var img = document.createElement("img") ;
        img.setAttribute("src","https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/11/20/1120777802.jpeg")
        img.setAttribute("class","mr-3")

        var div4 = document.createElement("div") ;
        div4.setAttribute("class","media-body");
        
        var h = document.createElement("h5") ;
        h.appendChild(document.createTextNode("Media heading")) ;

        div4.appendChild(h) ;
        div3.appendChild(img) ;
        div3.appendChild(div4) ;

        div2.appendChild(div3)
        div1.appendChild(div2) ;


        document.getElementById("boite").appendChild(div1)

        {/* var mybtn = document.createElement("button") ;
        mybtn.appendChild(document.createTextNode("Clicke me ! I'm the data number: "+i))
        document.getElementById("boite").appendChild(mybtn) */}
        
        const beach = beaches[i];
        

        let marker = new google.maps.Marker({
            position: { lat: beach[1], lng: beach[2] },
            map,
            icon: image,
            shape: shape,
            title: beach[0],
            zIndex: beach[3],
        });

        

        // var myContent = document.getElementsByClassName("content")
        // myContent.each(function() {
        //     this.addEventListener("mouseenter",function(e) {
        //         e.stopImmediatePropagation()
        //         var newIcon = new google.maps.MarkerImage(
        //             marker.icon.url, 
        //             new google.maps.Size(25,37), 
        //             new google.maps.Point(0, 0), 
        //             new google.maps.Point(0, 32), 
        //             new google.maps.Size(25,37)
        //         );
        //         marker.setIcon(newIcon);
        //     })

        //     mybtn.addEventListener("mouseleave",function() {
        //         var newIcon = new google.maps.MarkerImage(
        //             marker.icon.url, 
        //             new google.maps.Size(20,32), 
        //             new google.maps.Point(0, 0), 
        //             new google.maps.Point(0, 32), 
        //             new google.maps.Size(20,32)
        //         );
        //         marker.setIcon(newIcon);
        //     })
        // })
        

        

        google.maps.event.addListener(marker, "mouseover",function() {
            var newIcon = new google.maps.MarkerImage(
                this.icon.url, 
                new google.maps.Size(25,37), 
                new google.maps.Point(0, 0), 
                new google.maps.Point(0, 32), 
                new google.maps.Size(25,37)
            );
            this.setIcon(newIcon);
        })

        google.maps.event.addListener(marker, "mouseout",function() {
            var newIcon = new google.maps.MarkerImage(
                this.icon.url, 
                new google.maps.Size(20,32), 
                new google.maps.Point(0, 0), 
                new google.maps.Point(0, 32), 
                new google.maps.Size(20,32)
            );
            this.setIcon(newIcon);
        })
    }
    
}






window.initMap = initMap;
  
  
