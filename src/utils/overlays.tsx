function checkOverlays(
  root: HTMLDivElement,
  fn: React.Dispatch<React.SetStateAction<boolean>>
) {
  if (root.hasAttribute('cart-overlay')) {
    root.removeAttribute('cart-overlay');
    fn(false);
  }
  if (root.hasAttribute('data-overlay')) {
    root.removeAttribute('data-overlay');
  }
}

export default checkOverlays;
