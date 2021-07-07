import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  fonts: {
    heading: 'Ubuntu',
    body: 'Ubuntu'
  },
  components: {
    Link: {
      baseStyle: (props) => ({
        color: mode('blue.500', 'yellow.300')(props),
        transition: 'all .5s ease',
        fontWeight: 500,
        _hover: {
          textDecoration: 'underline',
          color: mode('blue.700', 'yellow.600')(props)
        }
      })
    }
  }
})

export default theme
