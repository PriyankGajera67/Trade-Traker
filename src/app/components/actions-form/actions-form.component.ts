import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-actions-form',
  templateUrl: './actions-form.component.html',
  styleUrls: ['./actions-form.component.css'],
})
export class ActionsFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  actionsForm = new FormGroup({
    amount: new FormControl(0),
    targetGain: new FormControl(0),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.actionsForm.value);
  }
}
