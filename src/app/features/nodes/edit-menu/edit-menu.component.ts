import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NodeTypes } from 'src/app/constants/nodetype.constants';
import { NodeModel } from 'src/app/shared/models/node.model';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.scss'],
})
export class EditMenuComponent {
  @Input() public nodeDataType!: NodeModel['type'];
  @Output() public emitSelectedAction = new EventEmitter<string>();

  public nodeTypes = NodeTypes;
  constructor() {}

  public handleClick(action: string) {
    this.emitSelectedAction.emit(action);
  }
}
