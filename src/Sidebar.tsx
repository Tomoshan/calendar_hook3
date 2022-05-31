import { EventApi, formatDate } from "@fullcalendar/react";

interface Props {
  currentEvents: EventApi[];
  toggleWeekends: () => void;
  weekendsVisible: boolean;
}
const renderSidebarEvent = (event: EventApi) => (
  <li key={event.id}>
    <b>
      {formatDate(event.start!, {
        year: "numeric",
        month: "short",
        day: "numeric",
        locale: "ja"
      })}
    </b>
    <i>{event.title}</i>
  </li>
);
const Sidebar: React.VFC<Props> = ({
  currentEvents,
  toggleWeekends,
  weekendsVisible
}) => (
  <div className="demo-app-sidebar">
    <div className="demo-app-sidebar-section">
      <h2>操作方法</h2>
      <ul>
        <li>日付を選んでイベント作成</li>
        <li>ドラッグ&amp;ドロップでイベントの長さ変更</li>
        <li>クリックでイベント削除</li>
      </ul>
    </div>
    <div className="demo-app-sidebar-section">
      <label>
        <input
          type="checkbox"
          checked={weekendsVisible}
          onChange={toggleWeekends}
        ></input>
        週末を表示
      </label>
    </div>
    <div className="demo-app-sidebar-section">
      <h2>予定一覧({currentEvents.length})</h2>
      <ul>{currentEvents.map(renderSidebarEvent)}</ul>
    </div>
  </div>
);

export default Sidebar;
