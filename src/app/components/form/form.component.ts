import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LeavePageService } from 'src/app/services/leave-page.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    private leavePageService:LeavePageService,
  ) { }

  ngOnInit(): void {
    this.myForm.valueChanges.subscribe(
      (data) => this.leavePageService.setCanLeave(data)
    )
  }

  public myForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  submitForm() {
    alert('wow!')
  }
}
