import { Component } from '@angular/core';
/**
 * Simple example of using capturing outputs.
 *
 * Look at counter.component.html to see how the buttons are
 * defined and then passed to here to be acted upon
 */
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  value: number;

  constructor() {
    this.value = 1;
  }

  increase() {
    this.value = this.value + 1;
    return false;
  }

  decrease() {
    this.value = this.value - 1;
    return false;
  }

}
