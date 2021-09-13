import { Injectable } from '@angular/core';
import { NodeModel } from '../models/node.model';

@Injectable({
  providedIn: 'root',
})
export class NodeService {
  constructor() {}

  public getNewNode(type: NodeModel['type'], name: string = ''): NodeModel {
    return {
      type,
      name,
      children: [],
      id: Date.now().toString(),
    };
  }
}
