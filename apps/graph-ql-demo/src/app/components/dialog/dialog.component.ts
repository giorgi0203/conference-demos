import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'org-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent implements OnInit, OnDestroy {
  @Input() dialogTitle!: string;
  @ViewChild('appDialog', { static: true })
  dialog!: ElementRef<HTMLDialogElement>;
  cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    console.log('DialogComponent.ngOnInit()');
  }

  showModal() {
    this.dialog.nativeElement.showModal();
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this.dialog.nativeElement.close();
    this.cdr.detectChanges();
  }
}
