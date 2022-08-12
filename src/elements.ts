import { addAllContacts } from './utils'
import './styles.css'

function ButtonText() {
  const span = document.createElement('span')
  span.className = 'mdc-button__label'
  span.innerText = 'Add all'
  return span
}

function ButtonRipple() {
  const ripple = document.createElement('div')
  ripple.className = 'mdc-button__ripple'
  return ripple
}

function ButtonIcon() {
  const icon = document.createElement('i')
  icon.className = 'mdc-button__icon material-symbols-outlined'
  icon.innerText = `add`
  return icon
}

export function AddAllButton() {
  const button = document.createElement('button')
  button.className = 'mdc-button mdc-button--raised mdc-button--leading'
  button.id = 'add-directory-contacts'
  button.onclick = () => addAllContacts(button)

  button.appendChild(ButtonRipple())
  button.appendChild(ButtonIcon())
  button.appendChild(ButtonText())

  return button
}
