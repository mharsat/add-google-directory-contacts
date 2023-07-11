export const getDirectoryElement = (): HTMLDivElement => {
  return Array.from(
    document.querySelectorAll<HTMLDivElement>('[role=heading]')
  ).find((el) => el.textContent.toLowerCase().includes('directory ('))
}
const getDirectorySize = (): number => {
  const directoryElement = getDirectoryElement()
  const directorySize = directoryElement.innerText.match(/[0-9]+/g)[0]
  return parseInt(directorySize, 10)
}
const getVisibleContacts = (): NodeListOf<HTMLDivElement> =>
  document.querySelectorAll('[type=checkbox]')

const getContactId = (contact: HTMLDivElement) =>
  contact.closest('[data-id]').getAttribute('data-id')

const scrollToLastContact = (contacts: NodeListOf<HTMLDivElement>): void =>
  contacts[contacts.length - 1].scrollIntoView()

const addSelectedContacts = () => {
  const addContactsButton = document.querySelector<HTMLDivElement>(
    "[role=menubar] [aria-label='Add to contacts']"
  )
  if (addContactsButton) {
    addContactsButton.click()
    console.log('Contacts added successfully')
  }
}

export const addAllContacts = (button: HTMLButtonElement): void => {
  button.blur()
  const checkedContacts: Record<string, boolean> = {}
  const directorySize = getDirectorySize()
  const intervalId = setInterval(() => {
    const contacts = getVisibleContacts()
    contacts.forEach((contact) => {
      const id = getContactId(contact)
      if (!checkedContacts[id]) {
        contact.click()
        checkedContacts[id] = true
      }
    })
    scrollToLastContact(contacts)
    const checkedCount = Object.keys(checkedContacts).length
    console.log(`${checkedCount}/${directorySize} contacts checked`)
    if (checkedCount >= directorySize) {
      clearInterval(intervalId)
      setTimeout(addSelectedContacts, 1000)
      button.scrollIntoView({ block: 'end', behavior: 'smooth' })
    }
  }, 100)
}
