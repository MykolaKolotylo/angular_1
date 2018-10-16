import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() onChanged = new EventEmitter<boolean>();
    change(increaced: any) {
      this.onChanged.emit(increaced);
    }

}
