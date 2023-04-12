import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-even-numbers',
  templateUrl:'./even-numbers-component.component.html',
  styleUrls: ['./even-numbers-component.component.css']
})
export class EvenNumbersComponent {
  evenNumbers: number[] = [];

  constructor() {
    const numbers$: Observable<number> = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        count++;
        observer.next(count);
      }, 1000);
    });

    const subscription = numbers$.subscribe({
      next: (num) => {
        if (num % 2 === 0) {
          this.evenNumbers.push(num);
        }
      },
      complete: () => {
        console.log('Stream completed');
      },
      error: (err) => {
        console.error('An error occurred:', err);
      },
    });
  }
}
