import HomeDetails from "@/components/HomeDetails";
import Head from "next/head";
import React, { useState } from "react";

const Home = () => {
	const [language, setLanguage] = useState("enUS");

	const message =
		language === "enUS"
			? "Hello, I am entering through the *NODRA* website. I would like to know more about your services."
			: language === "ptBR"
				? "Olá, estou entrando em contato através do site da *NODRA*. Gostaria de saber mais sobre seus serviços."
				: "";
	return (
		<HomeDetails>
			<Head>
				<title>
					Nodra |{" "}
					{language === "enUS"
						? "Software Company"
						: language === "ptBR"
							? "Empresa de Software"
							: null}
				</title>
				<link rel="shortcut icon" href="/logo-white.png" type="image/png" />
			</Head>
			<div className="hero">
				<img className="logo" src="/logotipo-black.png" alt="Nodra Logo" />
				<button
					className="contact"
					onClick={() => {
						const url = `https://api.whatsapp.com/send?phone=5519998018174&text=${encodeURIComponent(message)}`;
						window.open(url, "_blank");
					}}
				>
					{language === "enUS"
						? "Talk with us!"
						: language === "ptBR"
							? "Fale conosco!"
							: null}
				</button>

				<div className="i8n">
					<button onClick={() => setLanguage("ptBR")}>
						<img src="/brazil.png" alt="Brasil" />
					</button>
					<button onClick={() => setLanguage("enUS")}>
						<img src="usa.png" alt="United States" />
					</button>
				</div>
			</div>
			<div className="services">
				<h1>
					{language === "enUS"
						? "Our Services"
						: language === "ptBR"
							? "Nossos Serviços"
							: null}
				</h1>
				<h4>
					{language === "enUS"
						? "Complete solutions in software development to boost your business"
						: language === "ptBR"
							? "Soluções completas em desenvolvimento de software para impulsionar seu negócio"
							: null}
				</h4>

				<div className="cards">
					<div className="card">
						<i className="uil uil-server-alt"></i>
						<h3>
							{language === "enUS"
								? "Backend Architecture"
								: language === "ptBR"
									? "Arquitetura Backend"
									: null}
						</h3>
						<p>
							{language === "enUS"
								? "We develop robust and scalable systems that support your business growth."
								: language === "ptBR"
									? "Desenvolvemos sistemas robustos e escaláveis que suportam o crescimento do seu negócio."
									: null}
						</p>
					</div>

					<div className="card">
						<i className="uil uil-bolt-alt"></i>
						<h3>
							{language === "enUS"
								? "API Integration"
								: language === "ptBR"
									? "Integração de APIs"
									: null}
						</h3>
						<p>
							{language === "enUS"
								? "We connect your systems efficiently and securely for maximum productivity."
								: language === "ptBR"
									? "Conectamos seus sistemas de forma eficiente e segura para máxima produtividade."
									: null}
						</p>
					</div>

					<div className="card">
						<i className="uil uil-database"></i>
						<h3>
							{language === "enUS"
								? "SaaS Development"
								: language === "ptBR"
									? "Desenvolvimento SaaS"
									: null}
						</h3>
						<p>
							{language === "enUS"
								? "We create complete platforms ready for the market, from concept to deployment."
								: language === "ptBR"
									? "Criamos plataformas completas prontas para o mercado, do conceito ao deploy."
									: null}
						</p>
					</div>

					<div className="card">
						<i className="uil uil-globe"></i>
						<h3>
							{language === "enUS"
								? "Scalable Infrastructure"
								: language === "ptBR"
									? "Infraestrutura Escalável"
									: null}
						</h3>
						<p>
							{language === "enUS"
								? "We build scalable infrastructure that grows alongside your company."
								: language === "ptBR"
									? "Construímos infraestruturas que crescem junto com a sua empresa."
									: null}
						</p>
					</div>
				</div>
			</div>

			<div className="projects">
				<h1>
					{language === "enUS"
						? "Projects"
						: language === "ptBR"
							? "Projetos"
							: null}
				</h1>
				<h4>
					{language === "enUS"
						? "Some of the systems we develop for our clients"
						: language === "ptBR"
							? "Alguns dos sistemas que desenvolvemos para o nossos clientes"
							: null}
				</h4>

				<div className="cards">
					<a href="#">
						<div className="card">
							<div className="header">
								<h3>
									{language === "enUS"
										? "Business Management System"
										: language === "ptBR"
											? "Sistema de Gestão Empresarial"
											: null}
								</h3>
								<i className="uil uil-external-link-alt"></i>
							</div>

							<p>
								{language === "enUS"
									? "Complete platform for business resource management with real-time dashboards"
									: language === "ptBR"
										? "Plataforma completa para gestão de recursos empresariais com dashboards em tempo real."
										: null}
							</p>

							<div className="tags">
								<span>React</span>
								<span>Node.js</span>
								<span>PostgreSQL</span>
							</div>
						</div>
					</a>

					<a href="#">
						<div className="card">
							<div className="header">
								<h3>
									{language === "enUS"
										? "Payment API"
										: language === "ptBR"
											? "API de Pagamentos"
											: null}
								</h3>
								<i className="uil uil-external-link-alt"></i>
							</div>

							<p>
								{language === "enUS"
									? "Robust payment processing system with high availability"
									: language === "ptBR"
										? "Sistema robusto de processamento de pagamentos com alta disponibilidade."
										: null}
							</p>

							<div className="tags">
								<span>TypeScript</span>
								<span>Express</span>
								<span>Redis</span>
							</div>
						</div>
					</a>

					<a href="#">
						<div className="card">
							<div className="header">
								<h3>
									{language === "enUS"
										? "E-commerce Platform"
										: language === "ptBR"
											? "Plataforma de E-commerce"
											: null}
								</h3>
								<i className="uil uil-external-link-alt"></i>
							</div>

							<p>
								{language === "enUS"
									? "Complete e-commerce solution with optimized performance"
									: language === "ptBR"
										? "Solução completa de comércio eletrônico com performance otimizada."
										: null}
							</p>

							<div className="tags">
								<span>React</span>
								<span>Next.js</span>
								<span>Stripe</span>
							</div>
						</div>
					</a>

					<a href="#">
						<div className="card">
							<div className="header">
								<h3>
									{language === "enUS"
										? "Monitoring System"
										: language === "ptBR"
											? "Sistema de Monitoramento"
											: null}
								</h3>
								<i className="uil uil-external-link-alt"></i>
							</div>

							<p>
								{language === "enUS"
									? "Real-time analytics dashboard for monitoring systems"
									: language === "ptBR"
										? "Dashboard analítico para monitoramento de sistemas em tempo real."
										: null}
							</p>

							<div className="tags">
								<span>Vue.js</span>
								<span>Python</span>
								<span>Docker</span>
							</div>
						</div>
					</a>

					<a href="#">
						<div className="card">
							<div className="header">
								<h3>
									{language === "enUS"
										? "Productivity App"
										: language === "ptBR"
											? "App de Produtividade"
											: null}
								</h3>
								<i className="uil uil-external-link-alt"></i>
							</div>

							<p>
								{language === "enUS"
									? "Task management and productivity app for teams"
									: language === "ptBR"
										? "Aplicação para gestão de tarefas e produtividade em equipes."
										: null}
							</p>

							<div className="tags">
								<span>React Native</span>
								<span>Firebase</span>
								<span>Node.js</span>
							</div>
						</div>
					</a>

					<a href="#">
						<div className="card">
							<div className="header">
								<h3>
									{language === "enUS"
										? "Data Portal"
										: language === "ptBR"
											? "Portal de Dados"
											: null}
								</h3>
								<i className="uil uil-external-link-alt"></i>
							</div>

							<p>
								{language === "enUS"
									? "Platform for visualization and analysis of large volumes of data"
									: language === "ptBR"
										? "Plataforma para visualização e análise de grandes volumes de dados."
										: null}
							</p>

							<div className="tags">
								<span>D3.js</span>
								<span>Python</span>
								<span>MongoDB</span>
							</div>
						</div>
					</a>
				</div>
			</div>

			<div className="about">
				<h1>
					{language === "enUS"
						? "About NODRA"
						: language === "ptBR"
							? "Sobre a NODRA"
							: null}
				</h1>
				<p>
					{language === "enUS"
						? "We are a Brazilian software house specialized in turning complex challenges into elegant and efficient solutions. Our focus is on delivering high-quality code that works and scales."
						: language === "ptBR"
							? "Somos uma software house brasileira especializada em transformar desafios complexos em soluções elegantes e eficientes. Nosso foco está em entregar código de qualidade que funciona e escala."
							: null}
				</p>

				<div className="values">
					<div className="value">
						<h1>50+</h1>
						<p>
							{language === "enUS"
								? "Projects Delivered"
								: language === "ptBR"
									? "Projetos Entregues"
									: null}
						</p>
					</div>

					<div className="value">
						<h1>24/7</h1>
						<p>
							{language === "enUS"
								? "Technical Support"
								: language === "ptBR"
									? "Suporte Técnico"
									: null}
						</p>
					</div>

					<div className="value">
						<h1>100%</h1>
						<p>
							{language === "enUS"
								? "Brazilian Code"
								: language === "ptBR"
									? "Código Brasileiro"
									: null}
						</p>
					</div>
				</div>
			</div>

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
							? "Contact"
							: language === "ptBR"
								? "Contato"
								: null}
					</h1>
					<p>+55 (19) 99801-8174</p>
					<p>Campinas - São Paulo, Brazil</p>
				</div>
				<div className="right">
					<h1>Social</h1>
					<div className="social">
						<a href="https://www.github.com/nodrasoftware/" target="_blank">
							<i className="uil uil-github"></i>
						</a>
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
		</HomeDetails>
	);
};

export default Home;
