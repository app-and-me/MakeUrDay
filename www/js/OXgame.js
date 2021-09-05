function ofunc() {
    o = document.getElementById('ox_o');
    x = document.getElementById('ox_x');

    o.src = "image/OXgame/OX_O_Button_click.png";
    o.style.cursor = "Default";
    x.style.cursor = "default";
    x.onclick = "none";
}
function xfunc() {
    o = document.getElementById('ox_o');
    x = document.getElementById('ox_x');
    x.src = "image/OXgame/OX_X_Button_click.png";
    x.style.cursor = "Default";
    o.style.cursor = "Default";
    o.onclick = "none";
}

function answerO_O() {
    o.src = "image/OXgame/answer_O.png"
    o.style.width = "173px";
    o.style.top = "483px";
    o.style.left = "104px";
    o.style.padding = "0px";
}
function answerO_X() {
    o.src = "image/OXgame/answer_X.png"
    o.style.width = "174px";
    o.style.top = "484px";
    o.style.left = "104px";
    o.style.padding = "0px";
}

function answerX_X() {
    x.src = "image/OXgame/answer_X.png"
    x.style.width = "174px";
    x.style.top = "484px";
    x.style.left = "453px";
    x.style.padding = "0px";
}
function answerX_O() {
    x.src = "image/OXgame/answer_O.png"
    x.style.width = "173px";
    x.style.top = "484px";
    x.style.left = "454px";
    x.style.padding = "0px";
}

correct_answer = 0;
//1번
function changeO_1() {
    ofunc();
    correct_answer++;

    setTimeout(answerO_O, 200);
    setTimeout(story2, 600);
}
function changeX_1() {
    xfunc();

    setTimeout(answerX_X, 200);
    setTimeout(story2, 600);
}

//2번
function changeO_2() {
    ofunc();

    setTimeout(answerO_X, 200);
    setTimeout(story3, 600);
}
function changeX_2() {
    xfunc();
    correct_answer++;

    setTimeout(answerX_O, 200);
    setTimeout(story3, 600);
}

// 3번
function changeO_3() {
    ofunc();
    correct_answer++;

    setTimeout(answerO_O, 200);
    setTimeout(story4, 600);
}
function changeX_3() {
    xfunc();

    setTimeout(answerX_X, 200);
    setTimeout(story4, 600);
}

// 4번
function changeO_4() {
    ofunc();

    setTimeout(answerO_X, 200);
    setTimeout(story5, 600);
}
function changeX_4() {
    xfunc();
    correct_answer++;

    setTimeout(answerX_O, 200);
    setTimeout(story5, 600);
}

// 5번
function changeO_5() {
    ofunc();
    correct_answer++;

    setTimeout(answerO_O, 200);
    setTimeout(resultGame(), 600);
}
function changeX_5() {
    xfunc();

    setTimeout(answerX_X, 200);
    setTimeout(resultGame(), 600);
}

function oChange() { //o 스타일 초기화
    var oStyle = o.style;
    o.src = "image/OXgame/OX_O_Button.png";
    o.style.all = "unset";
    o.style = "oStyle";
}
function xChange() { //x 스타일 초기화
    var xStyle = x.style;
    x.src = "image/OXgame/OX_X_Button.png";
    x.style.all = "unset";
    x.style = "xStyle";
}

function story2() {
    question = document.getElementById("question");
    questionbox = document.getElementById("questionbox");
    sky = document.getElementById("sky");
    question.src = "image/OXgame/story_question2.png";
    questionbox.src = "image/OXgame/questionbox2.png";
    sky.src = "image/OXgame/story_sky_2.png";
    question.style.height = "65px"
    question.style.top = "200px"
    oChange();
    xChange();
    
    x.onclick = changeX_2;
    o.onclick = changeO_2;
}

function story3() {
    question.src = "image/OXgame/story_question3.png";
    questionbox.src = "image/OXgame/questionbox3.png";
    sky.src = "image/OXgame/story_sky_3.png";
    question.style.height = "110px"
    question.style.width = "470px"
    question.style.top = "175px"
    question.style.left = "120px"
    oChange();
    xChange();
    
    x.onclick = changeX_3;
    o.onclick = changeO_3;
}

function story4() {
    question.src = "image/OXgame/story_question4.png";
    questionbox.src = "image/OXgame/questionbox4.png";
    sky.src = "image/OXgame/story_sky_4.png";
    question.style.height = "110px"
    question.style.width = "500px"
    question.style.top = "175px"
    question.style.left = "110px"
    oChange();
    xChange();
    
    x.onclick = changeX_4;
    o.onclick = changeO_4;
}

function story5() {
    question.src = "image/OXgame/story_question5.png";
    questionbox.src = "image/OXgame/questionbox5.png";
    sky.src = "image/OXgame/story_sky_5.png";
    question.style.height = "110px"
    question.style.width = "500px"
    question.style.top = "175px"
    oChange();
    xChange();
    
    x.onclick = changeX_5;
    o.onclick = changeO_5;
}

function resultGame() {
    location.href='OXgame_2.html?' + correct_answer;
}