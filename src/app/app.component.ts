import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'questionBank-app';
  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  } 
}
