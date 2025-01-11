import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnumScreens } from '../../constants/syllogimous.constants';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  EnumScreens = EnumScreens;
  dailyProgressMinutes = new FormControl(30);
  weeklyProgressMinutes = new FormControl(120);

  constructor(public router: Router) {}

}
