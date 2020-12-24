let img = []; // Declare variable 'img'.
//var numberOfFiles = 15
//var startNumbers = [1,10,18,27,35,43,52,60,64,68,77,85,89,94,102,110,119,123,127,135,144,151,158,164,169,177,183,193,199,216]
//var startNumbers = [1,16,35,53,68,83,98,113,128,143,158,173,188,203,218,239,259,274,289,302]
//var startNumbers = [36,45]
//var startNumbers = [1,23]
//var startNumbers = [1,26]
//var startNumbers = [106,150]
var startNumbers;
var startNumbersList = [[199,214],[98,113],[106,160],[1,23],[36,44],[1,26],[1,14],[1,7]]
var numberOfFiles = 0
var cnv
var factor
var smileSize
let sel;
var newSel;
var isLoading
var sourceP
var sources = ["https://www.youtube.com/watch?v=1on5H_kqlFs","https://www.youtube.com/watch?v=HJaM5JtYYGw","https://www.youtube.com/watch?v=-D3xiFj1ihE","https://www.youtube.com/watch?v=ylhkUjQWIFA","https://www.youtube.com/watch?v=gQCovPvJjvI","https://www.youtube.com/watch?v=RAmCn5jpOzc","https://www.youtube.com/watch?v=f5_L8p0FwSk"]
function preload(){
  // for (var j = 0; j < startNumbersList.length;j++){

  
  //   for(var i = startNumbersList[j][0]; i < startNumbersList[j][1];i++){
  //    loadImage('./assets/flowers' + j + '/filename_' + i + '.jpg')
      
  //   }
    
  // }
}
async function test() {
 
}
function setup() {
     cnv = createCanvas(Math.min(window.innerHeight-300,window.innerWidth-50),Math.min(window.innerHeight-300,window.innerWidth-50));
    var  p= createDiv();
    p.parent("__brfv5");
    p.style('width','100%')
    p.style('text-align','center')
     //isLoading = createP("Is Loaded");
    newSel = createSelect();
    newSel.position(10,40);
    // if (folderNumber == "") startNumbers = [1,10,18,27,35,43,52,60,64,68,77,85,89,94,102,110,119,123,127,135,144,151,158,164,169,177,183,193,199,216]
    // else if (folderNumber == "2") startNumbers =[1,16,35,53,68,83,98,113,128,143,158,173,188,203,218,239,259,274,289,302]
    // else if (folderNumber == "3") startNumbers = [36,45]
    // else if (folderNumber == "4") startNumbers = [1,23]
    // else if (folderNumber == "5")  startNumbers = [1,26]
    // else if (folderNumber == "6") startNumbers = [106,150]
    // else if (folderNumber == "7") startNumbers = [1,15]
    var instructions = createP("Instructions: Hold your face approx. 30cm away from the camera and start smiling!")
    instructions.position(10,60)
    instructions.style("width","100px")
    newSel.option("Flower 1")

    newSel.option("Flower 2")

    newSel.option("Child 1")
    newSel.option("Child 2")
    newSel.option("Grandpa")
    newSel.option("Girl 1")
    newSel.option("Girl 2")
    newSel.option("Kanye")
    sourceP = createA(sources[0],"Source");
    sourceP.style("display","block")
    newSel.changed(mySelectEvent2)
    instructions.parent(p)
    newSel.parent(p)
    //isLoading.parent(p)
    cnv.parent(p)
    sourceP.parent(p)
    cnv.id('mycanvas');
    colorMode(HSB);
    frameRate(60)
    background("white")

    var selNumber = newSel.elt.selectedIndex;

    for(var i = startNumbersList[selNumber][0]; i < startNumbersList[selNumber][1];i++){
      img.push(loadImage('./assets/flowers' + selNumber + '/filename_' + i + '.jpg')); // Load the image
    }
    numberOfFiles = startNumbersList[selNumber][1] -  startNumbersList[selNumber][0]  

    test()

  }
  
  function draw() {
    clear()
    var pictureNumber = 0;
   
    if (window.face != undefined) {
      factor = map(window.face.bounds.width,100,300,0,0.6)
      var smileNumber = window.face.bounds.width / (window.face.landmarks[54].x -window.face.landmarks[48].x) -factor/2 +0.3
      smileSize = map(smileNumber,2,3,numberOfFiles,0)
      //console.log(window.face.landmarks[54].x -window.face.landmarks[48].x)
      if (smileSize > 0){
        if (smileSize < numberOfFiles-1){
          pictureNumber = round(smileSize)
        }
        else {pictureNumber = numberOfFiles-1
        }
      }
      //console.log(pictureNumber)
      //console.log(smileSize)
    if ( width < height) image(img[pictureNumber], 0, 0, width,img[pictureNumber].height*width/img[pictureNumber]);
    else image(img[pictureNumber], 0, 0,width,height);
  }

}



function mySelectEvent2(){
  
  var selNumber = newSel.elt.selectedIndex;
  numberOfFiles = startNumbersList[selNumber][1] -  startNumbersList[selNumber][0]
  img = []
  //isLoading.html("Still loading... Please wait")
  sourceP.elt.href = sources[selNumber]
  for(var i = startNumbersList[selNumber][0]; i < startNumbersList[selNumber][1];i++){
    img.push(loadImage('./assets/flowers' + selNumber + '/filename_' + i + '.jpg')); 
    // Load the image
  }
  //isLoading.html("Finnished Loading")

}