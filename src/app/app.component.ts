import { Component } from '@angular/core';
import { AppService } from './app.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly appService: AppService) {}
  title = 'psinstagram';
  public dogs: null | Record<string, string[]> = null;
  ngOnInit() {
    this.appService.getAllDogs().subscribe((response) => {
      this.dogs = response.message;
    });
  }
}
