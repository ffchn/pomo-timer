import { Play } from 'phosphor-react'
import {
  HomeWrapper,
  FormContainer,
  TimerContainer,
  TaskDescriptionInput,
  TimerDurationInput,
} from './styles'
import { Button } from '../Button'

export default function Home() {
  return (
    <HomeWrapper>
      <form action="">
        <FormContainer>
          <label htmlFor="task">I will be working in</label>
          <TaskDescriptionInput
            type="text"
            id="task"
            placeholder="fixing bugs"
          />
          <label htmlFor="timeAmountInMins">for</label>
          <TimerDurationInput
            type="number"
            id="timeAmountInMins"
            placeholder="60"
          />
          <span>minutes</span>
        </FormContainer>

        <TimerContainer>
          <span>0</span>
          <span>0</span>
          <span className="separator">:</span>
          <span>0</span>
          <span>0</span>
        </TimerContainer>

        <Button type="submit">
          <Play size={24} /> Start
        </Button>
      </form>
    </HomeWrapper>
  )
}
