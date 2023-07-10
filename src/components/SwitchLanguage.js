import { useI18n } from "hooks/useI18n";

export default function SwitchLanguage() {
  const { currentLanguage, setCurrentLanguage } = useI18n()

  return (
    <div style={{ margin: "0 16px" }}>
      <label className="switch">
        <input
          type="checkbox"
          onChange={(event) => {
            setCurrentLanguage(event.target.checked ? "en" : "pt")
            localStorage.setItem("@language", event.target.checked ? "en" : "pt")
          }}
          checked={currentLanguage === 'en'}
        />
        <span className="slider round"></span>
      </label>
    </div>
  )
}