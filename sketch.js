//creates a constant for class1
const class1 = document.getElementById("class1");
//creates a const for class2
const class2 = document.getElementById("class2");
//creates a const for class3
const class3 = document.getElementById("class3");
//creates a const for class4
const class4 = document.getElementById("class4");
//creates a const for class5
const class5 = document.getElementById("class5");
//creates a const for class6
const class6 = document.getElementById("class6");
//creates a const for class7
const class7 = document.getElementById("class7");
//creates a const for class8
const class8 = document.getElementById("class8");
//creates a const for class9
const class9 = document.getElementById("class9");
//creates a const for class10
const class10 = document.getElementById("class10");
//creates a constant for quiz
const quiz = document.getElementById("quiz");
//cretes a constant for question
const question = document.getElementById("question");
//creates a constant for question image
const qImg = document.getElementById("qImg");
//creates a constant for 1st choice
const choiceA = document.getElementById("A");
//creates a constant for 2nd choice
const choiceB = document.getElementById("B");
//creates a constant for 3rd choice
const choiceC = document.getElementById("C");
//creates a constant for 3rd choice
const choiceA2 = document.getElementById("A2");
//creates a constant for 3rd choice
const choiceB2 = document.getElementById("B2");
//creates a constant for 3rd choice
const choiceC2 = document.getElementById("C2");
/*
//creates a constant for 1st choice
const choiceA2 = document.getElementById("A2");
//creates a constant for 1st choice
const choiceB2 = document.getElementById("B2");
//creates a constant for 1st choice
const choiceC2 = document.getElementById("C2");
//creates a constant for 1st choice
const choiceA3 = document.getElementById("A3");
//creates a constant for 1st choice
const choiceB3 = document.getElementById("B3");
//creates a constant for 1st choice
const choiceC3 = document.getElementById("C3");
//creates a constant for 1st choice
const choiceA4 = document.getElementById("A4");
//creates a constant for 1st choice
const choiceB4 = document.getElementById("B4");
//creates a constant for 1st choice
const choiceC4 = document.getElementById("C4");
*/
//creates a constant for counter
const counter = document.getElementById("counter");
//creates a constant for time guage
const timeGauge = document.getElementById("timeGauge");
//creates a constant for progress
const progress = document.getElementById("progress");
//creates a constant fpr score
const scoreDiv = document.getElementById("scoreContainer");
//creates a constant for text
const text1 = document.getElementById("text");

