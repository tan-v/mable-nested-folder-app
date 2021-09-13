import { Component, EventEmitter, Output } from '@angular/core';
import { NodeTypes } from 'src/app/constants/nodetype.constants';
import { NodeModel } from 'src/app/shared/models/node.model';

@Component({
  selector: 'app-type-menu',
  templateUrl: './type-menu.component.html',
  styleUrls: ['./type-menu.component.scss'],
})
export class TypeMenuComponent {
  @Output() public emitNodeType = new EventEmitter<NodeModel['type']>();
  public nodeTypes = NodeTypes;

  constructor() {}

  public handleTypeOptionClick(type: NodeModel['type']) {
    this.emitNodeType.emit(type);
  }
}
