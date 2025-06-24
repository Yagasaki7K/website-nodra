import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { NextSeo } from 'next-seo';

export default class MyDocument extends Document {

    // Fast refresh with NextJS doesn't broken the CSS
    static async getInitialProps(ctx: any) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App: any) => (props: any) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }
    // Finish Here

    render() {
        return (
            <Html lang="pt-br">
                <NextSeo
                    title='NODRA | Software Company'
                    description='VibePass — Compre e venda seus ingressos de maneira 100% segura e confiável pela VibePass. Faculdade, eventos, bares, festas. Garanta seu ingresso com segurança e agilidade.'
                    canonical={`https://nodra.vercel.app/`}
                    openGraph={{
                        url: 'https://nodra.vercel.app/',
                        title: 'NODRA | Software Company',
                        description: 'VibePass — Compre e venda seus ingressos de maneira 100% segura e confiável pela VibePass. Faculdade, eventos, bares, festas. Garanta seu ingresso com segurança e agilidade.',
                        images: [
                            {
                                url: '/bg-seo.png',
                                width: 460,
                                height: 460,
                                alt: 'VibePass',
                                type: 'image/png',
                            }
                        ],
                        siteName: 'NodraSoftware',
                    }}
                    twitter={{
                        handle: '@NodraSoftware',
                        site: '@NodraSoftware',
                        cardType: 'summary_large_image',
                    }}
                />

                <Head>
                    <meta name="keywords" content="venda, ingresso, revenda, faculdade, calouros, eventos, bares, festas, segurança, agilidade, vibepass, pass, ingressos, show, bar, brasil, comprar, vender, compra" />

                    <meta name="author" content="Anderson 'Yagasaki' Marlon" />
                    <meta name="robots" content="index, follow" />
                    <link rel="shortcut icon" href="/icon.png" type="image/png" />
                    <meta property="og:locale" content="pt_BR" />

                    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
