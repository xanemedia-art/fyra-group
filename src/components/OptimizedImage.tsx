import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

/**
 * A wrapper around <img> that handles lazy loading and provides
 * a smooth fade-in effect once the image is loaded.
 */
export function OptimizedImage({
  src,
  alt,
  className,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // If it's a priority image, we want to ensure it's treated as such
    // by the browser (though <img> loading="eager" is the default).
  }, [priority]);

  return (
    <div className={cn("relative overflow-hidden bg-muted/20", className)}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-700 ease-in-out",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        {...props}
      />
      
      {/* Optional: Low-quality placeholder or shimmer could go here */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-muted/40" />
      )}
    </div>
  );
}
