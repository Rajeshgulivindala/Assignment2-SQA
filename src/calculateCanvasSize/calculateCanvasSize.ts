
export default function calculateCanvasSize(length: string, width: string): number {
  // Convert inputs to numbers
  const parsedLength = parseFloat(length);
  const parsedWidth = parseFloat(width);

  // Check if inputs are valid numbers
  if (isNaN(parsedLength)) {
    return NaN; // Return NaN for invalid length
  }
  if (isNaN(parsedWidth)) {
    return NaN; // Return NaN for invalid width
  }

  // Calculate and return the result
  return parsedLength * parsedWidth;
}