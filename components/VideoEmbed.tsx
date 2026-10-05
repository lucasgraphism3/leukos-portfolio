type VideoEmbedProps = {
  id: string;
  title: string;
};

export default function VideoEmbed({ id, title }: VideoEmbedProps) {
  return (
    <div className="projet__video">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
        title={title}
        allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}