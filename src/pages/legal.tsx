import Footer from "@/components/Footer";
import { useLanguage } from "@/utils/LanguageContext";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const LegalDetails = styled.div`
    display: flex;
    flex-direction: column;

    padding: 16px 30rem;
    border-top: 1px solid var(--gray);

    .logo, .i18n {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo {
        margin-top: 1rem;

        img {
            width: 30rem;
        }
    }

    .i18n {
        text-align: left;
        gap: 1rem;
        margin: 1rem 0;

        button {
            border: none;
            background: none;

            img {
                width: 50px;
                cursor: pointer;
            }
        }
    }

    h4, p {
        margin-top: 1rem;
        text-align: left;
        align-items: start;
    }
`;

const legalPage = () => {
	const { language, setLanguage } = useLanguage();

	return (
		<>
			<LegalDetails>
				<div className="logo">
					<Link href="/">
						<img src="/logotipo-black.png" alt="" />
					</Link>
				</div>
				<div className="i18n">
					<button onClick={() => setLanguage("ptBR")}>
						<img src="/brazil.png" alt="Brasil" />
					</button>
					<button onClick={() => setLanguage("enUS")}>
						<img src="usa.png" alt="United States" />
					</button>
				</div>

				<h1>
					{language === "enUS"
						? "Privacy Policy and Terms of Contract"
						: "Política de Privacidade e Termos de Contrato"}
				</h1>

				<h4>{language === "enUS" ? "1. Introduction" : "1. Introdução"}</h4>
				<p>
					{language === "enUS"
						? "By contracting NODRA's services, the customer agrees to the terms and conditions described in this document. NODRA is committed to fully complying with the General Data Protection Law (LGPD) (Law No. 13,709/2018) - Brazilian Law, ensuring privacy, security, and transparency in the use of collected personal data."
						: "Ao contratar os serviços da NODRA, o cliente concorda com os termos e condições descritos neste documento. A NODRA compromete-se a cumprir integralmente a Lei Geral de Proteção de Dados Pessoais – LGPD (Lei nº 13.709/2018), zelando pela privacidade, segurança e transparência no uso dos dados pessoais coletados."}
				</p>

				<h4>
					{language === "enUS"
						? "2. Service Provision Contract"
						: "2. Contrato de Prestação de Serviços"}
				</h4>
				<p>
					{language === "enUS"
						? "Delivery Commitment"
						: "Compromisso de Entrega"}
				</p>
				<p>
					{language === "enUS"
						? "NODRA is committed to delivering projects within the established deadlines, in accordance with the specifications agreed upon in the contract. Should any adjustments to the schedule be necessary, the parties will be notified in advance."
						: "A NODRA se compromete a entregar os projetos nos prazos estabelecidos, conforme as especificações acordadas em contrato. Caso haja necessidade de ajuste no cronograma, as partes serão notificadas com antecedência."}
				</p>
				<p>
					{language === "enUS"
						? "Meetings and Communication"
						: "Reuniões e Comunicação"}
				</p>
				<p>
					{language === "enUS"
						? "Regular meetings will be held to discuss progress, discuss progress, and make necessary adjustments. The schedule will be defined by both parties."
						: "Serão realizadas reuniões periódicas para alinhamento, apresentação de progresso e ajustes necessários. O cronograma será definido entre as partes."}
				</p>

				<h4>
					{language === "enUS" ? "3. Payment Method" : "3. Forma de Pagamento"}
				</h4>
				<p>
					{language === "enUS"
						? "Payment will be made as agreed in the contract, with an initial payment of 25% (twenty-five percent) of the total amount required upon formalization. The remainder will be due upon project delivery. Payments via bank transfer, boleto, or another pre-arranged method are accepted."
						: "O pagamento será realizado conforme acordado em contrato, sendo exigido o pagamento inicial de 25% (vinte e cinco por cento) do valor total no ato da formalização. O restante será pago na entrega do projeto. São aceitos pagamentos via transferência bancária, boleto ou outro método previamente combinado."}
				</p>

				<h4>
					{language === "enUS"
						? "4. Collection and Use of Personal Data"
						: "4. Coleta e Uso de Dados Pessoais"}
				</h4>
				<p>
					{language === "enUS"
						? "We only collect the data necessary to perform the contracted services, such as: name, email, telephone number, photo, company details, and other technical information voluntarily provided by the customer."
						: "Coletamos apenas os dados necessários para a execução dos serviços contratados, como: nome, e-mail, telefone, foto, dados da empresa, e outras informações técnicas fornecidas voluntariamente pelo cliente."}
				</p>

				<h4>
					{language === "enUS"
						? "5. Legal Basis for Data Processing"
						: "5. Base Legal para o Tratamento de Dados"}
				</h4>

				<p>
					{language === "enUS"
						? "NODRA processes personal data based on the following legal assumptions of the LGPD:"
						: "A NODRA realiza o tratamento de dados pessoais com base nas seguintes hipóteses legais da LGPD:"}
				</p>
				<p>
					{language === "enUS"
						? "Consent of the holder (Art. 7, I);"
						: "Consentimento do titular (Art. 7º, I);"}
				</p>
				<p>
					{language === "enUS"
						? "Execution of a contract or preliminary procedures related to a contract (Art. 7, V);"
						: "Execução de contrato ou de procedimentos preliminares relacionados a contrato (Art. 7º, V);"}
				</p>
				<p>
					{language === "enUS"
						? "Compliance with legal or regulatory obligations (Art. 7, II), when applicable."
						: "Cumprimento de obrigação legal ou regulatória (Art. 7º, II), quando aplicável."}
				</p>

				<h4>
					{language === "enUS"
						? "6. Rights of Data Subjects"
						: "6. Direitos dos Titulares"}
				</h4>
				<p>
					{language === "enUS"
						? "Under the terms of the LGPD, the data subject may, at any time, exercise the following rights:"
						: "Nos termos da LGPD, o titular dos dados pode, a qualquer momento, exercer os seguintes direitos:"}
				</p>
				<p>
					{language === "enUS"
						? "Confirm the existence of processing of your data;"
						: "Confirmar a existência de tratamento de seus dados;"}
				</p>
				<p>
					{language === "enUS"
						? "Access, correct, update or request deletion of your data;"
						: "Acessar, corrigir, atualizar ou solicitar a exclusão de seus dados;"}
				</p>
				<p>
					{language === "enUS"
						? "Request data portability;"
						: "Solicitar a portabilidade dos dados;"}
				</p>
				<p>
					{language === "enUS"
						? "Revoke the consent provided;"
						: "Revogar o consentimento fornecido;"}
				</p>
				<p>
					{language === "enUS"
						? "Request information about data sharing."
						: "Solicitar informações sobre o compartilhamento dos dados."}
				</p>
				<p>
					{language === "enUS"
						? "Requests can be made through the contact channels provided in this policy."
						: "As solicitações podem ser feitas através dos canais de contato informados nesta política."}
				</p>

				<h4>
					{language === "enUS"
						? "7. Confidentiality and Security"
						: "7. Confidencialidade e Segurança"}
				</h4>
				<p>
					{language === "enUS"
						? "All data and information shared with NODRA will be treated with complete confidentiality. Only authorized employees directly involved in the project will have access to such information."
						: "Todos os dados e informações compartilhados com a NODRA serão tratados com total confidencialidade. Apenas colaboradores autorizados e diretamente envolvidos no projeto terão acesso a tais informações."}
				</p>
				<p>
					{language === "enUS"
						? "We adopt technical and administrative measures to protect data against unauthorized access, leaks, loss or any form of misuse."
						: "Adotamos medidas técnicas e administrativas para proteger os dados contra acessos não autorizados, vazamentos, perdas ou qualquer forma de uso indevido."}
				</p>
				<p>
					{language === "enUS"
						? "NODRA is committed to:"
						: "A NODRA se compromete a:"}
				</p>
				<p>
					{language === "enUS"
						? "Do not sell or disclose personal data to third parties for commercial purposes;"
						: "Não vender ou divulgar dados pessoais a terceiros para fins comerciais;"}
				</p>
				<p>
					{language === "enUS"
						? "Do not reuse, replicate, or commercialize customer ideas, code, or designs."
						: "Não reutilizar, replicar ou comercializar ideias, códigos ou projetos dos clientes."}
				</p>

				<h4>
					{language === "enUS"
						? "8. Data Storage and Retention"
						: "8. Armazenamento e Retenção de Dados"}
				</h4>
				<p>
					{language === "enUS"
						? "Personal data will be stored only for the time necessary to perform the contracted service or as required by legal obligations. After the contractual relationship ends, data may be anonymized or deleted, unless there is a legal retention obligation."
						: "Os dados pessoais serão armazenados apenas pelo tempo necessário para a execução do serviço contratado ou conforme exigido por obrigações legais. Após o encerramento da relação contratual, os dados poderão ser anonimizados ou excluídos, salvo obrigação legal de retenção."}
				</p>

				<h4>
					{language === "enUS"
						? "9. Cookie Policy (for websites)"
						: "9. Política de Cookies (para sites)"}
				</h4>
				<p>
					{language === "enUS"
						? "NODRA's website, as well as websites developed for clients and subsidiaries, may use cookies to improve the browsing experience. Cookies are used to identify information such as browser type, operating system, and approximate geographic location, with the aim of improving the services provided."
						: "O site da NODRA e os sites desenvolvidos para clientes poderão utilizar cookies para melhorar a experiência de navegação. Os cookies são usados para identificar informações como tipo de navegador, sistema operacional, e localização geográfica aproximada, com o objetivo de aprimorar os serviços prestados."}
				</p>
				<p>
					{language === "enUS"
						? "The use of cookies will depend on the visitor's consent, who may configure their browser to refuse them, or be notified of their use."
						: "O uso de cookies dependerá do consentimento do visitante, que poderá configurar seu navegador para recusá-los, ou ser notificado sobre sua utilização."}
				</p>

				<h4>
					{language === "enUS"
						? "10. Policy Changes"
						: "10. Alterações na Política"}
				</h4>
				<p>
					{language === "enUS"
						? "This policy may be updated at any time without prior notice. Significant changes will be communicated to customers appropriately. The current version will always be available on the NODRA website."
						: "Esta política poderá ser atualizada a qualquer momento, sem aviso prévio. Alterações significativas serão comunicadas aos clientes de forma apropriada. A versão atual estará sempre disponível no site da NODRA."}
				</p>

				<h4>
					{language === "enUS"
						? "11. Data Controller (DPO)"
						: "11. Encarregado pelo Tratamento de Dados (DPO)"}
				</h4>
				<p>
					{language === "enUS"
						? "To exercise your rights as a data subject or to clarify any doubts related to the protection of personal data, please contact our Data Protection Officer (DPO):"
						: "Para exercer seus direitos como titular de dados ou tirar dúvidas relacionadas à proteção de dados pessoais, entre em contato com nosso Encarregado (DPO):"}
				</p>
				<p>
					{language === "enUS"
						? "Name: Anderson Marlon Tomaz Alves"
						: "Nome: Anderson Marlon Tomaz Alves"}
				</p>
				<p>E-mail: anderson18.marlon@gmail.com</p>

				<h4>{language === "enUS" ? "12. Contact" : "12. Contato"}</h4>
				<p>
					{language === "enUS"
						? "If you have any questions, suggestions or requests related to this Privacy Policy and Terms of Contract, please contact us through our official channels:"
						: "Em caso de dúvidas, sugestões ou solicitações relacionadas a esta Política de Privacidade e Termos de Contrato, entre em contato conosco por meio dos nossos canais oficiais:"}
				</p>
				<p>Website: www.nodrasoftware.vercel.app</p>
				<p>E-mail: anderson18.marlon@gmail.com</p>
			</LegalDetails>
			<Footer />
		</>
	);
};

export default legalPage;
