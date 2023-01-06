import { useI18n } from "hooks/useI18n";

export default function SwitchLanguage() {
  const { currentLanguage, setCurrentLanguage } = useI18n()

  return (
    <div style={{ margin: "0 16px" }}>
      <label className="switch">
        <input
          type="checkbox"
          onChange={(event) => {
            setCurrentLanguage(event.target.checked ? "en" : "pt-BR")
            localStorage.setItem("@language", event.target.checked ? "en" : "pt-BR")
          }}
          checked={currentLanguage === 'en'}
        />
        <span className="slider round"></span>
      </label>
    </div>
  )
}