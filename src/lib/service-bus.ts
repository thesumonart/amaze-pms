/**
 * Tiny cross-component channel: the navbar mega menu (and anything else)
 * can ask the Services scene to scroll into view and open a service's
 * detail dialog without sharing React state across the tree.
 */
export const OPEN_SERVICE_EVENT = "amaze:open-service";

export function requestServiceDialog(slug: string) {
  window.dispatchEvent(
    new CustomEvent<string>(OPEN_SERVICE_EVENT, { detail: slug }),
  );
}
