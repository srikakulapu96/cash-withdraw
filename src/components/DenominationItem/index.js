// Write your code here
import './index.css'
import React from 'react'

const DenominationItem = props => {
  const {currency, updateBalance} = props
  const {value} = currency
  const onClickButton = () => {
    updateBalance(value)
  }
  return (
    <li className="list-item">
      <button className="button-element" type="button" onClick={onClickButton}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
