/**
 * Return the distance between the points passed by parameters
 * @param x1 X value of point 1
 * @param y1 Y value of point 1
 * @param x2 X value of point 2
 * @param y2 Y value of point 2
 * @returns The distance between the points
 */
export function getDistanceBetweenTwoPoints(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}
