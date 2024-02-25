import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import {
  HomeWrapper,
  FormContainer,
  TimerContainer,
  TaskDescriptionInput,
  TimerDurationInput,
} from "./styles";
import { Button } from "../../components/Button";

const newTaskValidationSchema = zod.object({
  task: zod.string().min(1, "Inform a description"),
  timeAmountInMins: zod.number().min(1).max(60, 'Task time cycle must be 60 minutes maximum'),
});

type NewTaskFormData = zod.infer<typeof newTaskValidationSchema>

export default function Home() {
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
    defaultValues:{
      task: '',
      timeAmountInMins: 5
    }
  });

  function handleCreateNewTask(data: NewTaskFormData) {
    console.log(data);
    reset()
  }

  const task = watch("task");
  const isSubmitDisabled = !task;

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
            {...register("task")}
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
            {...register("timeAmountInMins", { valueAsNumber: true })}
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

        <Button type="submit" disabled={isSubmitDisabled}>
          <Play size={24} /> Start
        </Button>
      </form>
    </HomeWrapper>
  );
}
