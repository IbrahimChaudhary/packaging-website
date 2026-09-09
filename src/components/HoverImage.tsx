interface HoverImageProps {
  src: string;
  hoverSrc?: string;
  alt: string;
  className?: string;
}

const HoverImage = ({ src, hoverSrc, alt }: HoverImageProps) => (
  <div className="relative w-full h-full">
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-cover ${
        hoverSrc
          ? "transition-opacity duration-300 group-hover:opacity-0"
          : "group-hover:scale-105 transition-transform duration-300"
      }`}
      loading="lazy"
    />
    {hoverSrc && (
      <img
        src={hoverSrc}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        loading="lazy"
      />
    )}
  </div>
);

export default HoverImage;