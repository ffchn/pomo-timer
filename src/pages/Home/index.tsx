import { Play } from 'phosphor-react'
import {
  HomeWrapper,
  FormContainer,
  TimerContainer,
  TaskDescriptionInput,
  TimerDurationInput,
} from './styles'
import { Button } from '../../components/Button'

export default function Home() {
  return (
    <HomeWrapper>
      <form action="">
        <FormContainer>
          <label htmlFor="task">I will be working in</label>
          <TaskDescriptionInput
            type="text"
            id="task"
            list="task-suggestions"
            placeholder="fixing bugs"
          />

          <datalist id="task-suggestions">
            <option value="Build components" />
            <option value="Fix Bugs" />
            <option value="Documentation" />
          </datalist>

          <label htmlFor="timeAmountInMins">for</label>
          <TimerDurationInput
            type="number"
            id="timeAmountInMins"
            step="5"
            placeholder="00"
            min={5}
            max={60}
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
