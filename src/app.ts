import runGas from './runGas';
import Alpine from 'alpinejs';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.Alpine = Alpine;

Alpine.data('colorRandomizer', () => ({
  ready: 'Randomize Colors',
  loading: 'Loading...',
  isReady: true,
  async runRandomize() {
    try {
      this.isReady = false;
      await runGas('randomizeCellColors');
    } catch (error) {
      alert(error);
    } finally {
      this.isReady = true;
    }
  },
}));

Alpine.start();

console.log('hello world');
