export default function hiddenBodyScroll(boolean: boolean): void {
  if (boolean) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "";
  }
}
