const quizData = [
    {
        question: "1. Loutky jsou figuríny ze dřeva, látky, papíru nebo plastu.",
        a: "pravda",
        b: "lež",
        
        correct: "a",
    },
    {
      question: "2. Luk se používá na vaření.",
      a: "pravda",
      b: "lež",
      
      correct: "b",
  },
  {
    question: "3. Mikroskop je přístroj k pozorování velmi malých předmětů.",
    a: "pravda",
    b: "lež",
    
    correct: "a",
},
{
  question: "4. Milion je tisíc tisíců.",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},{
  question: "5. Klisny mají hříbátka.",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "6. Myslivec je človek , který se živí myšlením.",
a: "pravda",
b: "lež",

correct: "b",
},{
  question: "7. Orel je drahá kočka.",
  a: "pravda",
  b: "lež",
  
  correct: "b",
},
{
question: "8. Noc je část dne od západu slunce do jeho východu.",
a: "pravda",
b: "lež",

correct: "a",
},{
  question: "9. Ostrov je část země obklopená lávou.",
  a: "pravda",
  b: "lež",
  
  correct: "b",
},
{
question: "10. Okna slouží k osvětlení ba větrání domů.",
a: "pravda",
b: "lež",

correct: "a",
},{
  question: "11. Hrušky jsou plody hrušně.",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "12. Ozvěna je zvuk odražený od pevné překážky.",
a: "pravda",
b: "lež",

correct: "a",
},{
  question: "13. Pohádky vždy končí špatně.",
  a: "pravda",
  b: "lež",
  
  correct: "b",
},
{
question: "14. Planety jsou obrovské koule z různých hornin, z ledu neo plynů.",
a: "pravda",
b: "lež",

correct: "a",
},{
  question: "15. Pohlednice jsou karty s fotografií nebo obrázkem.",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "16. Přátelství je vztah založený na vzájemných sympatiích.",
a: "pravda",
b: "lež",

correct: "a",
},{
  question: "17. Jaro začíná v červnu.",
  a: "pravda",
  b: "lež",
  
  correct: "b",
},
{
question: "18. Smích se rodí ze smutku.",
a: "pravda",
b: "lež",

correct: "b",
},{
  question: "19. Saně jsou dopravní prostředek k jízdě po sněhu a ledu.",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "20. Svědomí je vnitřní hlas, který nám říká, co je správné a co ne.",
a: "pravda",
b: "lež",

correct: "a",
},
    
  ];
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const result = document.getElementById('resultquestion')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    deselectAnswers()
  
    const currentQuizData = quizData[currentQuiz]
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
   
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
  
    return answer
  }
  let answers= []; 
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) { answers.push(answer);
            console.log(answers);}
  
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
            
            
        }
        
        currentQuiz++;
        
  
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            
            
  /* 
  */
           let results= quizData.map ((question,i) => 
           
           
           ` 
                <div class="${quizData[i].correct===answers[i]?
                    "correct": "false" } quiz-header ">
                <h2 id="question">${question.question}</h2>
                <ul id="resultquestion"  >
                  <li >
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text">${question.a}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text">${question.b}</label>
                  </li>
        
                  
                  <li>
                  <h4>Správná odpověď: ${question[quizData[i].correct]}</h4>
                <h4>Vybral jsi: ${question[answers[i]]}</h4>
  
                
                  </li>
                  
                </ul>
              </div>`
                
                )
  
  //                 result.classList.add("correct")
  // /* 
                
  
                /* quizData.forEach ((question,i) =>
                 quizData[i].correct===answers[i]?
                  result.classList.add("correct")  : result.classList.add("false") 
                 ) */
            
         
  
  
            quiz.innerHTML = `
                <h2>Získal jsi ${score} bodů z ${quizData.length}.</h2>
               
  
                
                
               
    
                ${results}
  
  
                
  
                <button onclick="location.reload()">Znovu zkusit</button>
            `
        
        
        }
    }
  })