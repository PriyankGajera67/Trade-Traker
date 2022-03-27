import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActionsFormService } from '../../services/actions-form.service';

@Component({
  selector: 'app-actions-form',
  templateUrl: './actions-form.component.html',
  styleUrls: ['./actions-form.component.css'],
  providers: [ActionsFormService],
})
export class ActionsFormComponent implements OnInit {
  constructor(private actionsFormService: ActionsFormService) {}

  ngOnInit() {}

  actionsForm = new FormGroup({
    amount: new FormControl(0),
    expectedGain: new FormControl(0),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.actionsForm.value);
    actionsFormService.
  }
}