let question1 = [
  {
      question : "Ears are used to?",
      choiceA : "See",
      choiceB : "Talk",
      choiceC : "Hear",
      correct : "C"
  },{
      question : "A human body has ___ hands?",
      choiceA : "3",
      choiceB : "2",
      choiceC : "1",
      correct : "B"
  },{
      question : "We chew food through our?",
      choiceA : "Teeth",
      choiceB : "Foot",
      choiceC : "Eyes",
      correct : "A"
  },{
      question : "Our both hands have ___ fingers?",
      choiceA : "5",
      choiceB : "10",
      choiceC : "4",
      correct : "B"
  },{
      question : "We smell food with?",
      choiceA : "Ear",
      choiceB : "Nose",
      choiceC : "Eyes",
      correct : "B" 
  },{
      question : "Human body has ___ legs?",
      choiceA : "4",
      choiceB : "1",
      choiceC : "2",
      correct : "C"
  },{
      question : "We have our neck to move?",
      choiceA : "Head",
      choiceB : "Foot",
      choiceC : "Finger",
      correct : "A"
  },{
      question : "We taste our food with?",
      choiceA : "Tongue",
      choiceB : "Nose",
      choiceC : "Skin",
      correct : "A"
  },{
      question : "A human body have ___ eyebrows",
      choiceA : "2",
      choiceB : "3",
      choiceC : "0",
      correct : "A"
  },{
      question : "",
      choiceA : "",
      choiceB : "",
      choiceC : "",
      correct : ""
  }
];
let question2 = [
    {
        question : "How many hours are there in a day?",
        choiceA2 : "48 hours",
        choiceB2 : "24 hours",
        choiceC2 : "72 hours",
        correct : "B2"
    },{
        question : "How  many days are there in one year?",
        choiceA2 : "365 days",
        choiceB2 : "400 days",
        choiceC2 : "355 days",
        correct : "A2"
    },{
        question : "What is the sound made by a dog?",
        choiceA2 : "Meow-Meow",
        choiceB2 : "Hoot",
        choiceC2 : "Bow-Wow",
        correct : "C2"
    },{
        question : "What is the sound made by a cow?",
        choiceA2 : "Chirp",
        choiceB2 : "Quack Quack",
        choiceC2 : "Moo",
        correct : "C2"
    },{
        question : "What is the sound made by a cat?",
        choiceA2 : "Quack Quack",
        choiceB2 : "Meow",
        choiceC2 : "Chirp",
        correct : "B2"
    },{
        question : "What is the sound made by a duck?",
        choiceA2 : "Quack Quack",
        choiceB2 : "Moo",
        choiceC2 : "Bow-Wow",
        correct : "A2"
    },{
        question : "The young one of hen is called?",
        choiceA2 : "Puppy",
        choiceB2 : "Chick",
        choiceC2 : "Calf",
        correct : "B2"
    },{
        question : "The national currency of Afghanistan is?",
        choiceA2 : "Taka",
        choiceB2 : "Rand",
        choiceC2 : "Afghani",
        correct : "C2"
    },{
        question : "The young one of duck is called?",
        choiceA2 : "Ducks",
        choiceB2 : "Duckling",
        choiceC2 : "Chick",
        correct : "B2"
    },{
        question : "The national currency of USA is?",
        choiceA2 : "Dollar",
        choiceB2 : "Rupee",
        choiceC2 : "Euro",
        correct : "A2"
    }
];
let question3 = [
    {
        question : "Which is the fastest land animal?",
        choiceA : "Tiger",
        choiceB : "Lion",
        choiceC : "Cheetah",
        correct : "C"
    },{
        question : "Which is the closest star to Earth?",
        choiceA : "Sun",
        choiceB : "Moon",
        choiceC : "Proxima centauri",
        correct : "A"
    },{
        question : "Earth completes its one rotation in how many hours?",
        choiceA : "32 hours",
        choiceB : "24 hours",
        choiceC : "72 hours",
        correct : "B"
    },{
        question : "Name the tallest building of the world?",
        choiceA : "Qutub Minar",
        choiceB : "Shanghai Tower",
        choiceC : "Burj Khalifa",
        correct : "C"
    },{
        question : "Which is the biggest ocean in the world?",
        choiceA : "Pacific Ocean",
        choiceB : "Indian Ocean",
        choiceC : "Atlantic Ocean",
        correct : "A"
    },{
        question : "Which is the smallest planet in our solar system?",
        choiceA : "Venus",
        choiceB : "Mercury",
        choiceC : "Earth",
        correct : "B"
    },{
        question : "Which country has won the Cricket World Cup 3 times in a row?",
        choiceA : "India",
        choiceB : "England",
        choiceC : "Australia",
        correct : "C"
    },{
        question : "What is the plural form of knife?",
        choiceA : "Knives",
        choiceB : "Nives",
        choiceC : "Knifes",
        correct : "A"
    },{
        question : "100 + 100 = ?",
        choiceA : "100",
        choiceB : "200",
        choiceC : "0",
        correct : "B"
    },{
        question : "Where do you type in a computer?",
        choiceA : "Mouse",
        choiceC : "Monitor",
        correct : "Keyboard",
        correct : "C"
    }
];
let question4 = [
    {
        question : "The vegetable made of leaves that we can eat is-",
        choiceA : "Cauliflower",
        choiceB : "Cabbage",
        choiceC : "Carrot",
        correct : "B"
    },{
        question : "Which is the tallest land animal?",
        choiceA : "Camel",
        choiceB : "Elephant",
        choiceC : "Giraffe",
        correct : "C"
    },{
        question : "Which is the largest flower in the world?",
        choiceA : "Rose",
        choiceB : "Lotus",
        choiceC : "Raflesia",
        correct : "C"
    },{
        question : "Which planet is known as blue planet?",
        choiceA : "Earth",
        choiceB : "Mars",
        choiceC : "Jupiter",
        correct : "A"
    },{
        question : "Where would you go to deposit or withdraw money?",
        choiceA : "Cyber cafe",
        choiceB : "Bank",
        choiceC : "Airport",
        correct : "B"
    },{
        question : "Through this action, bees communicate to each other",
        choiceA : "Dancing",
        choiceB : "Licking",
        choiceC : "Trout",
        correct : "A"
    },{
        question : "The animal that lives the longest",
        choiceA : "Albatross",
        choiceB : "Turtle",
        choiceC : "Humming bird",
        correct : "B"
    },{
        question : "My Experiments with truth is written by-",
        choiceA : "Mahatama Gandhi",
        choiceB : "Rabindranath Tagore",
        choiceC : "None of these",
        correct : "A"
    },{
        question : "How many soccer players should each team have ",
        choiceA : "11",
        choiceB : "13",
        choiceC : "12",
        correct : "A"
    },{
        question : "Part of plant which grows under the soil?",
        choiceA : "Stem",
        choiceB : "Leaves",
        choiceC : "Root",
        correct : "C"
    }
];
let question5 = [
    {
        question : "Which country invented the Paper?",
        choiceA : "England",
        choiceB : "USA",
        choiceC : "China",
        correct : "C"
    },{
        question : "How many bones does an adult human have?",
        choiceA : "206",
        choiceB : "207",
        choiceC : "208",
        correct : "A"
    },{
        question : "Which bird lays the smallest egg?",
        choiceA : "Sparrow",
        choiceB : "Hummming bird",
        choiceC : "Pigeon",
        correct : "B"
    },{
        question : "What is the 5th prime number?",
        choiceA : "9",
        choiceB : "11",
        choiceC : "7",
        correct : "B"
    },{
        question : "Which is the world's largest country?",
        choiceA : "USA",
        choiceB : "China",
        choiceC : "Russia",
        correct : "C"
    },{
        question : "Which is the world's longest river?",
        choiceA : "Ganga",
        choiceB : "Nile",
        choiceC : "Red River",
        correct : "B"
    },{
        question : "Which is the hardest substance available on the earth?",
        choiceA : "Metal",
        choiceB : "Diamond",
        choiceC : "Wood",
        correct : "B"
    },{
        question : "How many states are there in United States? ",
        choiceA : "29",
        choiceB : "50",
        choiceC : "48",
        correct : "B"
    },{
        question : "How many legs does spider have?",
        choiceA : "8",
        choiceB : "10",
        choiceC : "4",
        correct : "A"
    },{
        question : "What is the capital of France?",
        choiceA : "London",
        choiceB : "Tokyo",
        choiceC : "Paris",
        correct : "C"
    }
];
let question6 = [
    {
        question : "If 1=5, 2=15, 3=215, Then 5=?",
        choiceA : "3215",
        choiceB : "4215",
        choiceC : "1",
        correct : "C"
    },{
        question : "How many teeth does a normal adult human have?",
        choiceA : "30",
        choiceB : "31",
        choiceC : "32",
        correct : "C"
    },{
        question : "Which is the largest mammal?",
        choiceA : "Blue Whale",
        choiceB : "Shark",
        choiceC : "Catfish",
        correct : "A"
    },{
        question : "Which is the highest mountain in the world?",
        choiceA : "Mount Fouji",
        choiceB : "Mount Kilimanjaro",
        choiceC : "Mount Everest",
        correct : "C"
    },{
        question : "Which is the hottest continent on the Earth?",
        choiceA : "Asia",
        choiceB : "Europe",
        choiceC : "Africa",
        correct : "C"
    },{
        question : "Who discovered aeroplane?",
        choiceA : "Stephen Hawking",
        choiceB : "Wright Brothers",
        choiceC : "Mark Zuckerberg",
        correct : "B"
    },{
        question : "Who is the inventor of electrrical bulb?",
        choiceA : "John Logie Baird",
        choiceB : "Thomas Edison",
        choiceC : "Barack Obama",
        correct : "B"
    },{
        question : "How many cards are there in the complete pack of the cards?",
        choiceA : "52",
        choiceB : "56",
        choiceC : "54",
        correct : "A"
    },{
        question : "Who discovered electricity?",
        choiceA : "Elon Musk",
        choiceB : "Albert Einstin",
        choiceC : "Benjamin Franklin",
        correct : "C"
    },{  
        question : "Which is the longest?",
        choiceA : "March",
        choiceB : "April",
        choiceC : "February",
        correct : "C"
    }
];
let question7 = [
    {
        question : "Which country invented Television?",
        choiceA : "USA",
        choiceB : "England",
        choiceC : "China",
        correct : "B"
    },{
        question : "Which acid is present in lemon?",
        choiceA : "Citric Acid",
        choiceB : "Tartaric Acid",
        choiceC : "Lactic Acid",
        correct : "A"
    },{
        question : "Which organ of the body produces the fluid known as bile?",
        choiceA : "Stomach",
        choiceB : "Pancreas",
        choiceC : "Liver",
        correct : "C"
    },{
        question : "What did Galileo invented?",
        choiceA : "Bulb",
        choiceB : "Thermometer",
        choiceC : "Television",
        correct : "B"
    },{
        question : "Which living bird lays the world's largest egg?",
        choiceA : "Hen",
        choiceB : "Ostrich",
        choiceC : "Peacock",
        correct : "B"
    },{
        question : "Which language is used by computer to process data?",
        choiceA : "Java",
        choiceB : "HTML",
        choiceC : "Binary",
        correct : "C"
    },{
        question : "Global warming is caused by the excess of which gas?",
        choiceA : "Nitrogen",
        choiceB :  "Carbon Dioxide",
        choiceC : "Oxygen",
        correct : "B"
    },{
        question : "If you pass out the 2nd person in a race, what position are you?",
        choiceA : "2nd",
        choiceB : "1st",
        choiceC : "3rd",
        correct : "A"
    },{
        question : "I don't speak,I cannot hear, but I always tell the truth.",
        choiceA : "Fish",
        choiceB : "The watch",
        choiceC : "The mirror",
        correct : "C"
    },{
        question : "In writing all of integers from 1 to 199, how many times is '1' used?",
        choiceA : "121",
        choiceB : "111",
        choiceC : "140",
        correct : "C"
    }
];
let question8 = [
    {
        question : "Which is the heaviest snake?",
        choiceA : "Anaconda",
        choiceB : "Cobra",
        choiceC : "Tiger snake",
        correct : "A"
    },{
        question : "Which animal can look 2 ways at the same time",
        choiceA : "Owl",
        choiceB : "Chameleon",
        choiceC : "Dog",
        correct : "B"
    },{
        question : "5 multiplied by 3, taken away 7 is what?",
        choiceA : "7",
        choiceB : "8",
        choiceC : "9",
        correct : "B"
    },{
        question : "What does vultures eat?",
        choiceA : "Dead Animals",
        choiceB : "Mice",
        choiceC : "Fish",
        correct : "A"
    },{
        question : "What is the driver  of the train called?",
        choiceA : "Train driver",
        choiceB : "LocoPilot",
        choiceC : "Pilot",
        correct : "C"
    },{
        question : "Which is the largest continent in the world?",
        choiceA : "Europe",
        choiceB : "Australia",
        choiceC : "Asia",
        correct : "C"
    },{
        question : "Which is the largest joint in the human body?",
        choiceA : "Hinge joint",
        choiceB : "Pivot joint",
        choiceC : "Knee joint",
        correct : "C"
    },{
        question : "The largest democracy of the world",
        choiceA : "USA",
        choiceB : "India",
        choiceC : "Spain",
        correct : "B"
    },{
        question : "What is between the paris",
        choiceA : "Eiffel Tower",
        choiceB : "France",
        choiceC : "R",
        correct : "C"
    },{
        question : "The old lady has 7 sons, and each son have a sister, so how many children does the old lady have?",
        choiceA : "14",
        choiceB : "8",
        choiceC : "0",
        correct : "B"
    }
];
let question9 = [
    {
        question : "Who discovered cell?",
        choiceA : "Albert Einstin",
        choiceB : "Robert Hook",
        choiceC : "Thomas Edison",
        correct : "B"
    },{
        question : "What is the name of the jjelly like structure present iin the cell?",
        choiceA : "Cytoplasm",
        choiceB : "Cell membrane",
        choiceC : "Endocytosis",
        correct : "A"
    },{
        question : "In which year was telephone invented?",
        choiceA : "1850",
        choiceB : "1860",
        choiceC : "1870",
        correct : "C"
    },{
        question : "What is the normal cholestrol in human blood?",
        choiceA : "140-180m",
        choiceB : "150-180m",
        choiceC : "150-170m",
        correct : "A"
    },{
        question : "What is the number of cells in human heart?",
        choiceA : "2",
        choiceB : "3",
        choiceC : "4",
        correct : "C"
    },{
        question : "Where is the headquarter of UNO?",
        choiceA : "USA",
        choiceB : "New York",
        choiceC : "Germany",
        correct : "B"
    },{
        question : "What is the name of the lowest layer in atmosphere?",
        choiceA : "Stratosphere",
        choiceB : "Troposphere",
        choiceC : "Mesosphere",
        correct : "B"
    },{
        question : "Where is the headquarter of ISRO situated in India?",
        choiceA : "Odisha",
        choiceB : "Mumbai",
        choiceC : "Bengaluru",
        correct : "C"
    },{
        question : "Where does RBCs occurs?",
        choiceA : "Bone Marrow",
        choiceB : "Heart",
        choiceC : "Intestine",
        correct : "A"
    },{
        question : "What is the metal found in the blood?",
        choiceA : "Silver",
        choiceB : "Copper",
        choiceC : "Metal",
        correct : "C"
    }
]
let question10 = [
    {
        question : "Where is World Health Organisation?",
        choiceA : "New York",
        choiceB : "Geneva",
        choiceC : "Paris",
        correct : "B"
    },{
        question : "Capital of japan?",
        choiceA : "Tokyo",
        choiceB : "Moscow",
        choiceC : "Canberra",
        correct : "A"
    },{
        question : "What is India's leiteracy rate?",
        choiceA : "74.04%",
        choiceB : "83.91%",
        choiceC : "70.05%",
        correct : "A"
    },{
        question : "What is the boiling point of water?",
        choiceA : "0 C",
        choiceB : "10 C",
        choiceC : "100 C",
        correct : "C"
    },{
        question : "What is the chemical formula of water?",
        choiceA : "H20",
        choiceB : "H3O4",
        choiceC : "None of these",
        correct : "A"
    },{
        question : "What is the chemical formula of oxygen?",
        choiceA : "O4",
        choiceB : "O3",
        choiceC : "O2",
        correct : "C"
    },{
        question : "Which scientist who declare the mmatter can be converted to energy?",
        choiceA : "Avogadro",
        choiceB : "Boyle",
        choiceC : "Einstin",
        correct : "C"
    },{
        question : "What is the liquid component of blood?",
        choiceA : "Plasma",
        choiceB : "Lymph",
        choiceC : "Sinovial fluid",
        correct : "A"
    },{
        question : "What is complex tissue?",
        choiceA : "Parenchyma",
        choiceB : "Collenchyma",
        choiceC : "Phloem",
        correct : "C"
    },{
        question : "Name the second smallest continent?",
        choiceA : "Australia",
        choiceB : "Antartica",
        choiceC : "Europe",
        correct : "C"
    },{
        question : "What is the use of chlorenchyma?",
        choiceA : "Vacular tissue",
        choiceB : "Photosynthesis",
        choiceC : "Support",
        correct : "C"
    }
]
// create some variables
const lastQuestion = question1.length - 1;
var runningQuestion = 0;
var count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 300; // 150px
const gaugeUnit = gaugeWidth / questionTime;
var TIMER;
var score = 0;
var ctr = 1;

