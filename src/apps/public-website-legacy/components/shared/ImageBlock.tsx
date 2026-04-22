interface ImageBlockProps {
  id: string;
  title: string;
  description: string;
  src?: string;
  alt?: string;
  showCaption?: boolean;
  className?: string;
}

function ImageBlock({
  id,
  title,
  description,
  src,
  alt,
  showCaption = false,
  className = "",
}: ImageBlockProps) {
  if (src) {
    return (
      <div id={id} className={`rounded-2xl ${className}`}>
        <div id={`${id}-image-container`} className="overflow-hidden rounded-2xl">
          <img
            id={`${id}-image`}
            src={src}
            alt={alt ?? title}
            className="h-full min-h-[280px] w-full rounded-2xl object-cover"
          />
        </div>
        {showCaption ? (
          <p id={`${id}-caption`} className="mt-3 text-sm font-medium text-[#2e2e2e]">
            {title}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div
      id={id}
      className={`flex min-h-[280px] items-center justify-center rounded-2xl border border-[#dc7e49]/30 bg-gradient-to-br from-[#dc7e49] to-[#8e4b27] p-8 text-white ${className}`}
    >
      <div id={`${id}-content`} className="text-center">
        <p id={`${id}-title`} className="text-xl font-semibold">
          {title}
        </p>
        <p id={`${id}-description`} className="mt-3 text-sm leading-7 text-white/90">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ImageBlock;
