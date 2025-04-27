export default function Hory2() {
  const videoUrl = process.env.REACT_APP_VIDEO_HORY2_URL;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <iframe
        src={videoUrl}
        className="w-full h-full"
        allow="autoplay"
        allowFullScreen
        title="Video"
      ></iframe>
    </div>
  );
}
