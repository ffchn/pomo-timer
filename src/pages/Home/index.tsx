import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  HomeWrapper,
  FormContainer,
  TimerContainer,
  TaskDescriptionInput,
  TimerDurationInput,
} from './styles'
import { Button } from '../../components/Button'
import { useState } from 'react'

const newTaskValidationSchema = zod.object({
  task: zod.string().min(1, 'Inform a description'),
  timeAmountInMins: zod
    .number()
    .min(1)
    .max(60, 'Task time cycle must be 60 minutes maximum'),
})

type NewTaskFormData = zod.infer<typeof newTaskValidationSchema>

interface Task {
  id: string
  task: string
  timeAmountInMins: number
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [activeTaskId, setActiveTaskId] = useState<string | null>(null)
  const [cycleTimeInSeconds, setCycleTimeInSeconds] = useState(0)

  /**
   * function register(name, {opions})
   * returns { onChange, onBlur, onFocus...}
   */

  /**
   * function handleSubmit(function(data))
   */

  /**
   * watch(string)
   * watches for the field change and returns value
   */

  const { register, handleSubmit, watch, reset } = useForm<NewTaskFormData>({
    resolver: zodResolver(newTaskValidationSchema),
    defaultValues: {
      task: '',
      timeAmountInMins: 5,
    },
  })

  function handleCreateNewTask(data: NewTaskFormData) {
    const newTask: Task = {
      id: String(new Date().getTime()), //creates an unique ID using timestamp
      task: data.task,
      timeAmountInMins: data.timeAmountInMins,
    }

    setTasks((state) => [...state, newTask])
    setActiveTaskId(newTask.id)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  const activeTask = tasks.find((task) => task.id === activeTaskId)
  const taskTimeInSeconds = activeTask ? activeTask.timeAmountInMins * 60 : 0
  const currentCycleTimeInSeconds = activeTask
    ? taskTimeInSeconds - cycleTimeInSeconds
    : 0

  const timerMinutes = Math.floor(currentCycleTimeInSeconds / 60)
  const timerSeconds = Math.floor(currentCycleTimeInSeconds % 60)

  const minutes = String(timerMinutes).padStart(2, '0') //completes string with 0 until it has 0 characters
  const seconds = String(timerSeconds).padStart(2, '0') //completes string with 0 until it has 0 characters

  return (
    <HomeWrapper>
      <form onSubmit={handleSubmit(handleCreateNewTask)} action="">
        <FormContainer>
          <label htmlFor="task">I will be working in</label>
          <TaskDescriptionInput
            type="text"
            id="task"
            list="task-suggestions"
            placeholder="fixing bugs"
            {...register('task')}
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
            placeholder="00"
            {...register('timeAmountInMins', { valueAsNumber: true })}
          />
          <span>minutes</span>
        </FormContainer>

        <TimerContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <span className="separator">:</span>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </TimerContainer>

        <Button type="submit" disabled={isSubmitDisabled}>
          <Play size={24} /> Start
        </Button>
      </form>
    </HomeWrapper>
  )
}
