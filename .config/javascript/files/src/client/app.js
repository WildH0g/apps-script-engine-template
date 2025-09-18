import Alpine from 'alpinejs';
import './credits.js';
import runGas from './lib/runGas.js';
import './styles.css';
// @ts-expect-error TS2322: Type 'Alpine' is not assignable to type 'typeof Alpine'. This is necessary because Alpine's global type isn't perfectly aligned with its module export, but for practical purposes, assigning it to window works correctly.
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
