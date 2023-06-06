import runGas from './runGas';
console.log('hello world');

function qs(selector: string) {
  return document.querySelector(selector);
}

const [btnActive, btnDisabled] = [
  qs('button#btn-active'),
  qs('button#btn-disabled'),
];

btnActive.addEventListener('click', async () => {
  btnActive.classList.add('hidden');
  btnDisabled.classList.remove('hidden');
  await runGas('randomizeCellColors');
  btnActive.classList.remove('hidden');
  btnDisabled.classList.add('hidden');
});