// render a question
function renderQuestion(){
    var q = question1[runningQuestion];
    question.innerHTML = "<p> Ques"+ctr+"."+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    ctr = ctr+1
}
function renderQuestion2(){
    var q = question2[runningQuestion];
    question.innerHTML = "<p> Ques"+ctr+"."+ q.question2 +"</p>";
    choiceA2.innerHTML = q.choiceA2;
    choiceB2.innerHTML = q.choiceB2;
    choiceC2.innerHTML = q.choiceC2;
    ctr = ctr+1
}
function renderQuestion3(){
    var q = question3[runningQuestion];
    question.innerHTML = "<p> Ques"+ctr+"."+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    ctr = ctr+1
}
function renderQuestion4(){
    var q = question4[runningQuestion];
    question.innerHTML = "<p> Ques"+ctr+"."+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    ctr = ctr+1
}

function renderQuestion5(){
    var q = question5[runningQuestion];
    question.innerHTML = "<p> Ques"+ctr+"."+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    ctr = ctr+1
}

function renderQuestion6(){
    var q = question6[runningQuestion];
    question.innerHTML = "<p> Ques"+ctr+"."+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    ctr = ctr+1
}

function renderQuestion7(){
    var q = question7[runningQuestion];
    question.innerHTML = "<p> Ques"+ctr+"."+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    ctr = ctr+1
}

