import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  players = [
    {name: 'Player 1', color: 'primary'},
    {name: 'Player 2', color: 'accent'}
  ];

  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
    this.translateService.setDefaultLang('en');
  }

  translate(lang: string) {
    this.translateService.use(lang);
  }

}
