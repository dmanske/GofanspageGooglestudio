import { Play } from "lucide-react";
import { useState } from "react";

interface VideoPlaceholderProps {
  title: string;
  thumbnail?: string;
  videoUrl?: string;
}

export const VideoPlaceholder = ({ title, thumbnail, videoUrl }: VideoPlaceholderProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-play video if videoUrl is provided
  if (videoUrl) {
    // Add autoplay parameter to YouTube URLs
    const videoUrlWithAutoplay = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')
      ? `${videoUrl}${videoUrl.includes('?') ? '&' : '?'}autoplay=1`
      : videoUrl;

    return (
      <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
        <iframe
          src={videoUrlWithAutoplay}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }


  // Fallback if no video
  return (
    <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
            <Play className="w-10 h-10 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground">Vídeo em breve</p>
        </div>
      </div>
    </div>
  );
};