function renderQuestion8(){
    var q = question8[runningQuestion];
    question.innerHTML = "<p> Ques"+ctr+"."+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    ctr = ctr+1
}
function renderQuestion9(){
    var q = question9[runningQuestion];
    question.innerHTML = "<p> Ques"+ctr+"."+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    ctr = ctr+1
}
function renderQuestion10(){
    var q = question10[runningQuestion];
    question.innerHTML = "<p> Ques"+ctr+"."+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    ctr = ctr+1
}

//adds a listener 
class1.addEventListener("click",startQuiz);
class2.addEventListener("click",startQuiz2);
class3.addEventListener("click",startQuiz3);
class4.addEventListener("click",startQuiz4);
class5.addEventListener("click",startQuiz5);
class6.addEventListener("click",startQuiz6);
class7.addEventListener("click",startQuiz7);
class8.addEventListener("click",startQuiz8);
class9.addEventListener("click",startQuiz9);
class10.addEventListener("click",startQuiz10);
// start quiz
function startQuiz(){
    class1.style.display = "none";
    class2.style.display = "none";
    class3.style.display = "none";
    class4.style.display = "none";
    class5.style.display = "none";
    class6.style.display = "none";
    class7.style.display = "none";
    class8.style.display = "none";
    class9.style.display = "none";
    class10.style.display = "none";
    text1.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); //1000ms = 1s
}

