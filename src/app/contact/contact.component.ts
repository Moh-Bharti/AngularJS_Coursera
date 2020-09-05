import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  feedbackForm : FormGroup;
  feedback : Feedback;
  contactType = ContactType;
  choice:boolean;
  constructor(private fb: FormBuilder) {
    this.choice = true;
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm(){
    this.feedbackForm = this.fb.group({
      firstname: '',
      lastname : '',
      telnum : 0,
      email : '',
      agree : false,
      contactType : 'None',
      message : ''
    });
  }
  change(){
    console.log(false);
  }
  onSubmit(){
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset();
  }

}
