import { Component, OnInit, TemplateRef, Inject, forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { FeadBackService } from '../shared/queries/fead-back.service';

@Component({
  selector: 'app-modal-call-back',
  templateUrl: './modal-call-back.component.html',
  styleUrls: ['./modal-call-back.component.css']
})
export class ModalCallBackComponent implements OnInit {

  public modalRef: BsModalRef;
  public displayCall = false;
  public formHide = true;

  public registrationForm: FormGroup;
  public name: FormControl;
  public tel: FormControl;

  constructor(
    @Inject(forwardRef(() => BsModalService))
    private modalService: BsModalService,
    @Inject(forwardRef(() => FeadBackService))
    private feadBackService: FeadBackService
  ) { }

  ngOnInit() {
    this.CreateFormControls();
    this.CreateForm();

    setTimeout(() => {
      this.displayCall = true;
    }, 5000);
  }

  CreateFormControls() {
    this.name = new FormControl('', Validators.required);
    this.tel =  new FormControl('', [
      Validators.required,
      Validators.pattern('[+0-9 -]+')
    ]);
  }

  CreateForm() {
    this.registrationForm = new FormGroup({
      name: this.name,
      tel: this.tel
    });
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      this.feadBackService.sendCallBack(this.registrationForm.value).subscribe(
        response => {
          if (response.status === 200) {
            this.displayCall = false;
            this.formHide = false;

            setTimeout(() => {
              this.modalRef.hide();
            }, 3000);
          }
        }
      );
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  btnClosed() {
    this.displayCall = false;
  }
  time() {
    this.displayCall = true;
  }
}
