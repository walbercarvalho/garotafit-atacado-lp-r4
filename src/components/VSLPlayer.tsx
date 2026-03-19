import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

interface VSLPlayerProps {
  videoUrl: string;
  thumbnailUrl?: string;
  duration?: string;
  isActive?: boolean;
}

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

export function VSLPlayer({ videoUrl, thumbnailUrl, duration, isActive = true }: VSLPlayerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const videoId = getYouTubeId(videoUrl);
  const thumb = thumbnailUrl || (videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '');

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, close]);

  if (!isActive) return null;

  return (
    <>
      {/* Thumbnail with play button */}
      <div
        className="relative w-full aspect-[9/16] cursor-pointer group"
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        aria-label="Reproduzir vídeo"
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsOpen(true); }}
      >
        <img
          src={thumb}
          alt="Vídeo Garotafit"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-[0_0_40px_rgba(212,255,0,0.4)]"
          >
            <Play className="w-8 h-8 text-primary-foreground fill-current ml-1" />
          </motion.div>
        </div>

        {/* Duration badge */}
        {duration && (
          <span className="absolute bottom-4 right-4 bg-black/70 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
            ⏱ {duration}
          </span>
        )}
      </div>

      {/* Caption */}
      <p className="text-sm text-foreground/60 text-center mt-3 px-2">
        ⏱ Assista e entenda como funciona a parceria Garotafit antes de se cadastrar.
      </p>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && videoId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={close}
            role="dialog"
            aria-label="Player de vídeo"
          >
            <button
              onClick={(e) => { e.stopPropagation(); close(); }}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white bg-black/50 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors z-10 cursor-pointer"
              aria-label="Fechar vídeo"
              autoFocus
            >
              ✕
            </button>
            <div
              className="w-[85vw] max-w-[400px] aspect-[9/16]"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&rel=0`}
                title="Vídeo Garotafit"
                className="w-full h-full rounded-lg"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
