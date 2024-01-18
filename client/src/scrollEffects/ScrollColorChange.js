const ScrollColorChanger = {
  bg1: '#FF004D',
  bg2: '#22092C',
  bg3: '#1D2B53',
  bg4: '#000000',

  setBackgroundColor: function (color) {
    document.body.style.backgroundColor = color
  },

  determineBackgroundColor: function (scrollPosition) {
      const screenHeight = window.innerHeight
      const halfScreenHeight = screenHeight / 2

    if (scrollPosition < (screenHeight / 2)) {
      this.setBackgroundColor(this.bg1)
    } else if (scrollPosition >= (screenHeight / 2) 
        && scrollPosition < (screenHeight + halfScreenHeight)) {
      this.setBackgroundColor(this.bg2)
    } else if (scrollPosition >= (screenHeight + halfScreenHeight)
        && (scrollPosition < ((screenHeight * 2) + halfScreenHeight))) {
      this.setBackgroundColor(this.bg3)
    } else if (scrollPosition >= ((screenHeight * 2) + halfScreenHeight)) {
      this.setBackgroundColor(this.bg4)
    }
  },
}

export default ScrollColorChanger
