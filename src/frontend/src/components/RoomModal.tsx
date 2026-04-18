import { Link } from "@tanstack/react-router";
import { ArrowRight, Bed, Check, Maximize2, Users, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef } from "react";

export interface RoomDetail {
  name: string;
  size: string;
  bed: string;
  view: string;
  price: string;
  occupancy: string;
  description: string;
  amenities: string[];
}

interface RoomModalProps {
  room: RoomDetail | null;
  accentColor: string;
  onClose: () => void;
}

export function RoomModal({ room, accentColor, onClose }: RoomModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!room) return;
    const prev = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prev?.focus();
    };
  }, [room, onClose]);

  const headerStyle: React.CSSProperties = {
    backgroundColor: `${accentColor}18`,
    borderBottom: `3px solid ${accentColor}`,
  };

  const accentStyle: React.CSSProperties = { color: accentColor };
  const accentBg: React.CSSProperties = { backgroundColor: accentColor };

  return (
    <AnimatePresence>
      {room && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm cursor-pointer"
            onClick={onClose}
            aria-hidden="true"
            data-ocid="room-modal-backdrop"
          />

          {/* Modal panel */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-3 sm:p-4 pointer-events-none"
          >
            <dialog
              open
              aria-labelledby="room-modal-title"
              className="pointer-events-auto bg-card w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-0 m-0 border-0 static rounded-sm"
              data-ocid="room.dialog"
            >
              {/* Header band */}
              <div
                className="px-5 sm:px-8 py-5 sm:py-6 relative"
                style={headerStyle}
              >
                <p
                  className="font-body text-xs tracking-widest uppercase mb-1"
                  style={accentStyle}
                >
                  Room Details
                </p>
                <h2
                  id="room-modal-title"
                  className="font-display text-2xl sm:text-3xl font-semibold text-foreground pr-12"
                >
                  {room.name}
                </h2>
                {/* Close button — 44px touch target */}
                <button
                  ref={closeRef}
                  type="button"
                  onClick={onClose}
                  aria-label="Close room details"
                  data-ocid="room.close_button"
                  className="absolute top-3 right-3 sm:top-5 sm:right-5 w-11 h-11 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth rounded-sm"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="px-5 sm:px-8 py-5 sm:py-7 space-y-6 sm:space-y-7">
                {/* Stats row — 1-col on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { icon: Maximize2, label: "Size", value: room.size },
                    { icon: Bed, label: "Bed", value: room.bed },
                    { icon: Users, label: "Guests", value: room.occupancy },
                  ].map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="border border-border p-3 sm:p-4 flex sm:flex-col items-center sm:items-center gap-3 sm:gap-0 sm:text-center"
                    >
                      <Icon
                        className="w-4 h-4 sm:mx-auto sm:mb-1 flex-shrink-0"
                        style={accentStyle}
                      />
                      <div className="flex sm:flex-col items-center gap-2 sm:gap-0">
                        <p className="font-body text-xs text-muted-foreground sm:mb-0.5">
                          {label}
                        </p>
                        <span className="text-muted-foreground sm:hidden">
                          ·
                        </span>
                        <p className="font-body text-sm font-medium text-foreground">
                          {value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* View */}
                <p className="font-body text-xs" style={accentStyle}>
                  ◆ View — {room.view}
                </p>

                {/* Description */}
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {room.description}
                </p>

                {/* Amenities */}
                <div>
                  <p
                    className="font-body text-xs tracking-widest uppercase mb-4"
                    style={accentStyle}
                  >
                    Room Amenities
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {room.amenities.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 font-body text-sm text-foreground"
                      >
                        <Check
                          className="w-3.5 h-3.5 shrink-0"
                          style={accentStyle}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing + CTA — stack on mobile */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-border pt-6">
                  <div>
                    <p className="font-body text-xs text-muted-foreground">
                      from
                    </p>
                    <p className="font-display text-3xl font-semibold text-foreground">
                      {room.price}
                    </p>
                    <p className="font-body text-xs text-muted-foreground">
                      per night
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    onClick={onClose}
                    data-ocid="room.confirm_button"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 font-body text-sm tracking-wide text-card transition-smooth hover:opacity-90 min-h-[48px]"
                    style={accentBg}
                  >
                    Reserve This Room <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </dialog>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
