var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};

  camera = document.getElementById("camera");




 
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0ik6tWfR3/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
     
  function check()
  {

    img = document.getElementById('output')
    classifier.classify(img, gotResult);
  }


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    object_name = document.getElementById("result_object_name").innerHTML = "Name Of Constellation: " + results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
 
}

