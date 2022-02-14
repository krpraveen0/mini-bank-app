import { UserConsumer } from '../context/UserContext'
import formatNumber from 'format-number';

const WithdrawButton = ({ amount }) => {
  return (
    <UserConsumer>
      {({ handleWithdrawal }) => (
        <button
          data-amount={amount}
          className='App__button'
          onClick={handleWithdrawal}
        >
          WITHDRAW {formatNumber({ prefix: '$' })(amount)}
        </button>
      )}
    </UserConsumer>
  )
}

export default WithdrawButton