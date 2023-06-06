const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// eslint-disable-next-line @typescript-eslint/ban-types
export default function getMocks(resolve: Function) {
  return {
    async randomizeCellColors() {
      await sleep(1000);
      resolve(true);
    },
  };
}
