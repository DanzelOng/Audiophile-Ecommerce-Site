type ImageProps<T> = {
  className: string;
  images: T[];
  title: string;
};

function ResponsiveImage<T extends { path: string; width?: string }>({
  className,
  images,
  title,
}: ImageProps<T>) {
  return (
    <picture>
      {images.slice(0, -1).map((img, index) => (
        <source
          key={index}
          srcSet={img.path}
          media={`(max-width: ${img.width}em)`}
        />
      ))}
      <img
        className={className}
        src={images[images.length - 1].path}
        alt={title}
      />
    </picture>
  );
}

export default ResponsiveImage;
