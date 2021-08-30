let url = 'http://localhost:3000/api';

const canvas = document.getElementById('demo')
const canvas2 = document.getElementById('demo2')
const canvas3 = document.getElementById('demo3')
const ctx = canvas.getContext('2d')
const ctx2 = canvas2.getContext('2d')
const ctx3 = canvas3.getContext('2d')

canvas.width = 450
canvas.height = 450

let superSmell = 0;
let superHearing = 0;
let thermalVision = 0;
let superTaste = 0;
let controlLightning = 0;
let silenceSound = 0;
let telekinesis = 0;
let canMakeClones = 0;
let rewindTime = 0;
let makePeopleLaugh = 0;
let noOneNoticesYou = 0;
let questionsAnsweredTruthfully = 0;


fetch(url)
  .then(response => response.json())
  .then(data => {
    for(var i = 0; i < data.length; i++)
    {
      switch(data[i].answer1)
      {
        case "Smell":
          superSmell++;
          break;
        case "Hear":
          superHearing++;
          break;
        case "Thermal":
          thermalVision++;
          break;
        case "Taste":
          superTaste++;
          break;
      }

      switch(data[i].answer2)
      {
        case "Lightning":
          controlLightning++;
          break;
        case "Sound":
          silenceSound++;
          break;
        case "Telekinesis":
          telekinesis++;
          break;
        case "Clones":
          canMakeClones++;
          break;
      }

      switch(data[i].answer3)
      {
        case "Time":
          rewindTime++;
          break;
        case "Laugh":
          makePeopleLaugh++;
          break;
        case "Notices":
          noOneNoticesYou++;
          break;
        case "Truth":
          questionsAnsweredTruthfully++;
          break;
      }
    }

    // console.log(superSmell);
    // console.log(controlLightning);
    // console.log(rewindTime);
    // console.log(thermalVision);
    // console.log(telekinesis);
    // console.log(makePeopleLaugh);
  });

  const drawBackground = () => {
    ctx.fillStyle = 'black'
    ctx.beginPath()
    ctx.moveTo(85, 10)
    ctx.lineTo(85, 365)
    ctx.lineTo(400, 365)
    ctx.stroke()

    ctx.fillStyle = '#405'
    ctx.fillRect(90, 264, 40, 100)

    ctx.fillStyle = '#ff0'
    ctx.font = '30px Arial'
    ctx.fillText('Question 1', 175, 25)

    ctx.fillStyle = '#ff0'
    ctx.font = '30px Arial'
    ctx.fillText('1', 60, 350)

    ctx.fillStyle = 'black'
    ctx.beginPath()
    ctx.moveTo(85, 340)
    ctx.lineTo(400, 340)
    ctx.stroke()

    ctx.fillStyle = '#ff0'
    ctx.font = '30px Arial'
    ctx.fillText('2', 60, 275)

    ctx.fillStyle = 'black'
    ctx.beginPath()
    ctx.moveTo(85, 265)
    ctx.lineTo(400, 265)
    ctx.stroke()

    ctx.fillStyle = '#ff0'
    ctx.font = '30px Arial'
    ctx.fillText('3', 60, 200)

    ctx.fillStyle = 'black'
    ctx.beginPath()
    ctx.moveTo(85, 190)
    ctx.lineTo(400, 190)
    ctx.stroke()

    ctx.fillStyle = '#ff0'
    ctx.font = '30px Arial'
    ctx.fillText('4', 60, 125)

    ctx.fillStyle = 'black'
    ctx.beginPath()
    ctx.moveTo(85, 115)
    ctx.lineTo(400, 115)
    ctx.stroke()

    ctx.fillStyle = '#ff0'
    ctx.font = '30px Arial'
    ctx.fillText('5', 60, 50)

    ctx.fillStyle = 'black'
    ctx.beginPath()
    ctx.moveTo(85, 40)
    ctx.lineTo(400, 40)
    ctx.stroke()

    ctx.fillStyle = '#ff0'
    ctx.font = '20px Arial'
    ctx.fillText('Smell', 85, 390)

    ctx.fillStyle = '#ff0'
    ctx.font = '20px Arial'
    ctx.fillText('Hear', 160, 390)

    ctx.fillStyle = '#ff0'
    ctx.font = '20px Arial'
    ctx.fillText('Thermal', 225, 390)

    ctx.fillStyle = '#ff0'
    ctx.font = '20px Arial'
    ctx.fillText('Taste', 325, 390)

    ctx.fillStyle = '#ff0'
    ctx.font = '40px Arial'
    ctx.fillText('Answers', 160, 430)
}

// let player_x = 0
// let player_y = 110
// let width = 30
// let height = 30

const loop = () => {
    ctx.clearRect(0, 0, 800, 600)
    drawBackground()
    // ctx.fillStyle = '#ff1439'
    // ctx.fillRect(player_x, player_y, width, height)
    // if(player_x > 800) player_x = 0 - width
    // if(player_y > 600) player_y = 0 - height
    // player_x++
}

setInterval(loop, 20)

canvas2.width = 450
canvas2.height = 450

