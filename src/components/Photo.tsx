import fs from 'node:fs';
import path from 'node:path';
import type { CSSProperties } from 'react';
import { PHOTOS, remoteUrl } from '@/data/photos';
import type { PhotoKey } from '@/data/photos';

type Props = {
  name: PhotoKey;
  width?: number;
  priority?: boolean;
  className?: string;
  style?: CSSProperties;
  alt?: string;
};

/**
 * Affiche une photo. Si `public/photos/<nom>.jpg` existe (voir `npm run photos`),
 * elle est servie localement ; sinon on utilise le CDN Unsplash.
 */
export default function Photo({ name, width = 1200, priority = false, className, style, alt }: Props) {
  let local = false;
  try {
    local = fs.existsSync(path.join(process.cwd(), 'public', 'photos', `${name}.jpg`));
  } catch {
    local = false;
  }
  const src = local ? `${process.env.NEXT_PUBLIC_BASE_PATH}/photos/${name}.jpg` : remoteUrl(name, width);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt ?? PHOTOS[name].alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      referrerPolicy="no-referrer"
      className={className}
      style={style}
    />
  );
}

export function Credit({ name }: { name: PhotoKey }) {
  return <>{PHOTOS[name].credit}</>;
}
