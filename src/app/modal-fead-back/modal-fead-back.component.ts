import { Component, OnInit, TemplateRef, Inject, forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-modal-fead-back',
  templateUrl: './modal-fead-back.component.html',
  styleUrls: ['./modal-fead-back.component.css']
})
export class ModalFeadBackComponent implements OnInit {

  public modalRef: BsModalRef;
  public displayCall = false;

  public registrationForm: FormGroup;
  public name: FormControl;
  public tel: FormControl;

  constructor(
    @Inject(forwardRef(() => BsModalService))
    private modalService: BsModalService
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
      console.log(this.registrationForm.value);
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
