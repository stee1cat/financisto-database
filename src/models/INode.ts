export interface INode {
    id: number;
    left: number;
    right: number;
    parentId?: number;
    children?: INode[];
}
