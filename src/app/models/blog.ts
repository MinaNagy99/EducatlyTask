import { FlareTagInterface } from './flare-tag';
import { OrganizaionInterface } from './organizaion';
import { UserInterface } from './user';

export interface BlogInterface {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string ;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: number | null;
  published_timestamp: string;
  positive_reactions_count: number;
  cover_image: string | null;
  social_image: string;
  canonical_url: string;
  created_at: string;
  edited_at: string | null;
  crossposted_at: string | null;
  published_at: string | null;
  last_comment_at: string | null;
  reading_time_minutes: number;
  tag_list: string[];
  tags: string;
  user: UserInterface;
  organization: OrganizaionInterface;
  flare_tag: FlareTagInterface;
}
