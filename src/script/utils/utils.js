class Utils {
  static showElement(element) {
    element.classList.remove('d-none');
    element.hidden = false;
  }

  static hideElement(element) {
    element.classList.add('d-none');
    element.hidden = true;
  }
}
export default Utils;
