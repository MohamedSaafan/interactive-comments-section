import { commentsData } from "./commentsData";

interface Author {
  image: { png: string; webp: string };
  username: string;
}
interface Comment {
  id: number;
  content: string;

  createdAt: string;
  score: number;
  user: Author;
  replies?: Comment[];
  replyingTo?: string;
}

interface CommentsData {
  currentUser: Author;
  comments: Comment[];
}
