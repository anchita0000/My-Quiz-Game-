class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();

  }

  display(){
    this.title.html("My Quiz");
    this.title.position(350, 0);

    this.question.html("Question 1:- In which of the following planet will the sun rise in the west? " );
    this.question.position(150, 80);
    this.option1.html("1: Mercury" );
    this.option1.position(150, 130);
    this.option2.html("2: Saturn" );
    this.option2.position(150, 150);
    this.option3.html("3: Venus" );
    this.option3.position(150, 170);
    this.option4.html("4: Jupiter" );
    this.option4.position(150, 190);

    this.input1.position(150, 270);
    this.input2.position(350, 270);
    this.button.position(290, 350);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });

    
  }
}
