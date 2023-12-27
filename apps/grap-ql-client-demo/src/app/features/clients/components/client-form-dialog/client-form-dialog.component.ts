import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'org-client-form-dialog',
  templateUrl: './client-form-dialog.component.html'
})
export class ClientFormDialogComponent implements OnInit {
  @Input()
  clientForm!: FormGroup;
  @Input()
  mutationLoading!: boolean;

  @Output() create = new EventEmitter();
  @Output() update = new EventEmitter();
  @Output() closeEdit = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
    
  }

  handleCreate(dialog: HTMLDialogElement) {

  }
  handleUpdate(dialog: HTMLDialogElement) {

  }
  handleCloseEdit(dialog: HTMLDialogElement) {

  }

}