function startQuiz2(){
    class1.style.display = "none";
    class2.style.display = "none";
    class3.style.display = "none";
    class4.style.display = "none";
    class5.style.display = "none";
    class6.style.display = "none";
    class7.style.display = "none";
    class8.style.display = "none";
    class9.style.display = "none";
    class10.style.display = "none";
    text1.style.display = "none";
    renderQuestion2();
    quiz.style.display = "block";
    renderProgress();
    renderCounter2();
    TIMER = setInterval(renderCounter,1000); //1000ms = 1s
}

function startQuiz3(){
    class1.style.display = "none";
    class2.style.display = "none";
    class3.style.display = "none";
    class4.style.display = "none";
    class5.style.display = "none";
    class6.style.display = "none";
    class7.style.display = "none";
    class8.style.display = "none";
    class9.style.display = "none";
    class10.style.display = "none";
    text1.style.display = "none";
    renderQuestion3();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); //1000ms = 1s
}

function startQuiz4(){
    class1.style.display = "none";
    class2.style.display = "none";
    class3.style.display = "none";
    class4.style.display = "none";
    class5.style.display = "none";
    class6.style.display = "none";
    class7.style.display = "none";
    class8.style.display = "none";
    class9.style.display = "none";
    class10.style.display = "none";
    text1.style.display = "none";
    renderQuestion4();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); //1000ms = 1s
}

