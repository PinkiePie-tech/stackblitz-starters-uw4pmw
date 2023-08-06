import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ExempleModule } from './exemple/exemple.module';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ExempleModule],
  template: `
    <app-exemple></app-exemple>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
