import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-calculator';

  calValue: number = 0;
  funcT: any = 'NoFunction';

  calNumber: string = 'noValue';

  firstNumber: number = 0; 
  secondNumber: number = 0;

  onClickValue(value: string, type: any): void{
    if (type == "number") {
      this.onNumberClick(value);
    }
    else if(type == "function")
    {
      this.onFunctionClick(value);
    }
  }

  onNumberClick(value: string): void{
    if (this.calNumber == 'noValue') {
      this.calNumber = value;
    } else if(this.calNumber.length < 10) {
      this.calNumber += value;
    }
    else {
      alert("Number is too long");
    }
    this.calValue = parseFloat(this.calNumber);
    
  }

  onFunctionClick(value: string): void{
    if (value == 'AC') {
      this.calValue = 0;
      this.funcT = 'NoFunction';
      this.calNumber = 'noValue';
      return;
    }
    if (this.funcT == 'NoFunction') {
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = value;
    } else if (this.calValue == 0) {
      alert("Please enter a number first");
    }
    else {
      this.secondNumber = this.calValue;
      if (value == '=') {
        this.calculate(this.firstNumber, this.secondNumber, this.funcT);
      }
      else {
        alert("Please enter character =");
      }
    }
  }

  calculate(firstNumber: number, secondNumber: number, funct: string)
  {
    switch (funct) {
      case '+' :
        this.calValue = firstNumber + secondNumber;
        this.funcT = 'NoFunction';
        break;
      case '-':
        this.calValue = firstNumber - secondNumber;
        this.funcT = 'NoFunction';
        break;
      case '*':
        this.calValue = firstNumber * secondNumber;
        this.funcT = 'NoFunction';
        break;
      case '/':
        if (secondNumber == 0)
        {
          alert("Can't divide by 0");
          this.calValue = 0;
          this.funcT = 'NoFunction';
          this.calNumber = 'noValue';
          return;
        }
        this.calValue = firstNumber / secondNumber;
        this.funcT = 'NoFunction';
        break;
      case '%':
        this.calValue = firstNumber % secondNumber;
        this.funcT = 'NoFunction';
        break;
      default: break;
    }
  }

}
