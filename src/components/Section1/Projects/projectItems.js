import cs50Logo from '../../../assets/projectImages/CS50-logo.png'
import odinProjectLogo from '../../../assets/projectImages/odin-project-logo.svg'
import projectDescriptions from '../../../utils/Strings/projectStrings'

const {
  odinProjectDescription,
  cs50ProjectDescription
} = projectDescriptions

const projectItems = [
  {
    image: cs50Logo,
    text: cs50ProjectDescription,
    link: 'https://pll.harvard.edu/course/cs50-introduction-computer-science'
  },
  {
    image: odinProjectLogo,
    text: odinProjectDescription,
    link: 'https://www.theodinproject.com/'
  }
]

export default projectItems
