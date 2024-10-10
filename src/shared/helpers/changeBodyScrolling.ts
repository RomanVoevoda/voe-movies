export function changeBodyScrolling() {
  if (document.body.style.overflowY === "hidden") {
    document.body.style.overflowY = "scroll";
  } else {
    document.body.style.overflowY = "hidden";
  }
}
