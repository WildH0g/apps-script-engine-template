import runGas from './runGas.js';
import Alpine from 'alpinejs';
import './credits.js';
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
      console.error(error);
      alert(error);
    } finally {
      this.isReady = true;
    }
  },
}));

Alpine.start();
