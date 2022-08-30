import { useScreens } from './screens'
import { useLayouts } from './layouts'

const useViews = () => {
  return {
    useScreens,
    useLayouts
  }
}

export { useViews }
