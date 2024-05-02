function checkOverlays(
  root: HTMLDivElement,
  fn1: React.Dispatch<React.SetStateAction<boolean>>,
  fn2: React.Dispatch<React.SetStateAction<boolean>>
) {
  if (root.hasAttribute('cart-overlay')) {
    root.removeAttribute('cart-overlay');
    fn1(false);
  }
  if (root.hasAttribute('data-overlay')) {
    root.removeAttribute('data-overlay');
    fn2(false);
  }
}

export default checkOverlays;
