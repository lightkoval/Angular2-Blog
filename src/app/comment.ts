export class Comment {
  public id: number;
  public authorId: number;
  public postId: number;
  public body: string;
  public createdAt: Date;
  public parentId: number;
  public name: string;
}
