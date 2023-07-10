import { useI18n } from 'hooks/useI18n';
import { useEffect, useMemo, useState } from 'react';
import {
    FaWhatsapp
} from 'react-icons/fa';
import { sendDiscordNotification } from 'services/discord-notify';

export default function Floating() {
    const { currentLanguage, languagesObject } = useI18n();
  
    const selectedLanguage = useMemo(() => {
    return currentLanguage === 'pt' ? languagesObject.pt : languagesObject.en
  }, [currentLanguage])

    const [whatsNome, setWhatsNome] = useState("");
    const [whatsFone, setWhatsFone] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {

        document.getElementById("call-to-action").classList.toggle("hidden");

        const timer = setTimeout(() => {
            document.getElementById("call-to-action").classList.toggle("hidden");
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    async function handleSubmitForm() {
        if (whatsNome === "") {
            setErrorMsg(selectedLanguage.floating_erro_message_name);

            document.getElementById("errorMsg").classList.toggle("hidden");
            setTimeout(() => {
                document.getElementById("errorMsg").classList.toggle("hidden");
                setErrorMsg("");
            }, 3000);
            return;
        }
        if (whatsFone === "") {
            setErrorMsg(selectedLanguage.floating_erro_message_phone);

            document.getElementById("errorMsg").classList.toggle("hidden");
            setTimeout(() => {
                document.getElementById("errorMsg").classList.toggle("hidden");
                setErrorMsg("");
            }, 3000);
            return;
        }

        if (whatsFone.length < 15) {
            setErrorMsg(selectedLanguage.floating_erro_message_phone_length);

            document.getElementById("errorMsg").classList.toggle("hidden");
            setTimeout(() => {
                document.getElementById("errorMsg").classList.toggle("hidden");
                setErrorMsg("");
            }, 3000);
            return;
        }

        let whatsPhone = `+5551992736445`;
        let whatsMsg = {
            "en": `Hello, My name is *${whatsNome}* and i saw your portfolio and wanna talk more about with you.`,
            "pt-BR": `Olá, me chamo *${whatsNome}* vi seu portfólio online e gostaria de conversar mais com você.`
        };

        let url = `https://web.whatsapp.com/send/?phone=%2B55${whatsPhone[currentLanguage].replace(/\D/g, "")}&text=${encodeURI(whatsMsg)}&amp;text&amp;type=phone_number&amp;app_absent=0`;

        const whatsMessage = {
            "en": `Hello, i recive your contact through my website. Do you wanna talk about creation of apps?\nLet's talk ;-)`,
            "pt-BR": `Olá, Recebi seu contato, gostaria de saber sobre a criação de apps?\nBora conversar ;-)`
        }


        const discordMessage = `
        -----------------------------------------------------------
        Contato feito pelo Floating Button
        
        **Nome:** ${whatsNome}
        **Celular:** ${whatsFone}

        https://wa.me/+55${whatsFone.replace(/\D/g, "")}?text=${encodeURI(whatsMessage[currentLanguage])}

        -----------------------------------------------------------
        `
        sendDiscordNotification(discordMessage, 'bot')

        window.open(url, "_blank");

        setErrorMsg("");
        setWhatsFone("");
        setWhatsNome("");
        document.getElementById("whats-form").classList.toggle("hidden");
    }

    function handleShowForm() {
        document.getElementById("whats-form").classList.toggle("hidden");
    }

    return (
        <div>
            <button id="whats-btn" onClick={handleShowForm} className="whats-btn">
                <FaWhatsapp size={32} color="#FFF" />
            </button>
            <div id="call-to-action" className="call-to-action hidden">
                {selectedLanguage.floating_ballon_text}
            </div>
            <div id="whats-form" className="whats-form hidden">
                <div className="form-header">
                    {selectedLanguage.floating_header_form_text}
                </div>
                <div className="form-body">
                    <div id="errorMsg" className="error hidden">
                        {errorMsg}
                    </div>
                    <div className="form-input-group">
                        <label className="whats-form-label" htmlFor="whats-name">
                            {selectedLanguage.floating_field_label_name}
                        </label>
                        <input id="whats-name" value={whatsNome} onChange={(e) => { setWhatsNome(e.target.value) }} className="whats-form-input" />
                    </div>

                    <div className="form-input-group">
                        <label className="whats-form-label" htmlFor="whats-phone">
                            {selectedLanguage.floating_field_label_phone}
                        </label>
                        <input
                            id="whats-phone"
                            onChange={(e) => { setWhatsFone(e.target.value) }}
                            value={whatsFone}
                            type="number"
                            inputMode='numeric'
                            className="whats-form-input"
                        />
                    </div>

                    <button onClick={handleSubmitForm} className="whats-form-button">
                        {selectedLanguage.floating_form_button_text}
                    </button>
                </div>
                <div className="form-footer">
                    {selectedLanguage.floating_span_text}
                </div>
            </div>
        </div>
    );
}