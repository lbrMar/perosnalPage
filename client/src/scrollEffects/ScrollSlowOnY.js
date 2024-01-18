const ScrollSlowOnY = {

  scrollOffset: 100,

  determineCurrentSection: function (currentScrollPosition, sectionHeights) {
    for (let i = 0; i < sectionHeights.length - 1; i++) {
      if (currentScrollPosition < sectionHeights[i + 1]) {
        return i
      }
    }
    return sectionHeights.length - 1
  },

  determineSrollDirection: function (currentScrollPosition, scrollPosition) {
    if (currentScrollPosition > scrollPosition) {
      return 'down'
    } else if (currentScrollPosition < scrollPosition) {
      return 'up'
    }
  },

  scrollToNextSection: function (scrollSection, windowHeight) {
    const nextSection = (scrollSection + 1) * windowHeight

    window.scrollTo({
      top: nextSection,
      behavior: 'smooth'
    })
  },
  
  scrollToPrevSection: function (scrollSection, windowHeight) {
    const nextSection = (scrollSection) * windowHeight

    window.scrollTo({
      top: nextSection,
      behavior: 'smooth'
    })
  },

  goToSection: function (
      allowScrollHandling, 
      scrollDirection, 
      scrollPosition,
      scrollSection,
      sectionHeights,
      windowHeight) {

    if (!allowScrollHandling) {
      return
    }

    if (
      scrollDirection === 'down' &&
      scrollPosition >= sectionHeights[scrollSection + 1] - this.scrollOffset
    ) {
      this.scrollToNextSection(scrollSection, windowHeight)
    }

    if (
      scrollDirection === 'up' &&
      scrollPosition <= sectionHeights[scrollSection] + this.scrollOffset
    ) {
      this.scrollToPrevSection(scrollSection, windowHeight)
    }
  },
}

export default ScrollSlowOnY
