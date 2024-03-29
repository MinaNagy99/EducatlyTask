import { Component } from '@angular/core';
import { BlogInterface } from '../../../models/blog';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent {
  blog:BlogInterface={
    "type_of": "article",
    "id": 1804328,
    "title": "What was your win this week?",
    "description": "Hi everybody! 👋  Another week down, hope you each had a good one! 😎  Looking back on this past week,...",
    "readable_publish_date": "Mar 29",
    "slug": "what-was-your-win-this-week-13ld",
    "path": "/devteam/what-was-your-win-this-week-13ld",
    "url": "https://dev.to/devteam/what-was-your-win-this-week-13ld",
    "comments_count": 5,
    "public_reactions_count": 12,
    "collection_id": null,
    "published_timestamp": "2024-03-29T11:00:00Z",
    "positive_reactions_count": 12,
    "cover_image": "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwjyxxca8qxz6j0vc7av9.jpg",
    "social_image": "https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwjyxxca8qxz6j0vc7av9.jpg",
    "canonical_url": "https://dev.to/devteam/what-was-your-win-this-week-13ld",
    "created_at": "2024-03-28T15:19:15Z",
    "edited_at": null,
    "crossposted_at": null,
    "published_at": "2024-03-29T11:00:00Z",
    "last_comment_at": "2024-03-29T12:03:18Z",
    "reading_time_minutes": 1,
    "tag_list": [
        "discuss",
        "weeklyretro"
    ],
    "tags": "discuss, weeklyretro",
    "user": {
        "name": "Michael Tharrington",
        "username": "michaeltharrington",
        "twitter_username": "MichaelMadcat",
        "github_username": "michael-tharrington",
        "user_id": 38578,
        "website_url": "https://dev.to/michaeltharrington",
        "profile_image": "https://media.dev.to/cdn-cgi/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F38578%2F05ce9c9d-43b7-4823-a423-f875a94edc27.jpg",
        "profile_image_90": "https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F38578%2F05ce9c9d-43b7-4823-a423-f875a94edc27.jpg"
    },
    "organization": {
        "name": "The DEV Team",
        "username": "devteam",
        "slug": "devteam",
        "profile_image": "https://media.dev.to/cdn-cgi/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F1%2Fd908a186-5651-4a5a-9f76-15200bc6801f.jpg",
        "profile_image_90": "https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F1%2Fd908a186-5651-4a5a-9f76-15200bc6801f.jpg"
    },
    "flare_tag": {
        "name": "discuss",
        "bg_color_hex": "#71EA8B",
        "text_color_hex": "#FFFFFF"
    }
}
}
