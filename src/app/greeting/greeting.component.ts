import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: `<h1>{{ greetUser('Anastasios') }}</h1>`,
  styleUrls: ['./greeting.component.css'],
  standalone: true
})
export class GreetingComponent {
  greetUser(name: string): string {
    return `Hello, ${name}!`;
  }
}
