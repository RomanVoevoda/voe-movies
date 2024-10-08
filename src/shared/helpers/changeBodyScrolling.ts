export function changeBodyScrolling() {
  document.body.style.overflowY === "hidden"
    ? (document.body.style.overflowY = "scroll")
    : (document.body.style.overflowY = "hidden");
}
