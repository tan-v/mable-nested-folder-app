import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FOLDER_WIDTH,
  FOLDER_HEIGHT,
  NodeTypes,
  SPACE_COUNT,
} from 'src/app/constants/nodetype.constants';
import { NodeModel } from 'src/app/shared/models/node.model';
import { NodeService } from 'src/app/shared/services/node.service';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.scss'],
})
export class NodesComponent implements OnInit {
  @Input() data: NodeModel[] = [];
  @Input() parentNode!: NodeModel;
  @Input() spaceCount!: number;
  @Input() showTypeMenu: boolean = false;
  @Output() emitUpdatedParentNode = new EventEmitter<NodeModel>();
  public node!: NodeModel;
  public showMenu: boolean = false;
  public nodeInFocus!: string;
  public folderWidth = FOLDER_WIDTH;
  public folderHeight = FOLDER_HEIGHT;
  public newNodeType!: NodeModel['type'];
  public nodeTypes = NodeTypes;

  constructor(private nodeService: NodeService) {}

  public ngOnInit() {
    this.spaceCount += SPACE_COUNT;
  }

  public handleTypeOptionClick(type: NodeModel['type']) {
    this.showTypeMenu = false;
    this.newNodeType = type;
  }

  public handleNodeAction(action: string, nodeData: NodeModel, i: number) {
    if (action === 'add') {
      this.handleAddNode(nodeData.children, i);
    }
    if (action === 'delete') {
      this.handleDeleteNode(nodeData, i);
    }
  }
  public handleAddNode(nodeArray: NodeModel[] = [], parentIndex: number): void {
    const newNode = this.nodeService.getNewNode(NodeTypes.Unset);
    nodeArray = [...nodeArray, newNode];
    const parentNode = { ...this.data[parentIndex], children: nodeArray };
    this.data.splice(parentIndex, 1, parentNode);
  }

  public handleDeleteNode(node: NodeModel, parentIndex: number): void {
    this.data = this.data.filter((_node) => _node.id !== node.id);
    if (this.parentNode) {
      this.parentNode = { ...this.parentNode, children: this.data };
    }
    this.emitUpdatedParentNode.emit(this.parentNode);
  }

  public updateParentNode(parentNode: NodeModel): void {
    const index = this.data.findIndex((_node) => _node.id === parentNode.id);
    this.data.splice(index, 1, parentNode);
  }

  public updateNodeName(
    name: string,
    nodeData: NodeModel,
    parentIndex: number
  ): void {
    if (name) {
      nodeData = { ...nodeData, name, type: this.newNodeType || 'folder' };
      this.data.splice(parentIndex, 1, nodeData);
    } else {
      this.handleDeleteNode(nodeData, parentIndex);
    }
  }
}
