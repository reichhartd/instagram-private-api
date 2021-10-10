export interface UserFeedResponse {
  items: UserFeedResponseItemsItem[];
  num_results: number;
  more_available: boolean;
  next_max_id: string;
  auto_load_more_enabled: boolean;
  status: string;
}
export interface UserFeedResponseItemsItem {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: string | number;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  location?: UserFeedResponseLocation;
  should_request_ads?: boolean;
  lng?: number;
  lat?: number;
  is_unified_video?: boolean;
  comment_likes_enabled: boolean;
  comment_threading_enabled: boolean;
  has_more_comments: boolean;
  max_num_visible_preview_comments: number;
  preview_comments: UserFeedResponsePreviewCommentsItem[];
  can_view_more_preview_comments: boolean;
  comment_count: number;
  inline_composer_display_condition: string;
  inline_composer_imp_trigger_time: number;
  image_versions2: UserFeedResponseImage_versions2;
  original_width: number;
  original_height: number;
  user: UserFeedResponseUser;
  can_viewer_reshare: boolean;
  caption: null | UserFeedResponseCaption;
  caption_is_edited: boolean;
  like_and_view_counts_disabled?: boolean;
  is_commercial?: boolean;
  commerciality_status?: 'not_commercial';
  is_paid_partnership?: boolean;
  playlist_eligibility?: boolean;
  like_count: number;
  has_liked: boolean;
  top_likers: string[];
  facepile_top_likers?: UserFeedResponseFacepileTopLikersItem[];
  direct_reply_to_author_enabled?: boolean;
  photo_of_you: boolean;
  fb_user_tags?: UserFeedResponseFb_user_tags;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  next_max_id?: string;
  carousel_media_count?: number;
  carousel_media?: UserFeedResponseCarouselMediaItem[];
  can_see_insights_as_brand?: boolean;
  is_dash_eligible?: number;
  video_dash_manifest?: string;
  video_codec?: string;
  number_of_qualities?: number;
  video_versions?: UserFeedResponseVideoVersionsItem[];
  has_audio?: boolean;
  video_duration?: number;
  view_count?: number;
  hide_view_all_comment_entrypoint?: boolean;
  sharing_friction_info?: UserFeedResponseSharingFrictionInfo;
  product_type?: 'feed';
  is_in_profile_grid?: boolean;
  profile_grid_control_enabled?: boolean;
  deleted_reason?: number;
  integrity_review_decision?: 'pending';
  music_metadata?: UserFeedResponseMusicMetadata;
}
export interface UserFeedResponseLocation {
  pk: number;
  short_name?: string;
  facebook_places_id: number;
  external_source: string;
  name?: string;
  address?: string;
  city?: string;
  has_viewer_saved?: null;
  lng: number;
  lat: number;
  is_eligible_for_guides?: boolean;
}
export interface UserFeedResponseImage_versions2 {
  candidates: UserFeedResponseCandidatesItem[];
}
export interface UserFeedResponseCandidatesItem {
  width: number;
  height: number;
  url: string;
  scans_profile?: string;
  estimated_scans_sizes?: number[];
}
export interface UserFeedResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id?: string;
  is_verified: boolean;
  follow_friction_type?: number;
  has_anonymous_profile_picture?: boolean;
  can_boost_post?: boolean;
  can_see_organic_insights?: boolean;
  show_insights_terms?: boolean;
  reel_auto_archive?: string;
  is_unpublished?: boolean;
  is_favorite?: boolean;
  account_badges?: undefined[];
  latest_reel_media?: number;
  allowed_commenter_type?: string;
}
export interface UserFeedResponseFacepileTopLikersItem {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id?: string;
  is_verified: boolean;
}
export interface UserFeedResponseFb_user_tags {
  in: any[];
}
export interface UserFeedResponsePreviewCommentsItem {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: UserFeedResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
  has_liked_comment: boolean;
  comment_like_count: number;
  has_translation?: boolean;
}
export interface UserFeedResponseCaption {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: UserFeedResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  is_covered?: boolean;
  media_id: string;
  has_translation: boolean;
  private_reply_status?: number;
}
export interface UserFeedResponseCarouselMediaItem {
  id: string;
  media_type: number;
  image_versions2: UserFeedResponseImage_versions2;
  original_width: number;
  original_height: number;
  pk: string;
  carousel_parent_id: string;
  fb_user_tags: UserFeedResponseFb_user_tags;
}
export interface UserFeedResponseVideoVersionsItem {
  type: number;
  width: number;
  height: number;
  url: string;
  id: string;
}
export interface UserFeedResponseSharingFrictionInfo {
  should_have_sharing_friction?: boolean;
  bloks_app_url?: null;
}
export interface UserFeedResponseMusicMetadata {
  music_canonical_id?: string;
  audio_type?: null;
  music_info?: null;
  original_sound_info?: null;
}
