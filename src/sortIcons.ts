// Direction icons for a sort control, keyed by WHAT is being ordered.
//
// lucide's sort set is semantic and that's the point: A→Z reads instantly for
// names where a bare arrow doesn't, and 0→1 says "this is a number" for a float.
// Both icons in a pair point DOWN — they describe reading down the list, not a
// direction of travel, so the pair differs by its glyphs rather than by flipping
// the arrow (which is what made "which way is this sorted?" unanswerable).
//
// Shared module rather than living in SortDirection.vue because the compact filter
// sheet renders the same icon inline: there the whole chip is the button, and a
// <SortDirection> button nested inside it would be invalid HTML.
import {
  ArrowDown01,
  ArrowDown10,
  ArrowDownAZ,
  ArrowDownNarrowWide,
  ArrowDownWideNarrow,
  ArrowDownZA,
} from "lucide-vue-next";

export type SortDir = "asc" | "desc";
/** alpha = text, numeric = a real number, amount = a rank or magnitude. */
export type SortKind = "alpha" | "numeric" | "amount";

export const SORT_DIR_ICON: Record<SortKind, Record<SortDir, unknown>> = {
  alpha: { asc: ArrowDownAZ, desc: ArrowDownZA },
  numeric: { asc: ArrowDown01, desc: ArrowDown10 },
  amount: { asc: ArrowDownNarrowWide, desc: ArrowDownWideNarrow },
};
