"use client";

import { useMemo } from "react";
import { type SanityPalette, type SanityColor } from "@/types/sanity";

export default function DynamicTheme({ palette }: { palette?: SanityPalette | null }) {
  const cssVariables = useMemo(() => {
    if (!palette) return null;

    // Helper to safely extract hex from the sanity color object
    const getHex = (colorObj?: SanityColor) => colorObj?.hex ? colorObj.hex : null;

    // Since users enter HEX in sanity, but tailwind V4 expects oklch by default in the globals,
    // we can actually just override the CSS variables with valid HEX equivalents directly on the document.
    // Tailwind's new lightning CSS processing handles variable fallbacks effectively.
    
    // Light Mode CSS Variables
    const styleLines: string[] = [];
    
    styleLines.push(":root {");
    if (getHex(palette.light_background)) styleLines.push(`  --background: ${getHex(palette.light_background)};`);
    if (getHex(palette.light_foreground)) styleLines.push(`  --foreground: ${getHex(palette.light_foreground)};`);
    if (getHex(palette.light_primary)) styleLines.push(`  --primary: ${getHex(palette.light_primary)};`);
    if (getHex(palette.light_primary_foreground)) styleLines.push(`  --primary-foreground: ${getHex(palette.light_primary_foreground)};`);
    if (getHex(palette.light_muted)) styleLines.push(`  --muted: ${getHex(palette.light_muted)};`);
    if (getHex(palette.light_muted_foreground)) styleLines.push(`  --muted-foreground: ${getHex(palette.light_muted_foreground)};`);
    if (getHex(palette.light_border)) styleLines.push(`  --border: ${getHex(palette.light_border)};`);
    if (getHex(palette.light_border)) styleLines.push(`  --input: ${getHex(palette.light_border)};`); // Use border color for inputs
    if (getHex(palette.light_card)) styleLines.push(`  --card: ${getHex(palette.light_card)};`);
    if (getHex(palette.light_card)) styleLines.push(`  --popover: ${getHex(palette.light_card)};`); // Use card color for popovers
    styleLines.push("}");

    // Dark Mode CSS Variables
    styleLines.push(".dark {");
    if (getHex(palette.dark_background)) styleLines.push(`  --background: ${getHex(palette.dark_background)};`);
    if (getHex(palette.dark_foreground)) styleLines.push(`  --foreground: ${getHex(palette.dark_foreground)};`);
    if (getHex(palette.dark_primary)) styleLines.push(`  --primary: ${getHex(palette.dark_primary)};`);
    if (getHex(palette.dark_primary_foreground)) styleLines.push(`  --primary-foreground: ${getHex(palette.dark_primary_foreground)};`);
    if (getHex(palette.dark_muted)) styleLines.push(`  --muted: ${getHex(palette.dark_muted)};`);
    if (getHex(palette.dark_muted_foreground)) styleLines.push(`  --muted-foreground: ${getHex(palette.dark_muted_foreground)};`);
    if (getHex(palette.dark_border)) styleLines.push(`  --border: ${getHex(palette.dark_border)};`);
    if (getHex(palette.dark_border)) styleLines.push(`  --input: ${getHex(palette.dark_border)};`); // Use border color for inputs
    if (getHex(palette.dark_card)) styleLines.push(`  --card: ${getHex(palette.dark_card)};`);
    if (getHex(palette.dark_card)) styleLines.push(`  --popover: ${getHex(palette.dark_card)};`); // Use card color for popovers
    styleLines.push("}");

    return styleLines.join("\n");
  }, [palette]);

  if (!palette || !cssVariables) return null;

  return (
    <style dangerouslySetInnerHTML={{ __html: cssVariables }} />
  );
}
