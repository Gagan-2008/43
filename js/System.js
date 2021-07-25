class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        textSize(50);
        fill("black");
        text(code,300,300)
        //add code to return true if correct answer entered.
        console.log(actualCode,enteredCode);
        if (actualCode === enteredCode){
          return true;  
        }
        
    }

}