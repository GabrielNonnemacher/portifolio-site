import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnDestroy {
  @Input() isView: boolean = false;
  @Input() image: string = "";
  @Output() returnIsView = new EventEmitter;
  ngUnsubscribe = new Subject<void>();

  public fecharModal(): void {
    this.isView = false;
    this.returnIsView.emit(this.isView);
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}