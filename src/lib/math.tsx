/**
 * Creates array of `size` numbers starting from `startAt` number
 * @param size Size of array
 * @param startAt Starting number of range
 * @param steps Steps for range
 * @returns Array of `size` integers starting from `startAt`
 */
export function range(size:number, startAt:number = 0, steps:number = 1):ReadonlyArray<number> {
    return [...Array(size).keys()].map(i => (i*steps) + startAt);
}
  
/**
 * Creates array of `size` random integers [min, max]
 * @param size Size of array to be generated
 * @param min Minimum value of range
 * @param max Maximum value of range
 * @returns Array of `size` random integers within range min-max inclusive.
 */
export function randomRange(size:number, min:number = 0, max:number=40):ReadonlyArray<number> {
    return [...Array(size)].map(() => Math.floor(Math.random() * (max - min + 1)) + min);
}
