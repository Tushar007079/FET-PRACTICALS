

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'MyCalculator';
    num1!: number;
    num2!: number;
    result!: number;
    add() {
        this.result = this.num1 + this.num2;
    }
    sub() {
        this.result = this.num1 - this.num2;
    }
    mul() {
        this.result = this.num1 * this.num2;
    }
    div() {
        this.result = this.num1 / this.num2;
    }
}
