export interface MediaRepositoryCheckOffensiveCommentResponseRootObject {
  is_offensive: boolean;
  bully_classifier: number;
  hate_classifier?: string;
  sexual_classifier?: string;
  spam_classifier?: string;
  text_language: string;
  status: string;
}
