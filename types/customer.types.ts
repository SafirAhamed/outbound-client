export interface CustomerStory {
  id: string;
  customerName: string;
  customerImage: string;
  storyThumbnail: string;
  storyMedia: string; // image or video URL
  storyType: "image" | "video";
  caption?: string;
}