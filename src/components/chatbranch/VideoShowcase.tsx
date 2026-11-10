import fs from "node:fs";
import path from "node:path";

/**
 * "See it in action" marketing videos for ChatBranch.
 *
 * Drop the files into /public/videos/chatbranch/. Each video renders only when
 * its .mp4 exists (the poster is optional), and the whole section renders
 * nothing when no video is present — so a missing file never breaks the build.
 * Files are checked when the page is built, so rebuild after adding videos.
 */

type Orientation = "landscape" | "portrait";

interface ShowcaseVideo {
  file: string; // .mp4 file name inside /public/videos/chatbranch/
  poster: string; // .jpg file name inside /public/videos/chatbranch/
  title: string;
  caption: string;
  orientation: Orientation;
}

const VIDEO_DIR = "/videos/chatbranch";

export const showcaseVideos: ShowcaseVideo[] = [
  {
    file: "hero-16x9.mp4",
    poster: "hero-16x9.jpg",
    title: "ChatBranch in 45 seconds",
    caption: "Every channel in one inbox, with an AI that answers for you.",
    orientation: "landscape",
  },
  {
    file: "short-ai-9x16.mp4",
    poster: "short-ai-9x16.jpg",
    title: "The AI that answers customers",
    caption: "Persona, knowledge and review before sending.",
    orientation: "portrait",
  },
  {
    file: "short-groups-9x16.mp4",
    poster: "short-groups-9x16.jpg",
    title: "Group chats",
    caption: "WhatsApp, Telegram and LINE groups in the shared inbox.",
    orientation: "portrait",
  },
  {
    file: "short-journeys-9x16.mp4",
    poster: "short-journeys-9x16.jpg",
    title: "Journeys",
    caption: "Follow-ups, reminders and hand-overs on autopilot.",
    orientation: "portrait",
  },
  {
    file: "short-claude-9x16.mp4",
    poster: "short-claude-9x16.jpg",
    title: "Hands-free with Claude",
    caption: "Ask about your inboxes and reply by voice, through the ChatBranch connector.",
    orientation: "portrait",
  },
];

function publicFileExists(name: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", VIDEO_DIR, name));
  } catch {
    return false;
  }
}

function VideoPlayer({ video, className }: { video: ShowcaseVideo; className: string }) {
  const poster = publicFileExists(video.poster) ? `${VIDEO_DIR}/${video.poster}` : undefined;
  return (
    <video
      controls
      playsInline
      preload="none"
      poster={poster}
      className={`${className} bg-gray-900 object-cover`}
      aria-label={video.title}
    >
      <source src={`${VIDEO_DIR}/${video.file}`} type="video/mp4" />
    </video>
  );
}

export default function VideoShowcase() {
  const available = showcaseVideos.filter((v) => publicFileExists(v.file));
  if (available.length === 0) return null;

  const hero = available.find((v) => v.orientation === "landscape");
  const shorts = available.filter((v) => v.orientation === "portrait").slice(0, 4);

  return (
    <section id="see-it-in-action" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See It in Action</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A quick look at how ChatBranch handles real customer conversations.
          </p>
        </div>

        {hero && (
          <figure className="max-w-5xl mx-auto mb-12">
            <VideoPlayer video={hero} className="w-full aspect-video rounded-2xl shadow-2xl" />
            <figcaption className="mt-4 text-center text-gray-300">
              <span className="font-semibold text-white">{hero.title}</span> — {hero.caption}
            </figcaption>
          </figure>
        )}

        {shorts.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {shorts.map((video) => (
              <figure key={video.file} className="w-full max-w-[300px] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] sm:max-w-[260px]">
                <VideoPlayer video={video} className="w-full aspect-[9/16] rounded-2xl shadow-xl" />
                <figcaption className="mt-3 text-center">
                  <span className="block font-semibold text-white">{video.title}</span>
                  <span className="block text-sm text-gray-400">{video.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
