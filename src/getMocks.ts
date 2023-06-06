import isJest from './isJest';
const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, isJest() ? 0 : ms));
// eslint-disable-next-line @typescript-eslint/ban-types
export default function getMocks(resolve: Function) {
  return {
    async randomizeCellColors() {
      await sleep(1000);
      resolve(true);
    },
  };
}