const drawBackground2 = () => {
    ctx2.fillStyle = 'black'
    ctx2.beginPath()
    ctx2.moveTo(85, 10)
    ctx2.lineTo(85, 365)
    ctx2.lineTo(400, 365)
    ctx2.stroke()

    ctx2.fillStyle = '#405'
    ctx2.fillRect(90, 264, 40, 100)

    ctx2.fillStyle = '#ff0'
    ctx2.font = '30px Arial'
    ctx2.fillText('Question 2', 175, 25)

    ctx2.fillStyle = '#ff0'
    ctx2.font = '30px Arial'
    ctx2.fillText('1', 60, 350)

    ctx2.fillStyle = 'black'
    ctx2.beginPath()
    ctx2.moveTo(85, 340)
    ctx2.lineTo(400, 340)
    ctx2.stroke()

    ctx2.fillStyle = '#ff0'
    ctx2.font = '30px Arial'
    ctx2.fillText('2', 60, 275)

    ctx2.fillStyle = 'black'
    ctx2.beginPath()
    ctx2.moveTo(85, 265)
    ctx2.lineTo(400, 265)
    ctx2.stroke()

    ctx2.fillStyle = '#ff0'
    ctx2.font = '30px Arial'
    ctx2.fillText('3', 60, 200)

    ctx2.fillStyle = 'black'
    ctx2.beginPath()
    ctx2.moveTo(85, 190)
    ctx2.lineTo(400, 190)
    ctx2.stroke()

    ctx2.fillStyle = '#ff0'
    ctx2.font = '30px Arial'
    ctx2.fillText('4', 60, 125)

    ctx2.fillStyle = 'black'
    ctx2.beginPath()
    ctx2.moveTo(85, 115)
    ctx2.lineTo(400, 115)
    ctx2.stroke()

    ctx2.fillStyle = '#ff0'
    ctx2.font = '30px Arial'
    ctx2.fillText('5', 60, 50)

    ctx2.fillStyle = 'black'
    ctx2.beginPath()
    ctx2.moveTo(85, 40)
    ctx2.lineTo(400, 40)
    ctx2.stroke()

    ctx2.fillStyle = '#ff0'
    ctx2.font = '15px Arial'
    ctx2.fillText('Lightning', 90, 390)

    ctx2.fillStyle = '#ff0'
    ctx2.font = '15px Arial'
    ctx2.fillText('Sound', 170, 390)

    ctx2.fillStyle = '#ff0'
    ctx2.font = '15px Arial'
    ctx2.fillText('Telekinesis', 240, 390)

    ctx2.fillStyle = '#ff0'
    ctx2.font = '15px Arial'
    ctx2.fillText('Clones', 340, 390)

    ctx2.fillStyle = '#ff0'
    ctx2.font = '40px Arial'
    ctx2.fillText('Answers', 160, 430)
}

const loop2 = () => {
    ctx2.clearRect(0, 0, 800, 600)
    drawBackground2()
    ctx2.fillStyle = '#ff1439'
    // ctx2.fillRect(player_x, player_y, width, height)
    // if(player_x > 800) player_x = 0 - width
    // if(player_y > 600) player_y = 0 - height
    // player_x++
}

setInterval(loop2, 20)

canvas3.width = 450
canvas3.height = 450


const drawBackground3 = () => {
    ctx3.fillStyle = 'black'
    ctx3.beginPath()
    ctx3.moveTo(85, 10)
    ctx3.lineTo(85, 365)
    ctx3.lineTo(400, 365)
    ctx3.stroke()

    ctx3.fillStyle = '#405'
    ctx3.fillRect(90, 264, 40, 100)

    ctx3.fillStyle = '#ff0'
    ctx3.font = '30px Arial'
    ctx3.fillText('Question 3', 175, 25)

    ctx3.fillStyle = '#ff0'
    ctx3.font = '30px Arial'
    ctx3.fillText('1', 60, 350)

    ctx3.fillStyle = 'black'
    ctx3.beginPath()
    ctx3.moveTo(85, 340)
    ctx3.lineTo(400, 340)
    ctx3.stroke()

    ctx3.fillStyle = '#ff0'
    ctx3.font = '30px Arial'
    ctx3.fillText('2', 60, 275)

    ctx3.fillStyle = 'black'
    ctx3.beginPath()
    ctx3.moveTo(85, 265)
    ctx3.lineTo(400, 265)
    ctx3.stroke()

    ctx3.fillStyle = '#ff0'
    ctx3.font = '30px Arial'
    ctx3.fillText('3', 60, 200)

    ctx3.fillStyle = 'black'
    ctx3.beginPath()
    ctx3.moveTo(85, 190)
    ctx3.lineTo(400, 190)
    ctx3.stroke()

    ctx3.fillStyle = '#ff0'
    ctx3.font = '30px Arial'
    ctx3.fillText('4', 60, 125)

    ctx3.fillStyle = 'black'
    ctx3.beginPath()
    ctx3.moveTo(85, 115)
    ctx3.lineTo(400, 115)
    ctx3.stroke()

    ctx3.fillStyle = '#ff0'
    ctx3.font = '30px Arial'
    ctx3.fillText('5', 60, 50)

    ctx3.fillStyle = 'black'
    ctx3.beginPath()
    ctx3.moveTo(85, 40)
    ctx3.lineTo(400, 40)
    ctx3.stroke()

    ctx3.fillStyle = '#ff0'
    ctx3.font = '20px Arial'
    ctx3.fillText('Time', 90, 390)

    ctx3.fillStyle = '#ff0'
    ctx3.font = '20px Arial'
    ctx3.fillText('Laugh', 160, 390)

    ctx3.fillStyle = '#ff0'
    ctx3.font = '20px Arial'
    ctx3.fillText('Notices', 240, 390)

    ctx3.fillStyle = '#ff0'
    ctx3.font = '20px Arial'
    ctx3.fillText('Truth', 340, 390)

    ctx3.fillStyle = '#ff0'
    ctx3.font = '40px Arial'
    ctx3.fillText('Answers', 160, 430)
}

const loop3 = () => {
    ctx3.clearRect(0, 0, 800, 600)
    drawBackground3()
    // ctx3.fillStyle = '#ff1439'
    // ctx3.fillRect(player_x, player_y, width, height)
    // if(player_x > 800) player_x = 0 - width
    // if(player_y > 600) player_y = 0 - height
    // player_x++
}

setInterval(loop3, 20)