import { Component, ViewChild, ElementRef, OnInit, TemplateRef, Inject, forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { FeadBackService } from '../../../../../shared/queries/fead-back.service';

@Component({
  selector: 'app-modal-from-order-sliding500',
  templateUrl: './modal-from-order-sliding500.component.html',
  styleUrls: ['./modal-from-order-sliding500.component.scss']
})
export class ModalFromOrderSliding500Component implements OnInit {

  public modalRef: BsModalRef;
  public formHide = true;

  public registrationForm: FormGroup;
  public name: FormControl;
  public tel: FormControl;
  public message: FormControl;

  public titleOpder: String;

  @ViewChild('template')
  template: ElementRef;

  constructor(
    @Inject(forwardRef(() => BsModalService))
    private modalService: BsModalService,
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
    this.message = new FormControl();
  }

  openModal(title: String, template?: TemplateRef<any>) {
    this.titleOpder = title;
    this.modalRef = this.modalService.show(this.template);
  }

  CreateForm() {
    this.registrationForm = new FormGroup({
      name: this.name,
      tel: this.tel,
      message: this.message
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.registrationForm.value.order = this.titleOpder;
      this.feadBackService.sendOrder(this.registrationForm.value).subscribe(
        response => {
          if (response.status === 200) {
            this.formHide = false;

            setTimeout(() => {
              this.modalRef.hide();
              setTimeout(() => {
                this.formHide = true;
              }, 1000);
            }, 3000);
          }
        }
      );
    }
  }

}
