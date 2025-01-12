import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnumScreens } from '../../constants/syllogimous.constants';

@Component({
  selector: 'app-other-games',
  templateUrl: './other-games.component.html',
  styleUrls: ['./other-games.component.css']
})
export class OtherGamesComponent {
  EnumScreens = EnumScreens;

  constructor(public router: Router) {}

}
