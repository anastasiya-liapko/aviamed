export const hideMixin = {
  created: function() {
    document.addEventListener('mouseup', this.hide);
  },
  beforeDestroy: function () {
    document.removeEventListener('mouseup', this.hide);
  }
};