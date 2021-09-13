import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-node',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  @Output() nodeNameEmitted = new EventEmitter<string>();
  public showError: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  public handleInputText(inputText: string) {
    if (inputText.trim()) {
      this.showError = false;
      this.nodeNameEmitted.emit(inputText);
    } else {
      this.showError = true;
    }
  }

  public handleCancel() {
    this.nodeNameEmitted.emit('');
    this.showError = false;
  }
}
