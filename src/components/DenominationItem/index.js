// Write your code here
import './index.css'

const DenominationItem = props => {
  const {eachDenominationDetails, onWithdrawAmount} = props
  const {value} = eachDenominationDetails

  const onWithdraw = () => {
    onWithdrawAmount(value)
  }

  return (
    <li className="denomination-item">
      <button onClick={onWithdraw} className="denomination-btn" type="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
