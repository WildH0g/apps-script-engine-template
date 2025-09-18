import Alpine from 'alpinejs';
import './credits';
import runGas from './lib/runGas';
import './styles.css';

declare global {
  interface Window {
    Alpine: typeof Alpine;
  }
}

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
