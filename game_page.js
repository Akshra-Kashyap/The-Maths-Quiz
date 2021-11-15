var player1_name= localStorage.getItem("player1_name");
var player2_name= localStorage.getItem("player2_name");

player1_score= 0;
player2_score= 0;

document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;
 
document.getElementById("player1_name").innerHTML= player1_name + " : " ;
document.getElementById("player2_name").innerHTML= player2_name + " : " ;

document.getElementById("player_question").innerHTML= "Question turn- " + player1_name ;
document.getElementById("player_answer").innerHTML= "Answer turn- " + player2_name ;

function send(){

    number1= document.getElementById("Number1").value;
    number2= document.getElementById("Number2").value;
    actual_ans= parseInt(number1)*parseInt(number2);
    console.log(actual_ans);

      

    question_no= "<h4>"+ number1+ " x " + number2 +"</h4>"
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_no + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("Number1").value = "";
    document.getElementById("Number2").value = "";
} 

questionTurn= "player1";
answerTurn= "player2";


function check(){

    answer= document.getElementById("input_check_box").value;
    console.log("answer");

    if (answer==actual_ans){

        if(answerTurn=="player1"){
            player1_score= player1_score+ 1;
            document.getElementById("player1_score").innerHTML= player1_score;

        }
        
        else{
            player2_score= player2_score+ 1;
            document.getElementById("player2_score").innerHTML= player2_score;
        }
    }
    if(questionTurn=="player1"){

        questionTurn= "player2";
        document.getElementById("player_question").innerHTML= "Question Turn- "+ player2_name;
     
    }
    else{
        questionTurn= "player1";
        document.getElementById("player_question").innerHTML= "Question Turn- "+ player1_name;
    }

    if(answerTurn=="player1"){

        answerTurn= "player2";
        document.getElementById("player_answer").innerHTML= "Answer Turn- "+ player2_name;
     
    }
    else{
        answerTurn= "player1";
        document.getElementById("player_answer").innerHTML= "Answer Turn- "+ player1_name;
    }

    document.getElementById("output").innerHTML= "";
}