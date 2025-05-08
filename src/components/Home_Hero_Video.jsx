export default function Home_Hero_Video() {
  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 3392 2656" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="q_word">
            <path d="M2732.39 0H641.263L0 677.574V2002.75L642.119 2656H1749.6V2098.49H641.263V546.546H2750.55V2094.89H2506.47L1711.4 1311.64H969.088L2309.85 2656H2750.55L3391.81 2003.78V633.898L2732.39 0Z" />
          </clipPath>
        </defs>
        <foreignObject width="100%" height="100%" clipPath="url(#q_word)">
          <video
            src="https://player.vimeo.com/progressive_redirect/playback/1081006653/rendition/1080p/file.mp4?loc=external&log_user=0&signature=f36cfd37e564eced842b4c193716246455b2d40a2e932ba35770e3c2b2050051"
            autoPlay
            muted
            loop
            preload="none"
            playsInline
            className="w-full h-full object-cover"
          />
        </foreignObject>
      </svg>
    </div>
  );
}
