import { Component } from '@angular/core';
import { NodeTypes, SPACE_COUNT } from './constants/nodetype.constants';
import { NodeModel } from './shared/models/node.model';
import { NodeService } from './shared/services/node.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'MableAngularApp';
  public spaceCount = SPACE_COUNT;
  public folderData: NodeModel = this.nodeService.getNewNode(NodeTypes.Folder);

  constructor(private nodeService: NodeService) {}

  public handleAddFolderToRoot(): void {
    const newNode = this.nodeService.getNewNode(NodeTypes.Unset);
    this.folderData = {
      ...this.folderData,
      children: [...(this.folderData.children || []), newNode],
    };
  }

  public updateParentNode(parentNode: NodeModel): void {
    this.folderData = parentNode;
  }
}
