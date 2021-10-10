interface MediaRepositoryCheckOffensiveCommentResponseRootObject {
  is_offensive: boolean;
  bully_classifier: number;
  hate_classifier?: string;
  sexual_classifier?: string;
  spam_classifier?: string;
  text_language: string;
  status: string;
}

const positiveResponse: MediaRepositoryCheckOffensiveCommentResponseRootObject = {
  is_offensive: false,
  bully_classifier: 0,
  text_language: 'de',
  status: 'ok',
};
