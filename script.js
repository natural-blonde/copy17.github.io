const getS = selector => document.querySelector(selector);

let minTimer = 1;
let sec3 = 59;
let count3 = 1;
let setID;
let onOff = 0;
let txtSeconds = document.querySelector(".seconds-number");
let txtMinutes = document.querySelector(".minutes-number");

function start(){
  minTimer = minTimer - count3;
  count3 = 1;
  setID = setInterval(() => {
      getS('.seconds-number').innerHTML = sec3;
      getS('.minutes-number').innerHTML = minTimer;
      sec3 = sec3 - count3;
      startCounting();
      if (minTimer === 0 && sec3 === 0) {
          count3 = 0;
      }
  }, 1000);
}

getS('.start').addEventListener('click', function() {
  start();
  getS('.start').disabled = true;
  getS('.new').disabled = false;
  getS('#check').disabled = false;
})

  function startCounting() {
    if (sec3 < 10) {txtSeconds.innerHTML = "0" + sec3;}
 
    if (minTimer < 10) {txtMinutes.innerHTML = "0" + minTimer;}
  }

  getS('.new').addEventListener('click', function(){
    location.reload();
    getS('.new').disabled = true;
    getS(".start").disabled = false;
    getS('#check').disabled = false;
  })

//   $('.mix').sortable({
//     connectWith: '#start, #end',
// })

// $('.parametr').draggable();
// $('.left').droppable({
//   // accept: '.',
//   // activeClass: 'active',
//   over: function(){
//     $('.right').css('background-color', 'rgb(151, 151, 151)');
//     for(let i = 0; i < $('.parametr1').length; i++){
//       $('.parametr1').eq(i).css('border', 'none');
//     }
//   },
//   out: function(){
//     $('.right').css('background-color', 'pink');
//     for(let i = 0; i < $('.parametr1').length; i++){
//       $('.parametr1').eq(i).css('border', '1px solid black');
//     }
//   }
// });

$('.mix').sortable({
  connectWith: '#start, #end',
});
$('.parametr').draggable({
  containment: '#end',
  delay: 100,
  grid: [75, 75],
})


let numbers = ['l-1', 'l-2', 'l-3', 'l-4', 'l-5', 'l-6', 'l-7', 'l-8', 'l-9', 'l-10', 'l-11', 'l-12', 'l-13', 'l-14', 'l-15', 'l-16'];
let check = true;

$('#check').on('click', function(){
  getS('#check').disabled = true;
  getS('.new').disabled = false;
  getS(".start").disabled = false;
  for(let i = 0; i < $('.parametr').length; i++){
      if($('.parametr').eq(i).attr('class').substr(9, 3) != numbers[i]){
        check = false;
        break;
      }
  }
  if(check){
      alert('You win');
  }
  else{
      alert('You lose');
  }
  check = true;
  // console.log($('.parametr').eq(i).attr('class').slice(9,-19))
})

// parametrs[Math.floor(Math.random()*15)];
//.slice(9,-19)
