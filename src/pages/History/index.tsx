import { HistoryPageWrapper, Status, TaskListWrapper } from './styles'

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
              <td>
                <Status status="finished"> Finished</Status>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>60 mins</td>
              <td>2 months ago</td>
              <td>
                <Status status="finished"> Finished</Status>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>60 mins</td>
              <td>2 months ago</td>
              <td>
                <Status status="paused"> Paused</Status>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>60 mins</td>
              <td>2 months ago</td>
              <td>
                <Status status="cancelled"> Cancelled</Status>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>60 mins</td>
              <td>2 months ago</td>
              <td>
                <Status status="finished"> Finished</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </TaskListWrapper>
    </HistoryPageWrapper>
  )
}
