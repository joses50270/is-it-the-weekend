var answer = 'No'

var rightNow = new Date( ).toString( )
var nowArray = rightNow.split(" ")

var weekday = nowArray[0]
var month = nowArray[1]
var dayNumber = nowArray[2]
var year = nowArray[3]
var time = nowArray[4]

var timeArray = time.split(":")

var hour = timeArray[0]
var minutes = timeArray[1]
var seconds = timeArray[2]


if(answer === 'No' && weekday ===  'Sat' || weekday === 'Sun'){
     answer = 'Yes'
}else{
    answer = 'No'
}

function setup(){
    createCanvas(windowWidth, windowHeight)
}

function draw(){
    background('dodgerblue')
    textSize(32)
    fill('white')
    text('Is It The Weekend? ' + answer, 40, 40)
}