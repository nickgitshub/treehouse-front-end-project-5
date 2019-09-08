

let photoCaptions = [
	{
		title:"Hay Bales",
		caption:"I love hay bales. Took this snap on a drive through the countryside past some straw fields."
	},

	{
		title: "Lake",
		caption: "The lake was so calm today. We had a great view of the snow on the mountains from here."
	},
	{
		title: "Canyon",
		caption: "I hiked to the top of the mountain and got this picture of the canyon and trees below."
	},
	{
		title: "Iceberg",
		caption: "It was amazing to see an iceberg up close, it was so cold but didn’t snow today."
	},
	{
		title:"Desert",
		caption: "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons."
	},
	{
		title:"Fall",
		caption: "Fall is coming, I love when the leaves on the trees start to change color."
	},
	{
		title:"Plantation",
		caption: "I drove past this plantation yesterday, everything is so green!"
	},
	{
		title: "Dunes",
		caption: "My summer vacation to the Oregon Coast. I love the sandy dunes!"
	},
	{
		title: "Countryside Lane",
		caption: "We enjoyed a quiet stroll down this countryside lane."
	},
	{
		title: "Sunset",
		caption: "Sunset at the coast! The sky turned a lovely shade of orange."
	},
	{
		title: "Cave",
		caption: "I did a tour of a cave today and the view of the landscape below was breathtaking."
	},
	{
		title: "Bluebells",
		caption: "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in."
	}

]

//addPictures() built to add the HTML needed for pictures that are identified with searchFunction()
//searchFunction() builds an array of popCaptions indices that match the search
//addPictures() converts that output array into HTML pictures

function addPictures(arr){
	var $mainSelector = $("#photo-gallery"); 
	var html = ""; 
	var jpgText = ""; 
	var jpgVar;
	var myCaption = ""; 

	for (n=0; n<arr.length; n++){
		myCaption = photoCaptions[arr[n]].caption

		jpgVar = arr[n] + 1
		if (jpgVar < 10){
			jpgText = "0" + jpgVar + ".jpg"
		} 
		else if(jpgVar >-10){
			jpgText = jpgVar + ".jpg"
		}

		html += "<a class=\"thumbnail\" href=\"photos/" + jpgText +"\" data-lightbox=\"photoGallery\" data-title=\"" + myCaption + "\">" 
		html += "<img id= \"" + photoCaptions[arr[n]].title + "\" " + "src=\"photos/thumbnails/" + jpgText +"\">";
		html += "</a>"
	}

	$mainSelector.html(html)

}

//Calling addPictures before searFunction to make sure the page loads with pictures
addPictures([0,1,2,3,4,5,6,7,8,9,10,11])

function searchFunction(){

	var input, filter, txtValue; 
	var indexArr = []; 
	input = document.getElementById("searchInput");
	filter = input.value.toUpperCase(); 
	

	for (i=0; i<photoCaptions.length; i++){
		txtValue = photoCaptions[i].caption.toUpperCase()
		if(txtValue.indexOf(filter)>-1){
			indexArr.push(i)
		}
	}

	addPictures(indexArr);

}

//Modifying Lightbox
lightbox.option({
      'resizeDuration': 200,
      'fadeDuration': 600,
      'wrapAround': true,
      'disableScrolling': true,
      'maxWidth': 1920, 
      'maxHeight': 1000,
      'fitImagesInViewport': true
    })

