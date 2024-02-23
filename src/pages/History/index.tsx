import { HistoryPageWrapper, TaskListWrapper } from './styles'

export default function History() {
  return (
    <HistoryPageWrapper>
      <h1>Task history</h1>

      <TaskListWrapper>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Task</td>
              <td>60 mins</td>
              <td>2 months ago</td>
              <td>Finished</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>60 mins</td>
              <td>2 months ago</td>
              <td>Finished</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>60 mins</td>
              <td>2 months ago</td>
              <td>Finished</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>60 mins</td>
              <td>2 months ago</td>
              <td>Finished</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>60 mins</td>
              <td>2 months ago</td>
              <td>Finished</td>
            </tr>
          </tbody>
        </table>
      </TaskListWrapper>
    </HistoryPageWrapper>
  )
}
