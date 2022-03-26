import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-actions-form',
  templateUrl: './actions-form.component.html',
  styleUrls: ['./actions-form.component.css'],
})
export class ActionsFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  name = new FormControl('');
}
