import { getDirectoryElement } from './utils'
import { AddAllButton } from './elements'

new MutationObserver((_, observer) => {
  const directoryElement = getDirectoryElement()
  const addAllButton = directoryElement?.querySelector(
    '#add-directory-contacts'
  )

  if (directoryElement && !addAllButton) {
    observer.disconnect()
    const directoryHeading = directoryElement.parentElement
    directoryHeading.id = 'directory-heading'

    directoryHeading.append(AddAllButton())
  }
}).observe(document.documentElement, { childList: true, subtree: true })
