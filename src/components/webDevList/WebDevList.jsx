import "./webDevList.scss"

export default function webDevList({ id, title, active, setSelected }) {
    return (
        <li
            className={active ? "webDevList active" : "webDevList"}
            onClick={() => setSelected(id)}
        >
            {title}
        </li>
    )
}
