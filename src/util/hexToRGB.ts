export function hexToRgb(hex: string): string {
  // Remove the leading `#` if present
  const sanitizedHex = hex.replace("#", "");

  // Parse the hex color into RGB components
  const bigint = parseInt(sanitizedHex, 16);
  const r = (bigint >> 16) & 255; // Extract red
  const g = (bigint >> 8) & 255; // Extract green
  const b = bigint & 255; // Extract blue

  return `${r} ${g} ${b}`; // Return the RGB string format
}
