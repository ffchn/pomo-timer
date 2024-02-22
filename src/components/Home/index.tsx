import { Play } from 'phosphor-react'
import { HomeWrapper, FormContainer, TimerContainer } from './styles'

export default function Home() {
  return (
    <HomeWrapper>
      <form action="">
        <FormContainer>
          <label htmlFor="task">I will be workin in</label>
          <input type="text" id="task" />
          <label htmlFor="timeAmountInMins">for</label>
          <input type="number" id="timeAmountInMins" />
          <span>minutes</span>
        </FormContainer>

        <TimerContainer>
          <span>0</span>
          <span>0</span>
          <span className="separator">:</span>
          <span>0</span>
          <span>0</span>
        </TimerContainer>

        <button type="submit">
          <Play size={24} /> Start
        </button>
      </form>
    </HomeWrapper>
  )
}
