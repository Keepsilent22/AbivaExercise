import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('lastContainer') lastContainer!: ElementRef;
  constructor() { }
  scrollToLastContainer() {
    const containerElement = this.lastContainer.nativeElement;
    containerElement.scrollIntoView({ behavior: 'smooth' });
  }

  title = 'Exercise';
  formData = {
    Fname: '',
    Lname: '',
    email: '',
    role: ''
  };
  submitForm() {
    console.log(this.formData);
    this.formData = {
      Fname: '',
      Lname: '',
      email: '',
      role: ''
    };
  }
}