function startQuiz5(){
    class1.style.display = "none";
    class2.style.display = "none";
    class3.style.display = "none";
    class4.style.display = "none";
    class5.style.display = "none";
    class6.style.display = "none";
    class7.style.display = "none";
    class8.style.display = "none";
    class9.style.display = "none";
    class10.style.display = "none";
    text1.style.display = "none";
    renderQuestion5();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); //1000ms = 1s
}

function startQuiz6(){
    class1.style.display = "none";
    class2.style.display = "none";
    class3.style.display = "none";
    class4.style.display = "none";
    class5.style.display = "none";
    class6.style.display = "none";
    class7.style.display = "none";
    class8.style.display = "none";
    class9.style.display = "none";
    class10.style.display = "none";
    text1.style.display = "none";
    renderQuestion6();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); //1000ms = 1s
}

function startQuiz7(){
    class1.style.display = "none";
    class2.style.display = "none";
    class3.style.display = "none";
    class4.style.display = "none";
    class5.style.display = "none";
    class6.style.display = "none";
    class7.style.display = "none";
    class8.style.display = "none";
    class9.style.display = "none";
    class10.style.display = "none";
    text1.style.display = "none";
    renderQuestion7();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); //1000ms = 1s
}

function startQuiz8(){
    class1.style.display = "none";
    class2.style.display = "none";
    class3.style.display = "none";
    class4.style.display = "none";
    class5.style.display = "none";
    class6.style.display = "none";
    class7.style.display = "none";
    class8.style.display = "none";
    class9.style.display = "none";
    class10.style.display = "none";
    text1.style.display = "none";
    renderQuestion8();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); //1000ms = 1s
}

