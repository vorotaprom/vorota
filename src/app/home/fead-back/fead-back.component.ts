import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FeadBackService } from '../../shared/queries/fead-back.service';

@Component({
  selector: 'app-fead-back',
  templateUrl: './fead-back.component.html',
  styleUrls: ['./fead-back.component.scss']
})
export class FeadBackComponent implements OnInit {

  public feadBackForm: FormGroup;
  public name: FormControl;
  public tel: FormControl;
  public email: FormControl;
  public message: FormControl;

  public infoSend = false;

  constructor(
    @Inject(forwardRef(() => FeadBackService))
    private feadBackService: FeadBackService
  ) { }

  ngOnInit() {
    this.CreateFormControls();
    this.CreateForm();
  }

  CreateFormControls() {
    this.name = new FormControl('', Validators.required);
    this.tel =  new FormControl('', [
      Validators.required,
      Validators.pattern('[+0-9 -]+')
    ]);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
    ]);
    this.message = new FormControl('', Validators.required);
  }

  CreateForm() {
    this.feadBackForm = new FormGroup({
      name: this.name,
      tel: this.tel,
      email: this.email,
      message: this.message
    });
  }

  onSubmit() {
    if (this.feadBackForm.valid) {
      this.feadBackService.sendFeadBack(this.feadBackForm.value).subscribe(
        response => {
          if (response.status === 200) {
            this.infoSend = true;
            this.feadBackForm.reset();

            setTimeout(() => {
              this.infoSend = false;
            }, 10000);
          }
        }
      );
    }
  }
}
