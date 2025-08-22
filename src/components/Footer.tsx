import { useLanguage } from "@/utils/LanguageContext";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const FooterDetails = styled.div`
    .footer {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
        align-items: center;
        text-align: left;
        gap: 20rem;
        padding: 2rem 10rem 0 10rem;
        margin-top: 2rem;
        box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.1);

        .left {
            text-align: center;
            img {
                width: 25rem;
                height: auto;

                @media (max-width: 1200px) {
                    width: 15rem;
                }

                @media (max-width: 900px) {
                    width: 10rem;
                }

                @media (max-width: 600px) {
                    width: 7rem;
                }
            }
        }

        .center {
            display: flex;
            flex-direction: column;
            h1 {
                font-size: 1.5rem;
                color: var(--font);
                font-weight: 700;

                @media (max-width: 900px) {
                    font-size: 1.1rem;
                }

                @media (max-width: 600px) {
                    font-size: 1rem;
                }
            }

            a {
                text-decoration: underline;
            }
        }

        .right {
            i {
                font-size: 1.5rem;
                margin-right: 0.5rem;
                color: var(--font);

                @media (max-width: 900px) {
                    font-size: 1.1rem;
                }

                @media (max-width: 600px) {
                    font-size: 1rem;
                }
            }
        }

        @media (max-width: 1500px) {
            gap: 8rem;
            padding: 0 2rem;
        }

        @media (max-width: 900px) {
            gap: 2rem;
            padding: 0 1rem;
        }

        @media (max-width: 700px) {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            text-align: center;
            padding: 0 0.5rem;
        }
    }

    .copyright {
        margin-top: 1rem;
        padding: 1rem 0;
        text-align: center;
        background: var(--background);
        color: var(--font-gray);
        font-size: 0.8rem;
        box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.1);

        @media (max-width: 600px) {
            font-size: 0.7rem;
            padding: 0.7rem 0;
        }
    }
`;

const Footer = () => {
	const { language } = useLanguage();

	return (
		<FooterDetails>
			<div className="footer">
				<div className="left">
					<img src="/logotipo-black.png" alt="" />
					<p>
						{language === "enUS"
							? "We transform problems into systems."
							: language === "ptBR"
								? "Transformamos problemas em sistemas."
								: null}
					</p>
				</div>
				<div className="center">
					<h1>
						{language === "enUS"
							? "Company"
							: language === "ptBR"
								? "Empresa"
								: null}
					</h1>
					<Link href="/legal">
						{language === "enUS" ? "Terms and Policies" : "Termos e Políticas"}
					</Link>
					<p>Campinas - São Paulo, Brazil</p>
				</div>
				<div className="right">
					<h1>Social</h1>
					<div className="social">
						<Link href="https://www.github.com/nodrasoftware/" target="_blank">
							<i className="uil uil-github"></i>
						</Link>
						<Link href="https://wa.me/5519998018174" target="_blank">
							<i className="uil uil-whatsapp"></i>
						</Link>
					</div>
				</div>
			</div>

			<div className="copyright">
				<p>
					{language === "enUS"
						? `© ${new Date().getFullYear()} NODRA. All rights reserved.`
						: language === "ptBR"
							? `© ${new Date().getFullYear()} NODRA. Todos os direitos reservados.`
							: null}
				</p>
			</div>
		</FooterDetails>
	);
};

export default Footer;