function startQuiz9(){
    class1.style.display = "none";
    class2.style.display = "none";
    class3.style.display = "none";
    class4.style.display = "none";
    class5.style.display = "none";
    class6.style.display = "none";
    class7.style.display = "none";
    class8.style.display = "none";
    class9.style.display = "none";
    class10.style.display = "none";
    text1.style.display = "none";
    renderQuestion9();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); //1000ms = 1s
}
function startQuiz10(){
    class1.style.display = "none";
    class2.style.display = "none";
    class3.style.display = "none";
    class4.style.display = "none";
    class5.style.display = "none";
    class6.style.display = "none";
    class7.style.display = "none";
    class8.style.display = "none";
    class9.style.display = "none";
    class10.style.display = "none";
    text1.style.display = "none";
    renderQuestion10();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); //1000ms = 1s
}


// render progress
function renderProgress(){
    for(var qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    } 
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}
function renderCounter2(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion2();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == question[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

function checkAnswer2(answer){
    if( answer == question[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion2();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    //sets the color of running question to green
    document.getElementById(runningQuestion).style.backgroundColor = "green";
}

// answer is Wrong
function answerIsWrong(){
    //sets the color of running question to red
    document.getElementById(runningQuestion).style.backgroundColor = "red";
}

// score render
function scoreRender(){
    
    scoreDiv.style.display = "block";
    
   //calculates the percentage of scorex
    const scorePerCent = Math.round(100 * score/questions.length);                                                  
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}



















