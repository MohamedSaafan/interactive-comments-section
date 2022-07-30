interface Author {
  id: string;
  imageProfileLink: string;
  name: string;
}
interface Comments {
  id: string;
  author: Author;
  dateSinceEpoch: number;
  body: string;
  strength: number;
  commentParentID: string;
  nestingLevel: number;
}
