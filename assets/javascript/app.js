var userPick;

var correctAnswer = 0;

var incorrectAnswer = 0;

var unAnswer = 0;

var question = 0;

var images;

var count=30;

var trumpQuestions  = [{
question: "Which Porn Star allegedly spanked Donald Trump with a Forbes magazine",
choices: ["Jenna Jameson", "Stormy Daniels", "Kay Parker", "Melania Trump" ],
images:  ["../images/stormyD.jpeg"],
validAnswer: 1
}, {
question:"In Peter Pan, Captain Hook had a hook on which part of his     body?",
choices: ["Right Foot", "Left Hand", "Left Foot", "Right Hand"],
validAnswer: 1

}, {
question:"In the Lion King, where does Mufasa and his family live?",
choices: ["Rocky Mountain", "Forest", "Desert", "Pride Rock"],
validAnswer: 3

}, {
question:"In Beauty and the Beast, how many eggs does Gaston eat for    breakfast?",
choices: ["2 Dozen", "5 Dozen", "5000", "0"],
validAnswer: 1

}, {
question:"In Alice in Wonderland, what is the name of Alice’s kitten?",
choices: ["Dinah", "Sammie", "Kat", "Luna"],
validAnswer: 0

 }, {
question:"After being on earth, where did Hercules first meet his   father Zeus?",
choices: ["Mount Olympus", "Greece", "In the Temple of Zeus", "Elysian   Fields"],
validAnswer: 2

}, {
question:"During the ballroom scene of Beauty & the Beast, what color is Belle’s Gown?",
choices: ["Yellow", "Blue", "Gold", "White"],
validAnswer: 2

}, {
question:"In Bambi, what word does the owl use to describe falling in love?",
choices: ["Whimsical", "Miserable", "Joyful", "Twitterpatted"],
validAnswer: 3

}

];

$("#start_button").click(function(){
$(this).hide();
counter = setInterval(timer, 1000); 
questionNum();
}); 


function timer(){
count--;
if (count <= 0) {
 clearInterval(counter);
 return;
}

 $("#timer").html("Time remaining: " + "00:" + count + " secs");
}

for (i = 0; i <= questionNum; i++) {

function questionNum() {
$("#questions").html(trumpQuestions [0].question);
question++;

  var choicesArr = trumpQuestions [0].choices;
  var buttonsArr = [];

  for (let i = 0; i < choicesArr.length; i++) {
    var button = $('<button>');
    button.text(choicesArr[i]);
    button.attr('data-id', i);
    $('#questions').append(button);

   }

  } 
}
 $('#questions').on('click', 'button', function(e){
 userPick = $(this).data("id");
 trumpQuestions [0].validAnswer;
 if(userPick != trumpQuestions [0].validAnswer) {

 $('#questions').text("Wrong Answer! The correct answer is Stormy Daniels.");
 incorrectAnswer++;

} else if (userPick === trumpQuestions [0].validAnswer) {
$('#questions').text("Correct!!! Stormy Spanked Donny");
correctAnswer++;

}

});