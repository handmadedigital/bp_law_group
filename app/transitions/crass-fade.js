import { animate, stop, Promise } from "liquid-fire";

export default function crossFade(opts) {
  opts = opts || {};
  stop(this.oldElement);
  return Promise.all([
    animate(this.oldElement, { opacity: 0 }, opts),
    animate(this.newElement, { opacity: [ (opts.maxOpacity || 1), 0 ] }, opts)
  ]);
}