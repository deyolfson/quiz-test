function get_results(){

  let question_answers = [
  document.quiz.question1.value, document.quiz.question2.value,
  document.quiz.question3.value,document.quiz.question4.value,
  document.quiz.question5.value,document.quiz.question6.value,
  document.quiz.question7.value,document.quiz.question8.value,
  document.quiz.question9.value,document.quiz.question10.value,
  document.quiz.question11.value,document.quiz.question12.value,
  document.quiz.question13.value,document.quiz.question14.value,
  document.quiz.question15.value,document.quiz.question16.value,
  document.quiz.question17.value,document.quiz.question18.value,
  document.quiz.question19.value,document.quiz.question20.value,
  document.quiz.question21.value
  ];

  let pitta = 0;
  let vata = 0;
  let kapha = 0;
  let question_answersed = 21;

  for ( i in question_answers) {

    if (question_answers[i] == "pitta") {
      pitta++;

    }
    else if (question_answers[i] == "vata") {
      vata++;

    }
    else if (question_answers[i] == "kapha") {
      kapha++;

    }
    else {
      question_answersed--;
    }
  };


  let pitta_percent = Math.ceil((pitta / question_answersed) * 100);
  let vata_percent = Math.ceil((vata / question_answersed) * 100);
  let kapha_percent = Math.ceil((kapha / question_answersed) * 100);

  document.getElementById('results').style.display = "grid";

  if (pitta >= vata && vata > kapha){
    document.getElementById('pitta-results').style.gridArea = "result1";
    document.getElementById('vata-results').style.gridArea = "result2";
    document.getElementById('kapha-result').style.gridArea = "result3";

    document.getElementById('pitta-percent').style.gridArea = "percent1";
    document.getElementById('vata-percent').style.gridArea = "percent2";
    document.getElementById('kapha-percent').style.gridArea = "percent3";

  }
  else if (pitta > kapha && kapha < vata ) {
    document.getElementById('pitta-results').style.gridArea = "result1";
    document.getElementById('vata-results').style.gridArea = "result3";
    document.getElementById('kapha-result').style.gridArea = "result2";

    document.getElementById('pitta-percent').style.gridArea = "percent1";
    document.getElementById('vata-percent').style.gridArea = "percent3";
    document.getElementById('kapha-percent').style.gridArea = "percent2";
  }
  else if (pitta > kapha && kapha == vata) {
    document.getElementById('pitta-results').style.gridArea = "result1";
    document.getElementById('vata-results').style.gridArea = "result3";
    document.getElementById('kapha-result').style.gridArea = "result2";

    document.getElementById('pitta-percent').style.gridArea = "percent1";
    document.getElementById('vata-percent').style.gridArea = "percent3";
    document.getElementById('kapha-percent').style.gridArea = "percent2";
  }
  else if (vata > pitta && pitta > kapha) {
    document.getElementById('pitta-results').style.gridArea = "result2";
    document.getElementById('vata-results').style.gridArea = "result1";
    document.getElementById('kapha-result').style.gridArea = "result3";

    document.getElementById('pitta-percent').style.gridArea = "percent2";
    document.getElementById('vata-percent').style.gridArea = "percent1";
    document.getElementById('kapha-percent').style.gridArea = "percent3";
  }
  else if (vata > pitta && pitta < kapha) {
    document.getElementById('pitta-results').style.gridArea = "result3";
    document.getElementById('vata-results').style.gridArea = "result1";
    document.getElementById('kapha-result').style.gridArea = "result2";

    document.getElementById('pitta-percent').style.gridArea = "percent3";
    document.getElementById('vata-percent').style.gridArea = "percent1";
    document.getElementById('kapha-percent').style.gridArea = "percent2";
  }
  else if (vata > pitta && pitta == kapha) {
    document.getElementById('pitta-results').style.gridArea = "result3";
    document.getElementById('vata-results').style.gridArea = "result1";
    document.getElementById('kapha-result').style.gridArea = "result2";

    document.getElementById('pitta-percent').style.gridArea = "percent3";
    document.getElementById('vata-percent').style.gridArea = "percent1";
    document.getElementById('kapha-percent').style.gridArea = "percent2";
  }
  else if (kapha > pitta && pitta > vata) {
    document.getElementById('pitta-results').style.gridArea = "result2";
    document.getElementById('vata-results').style.gridArea = "result3";
    document.getElementById('kapha-result').style.gridArea = "result1";

    document.getElementById('pitta-percent').style.gridArea = "percent2";
    document.getElementById('vata-percent').style.gridArea = "percent3";
    document.getElementById('kapha-percent').style.gridArea = "percent1";
  }
  else if (kapha > pitta && pitta < vata) {
    document.getElementById('pitta-results').style.gridArea = "result3";
    document.getElementById('vata-results').style.gridArea = "result2";
    document.getElementById('kapha-result').style.gridArea = "result1";

    document.getElementById('pitta-percent').style.gridArea = "percent3";
    document.getElementById('vata-percent').style.gridArea = "percent2";
    document.getElementById('kapha-percent').style.gridArea = "percent1";
  }
  else if (kapha > pitta && pitta == vata) {
    document.getElementById('pitta-results').style.gridArea = "result3";
    document.getElementById('vata-results').style.gridArea = "result2";
    document.getElementById('kapha-result').style.gridArea = "result1";

    document.getElementById('pitta-percent').style.gridArea = "percent3";
    document.getElementById('vata-percent').style.gridArea = "percent2";
    document.getElementById('kapha-percent').style.gridArea = "percent1";
  }
  else {
    document.getElementById('pitta-results').style.gridArea = "result1";
    document.getElementById('vata-results').style.gridArea = "result2";
    document.getElementById('kapha-percent').style.gridArea = "percent3";

    document.getElementById('pitta-percent').style.gridArea = "percent1";
    document.getElementById('vata-percent').style.gridArea = "percent2";
    document.getElementById('kapha-percent').style.gridArea = "percent3";
  }

  document.getElementById('pitta-percent').innerHTML = "Pitta: " + pitta_percent.toString() + "%";
  document.getElementById('vata-percent').innerHTML = "Vata: " + vata_percent.toString() + "%";
  document.getElementById('kapha-percent').innerHTML = "Kapha: " + kapha_percent.toString() + "%";
  document.getElementById('quiz').style.display = "none";
  window.scroll(top);
}
