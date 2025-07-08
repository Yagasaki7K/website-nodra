import styled from "styled-components";

const HomeDetails = styled.div`
    .hero {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100vh;
        padding: 4rem 0;

        .logo {
            width: 45rem;
            height: auto;
            animation: floating 5s infinite;

            @keyframes floating {
                0% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-10px);
                }
                100% {
                    transform: translateY(0);
                }
            }

            @media (max-width: 1200px) {
                width: 30rem;
            }

            @media (max-width: 900px) {
                width: 20rem;
            }

            @media (max-width: 600px) {
                width: 12rem;
            }
        }

        .contact {
            background: var(--background);
            color: var(--font);
            border: none;
            border: 0.5px solid var(--gray);
            padding: 0.7rem 2rem;
            font-size: 1.2rem;
            margin: 1rem 0;
            font-weight: 600;
            cursor: pointer;
            border-radius: 0.5rem;
            transition: background 0.5s ease;

            &:hover {
                background: var(--font);
                color: var(--background);
            }

            @media (max-width: 600px) {
                font-size: 1rem;
                padding: 0.6rem 1.2rem;
            }
        }

        .i8n {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            margin-top: 1rem;
            background: var(--background);

            button {
                background: transparent;
                border: none;
                cursor: pointer;

                img {
                    width: 2rem;
                    height: auto;
                    transition: transform 0.3s ease;

                    &:hover {
                        transform: scale(1.1);
                    }

                    @media (max-width: 600px) {
                        width: 1.3rem;
                    }
                }
            }
        }

        @media (max-width: 900px) {
            padding: 2rem 0;
            height: 60vh;
        }


        @media (max-width: 600px) {
            padding: 1rem 0;
            height: 45vh;
        }
    }

    .services {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        padding-top: 2rem;
        height: 80vh;
        background: var(--foreground);

        h1 {
            font-size: 2.5rem;
            color: var(--font);
            font-weight: 700;
            margin-top: 2rem;

            @media (max-width: 900px) {
                font-size: 2rem;
            }

            @media (max-width: 600px) {
                font-size: 1.5rem;
            }
        }

        h4 {
            font-size: 1.2rem;
            color: var(--font);
            font-weight: 400;
            text-align: center;
            width: 40rem;
            margin-top: -2rem;

            @media (max-width: 1200px) {
                width: 30rem;
            }

            @media (max-width: 900px) {
                width: 20rem;
                font-size: 1rem;
            }

            @media (max-width: 600px) {
                width: 90vw;
                font-size: 0.95rem;
            }
        }

        .cards {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 100%;
            gap: 5rem;
            margin-top: 4rem;

            @media (max-width: 1200px) {
                gap: 2rem;
            }

            @media (max-width: 900px) {
                flex-wrap: wrap;
                gap: 1.5rem;
            }

            @media (max-width: 600px) {
                flex-direction: column;
                align-items: center;
                gap: 1rem;
                margin-top: 2rem;
            }

            .card {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                padding: 2rem;
                background: var(--background);
                border: 1px solid var(--gray);
                border-radius: 0.5rem;
                width: 22rem;
                transition: transform 0.5s ease;
                cursor: default;

                &:hover {
                    border: 1px solid var(--gray-dark);
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

                    i {
                        background: var(--dark-blue);
                        color: var(--foreground);
                    }
                }

                i {
                    font-size: 2.5rem;
                    color: var(--font);
                    background: var(--foreground);
                    padding: 0.5rem 1.2rem;
                    border-radius: 1rem;
                    transition: transform 0.5s ease;
                    width: 5rem;

                    @media (max-width: 900px) {
                        font-size: 2rem;
                        width: 3.5rem;
                    }
                    @media (max-width: 600px) {
                        font-size: 1.5rem;
                        width: 2.5rem;
                    }
                }

                h3 {
                    font-size: 1.5rem;
                    color: var(--font);
                    font-weight: 600;

                    @media (max-width: 900px) {
                        font-size: 1.2rem;
                    }

                    @media (max-width: 600px) {
                        font-size: 1rem;
                    }
                }

                p {
                    font-size: 1rem;
                    color: var(--font);
                    font-weight: 400;

                    @media (max-width: 900px) {
                        font-size: 0.95rem;
                    }

                    @media (max-width: 600px) {
                        font-size: 0.9rem;
                    }
                }

                @media (max-width: 1200px) {
                    width: 18rem;
                    padding: 1.5rem;
                }

                @media (max-width: 900px) {
                    width: 15rem;
                    padding: 1rem;
                }

                @media (max-width: 600px) {
                    width: 90vw;
                    min-width: 0;
                    padding: 0.8rem;
                }
            }
        }

        @media (max-width: 900px) {
            height: auto;
            padding-top: 1rem;
        }

        @media (max-width: 600px) {
            height: auto;
            padding-top: 0.5rem;
        }
    }

    .projects {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        padding-top: 2rem;
        height: 80vh;

        h1 {
            font-size: 2.5rem;
            color: var(--font);
            font-weight: 700;
            margin-top: 2rem;

            @media (max-width: 900px) {
                font-size: 2rem;
            }

            @media (max-width: 600px) {
                font-size: 1.5rem;
            }
        }

        h4 {
            font-size: 1.2rem;
            color: var(--font);
            font-weight: 400;
            text-align: center;
            width: 40rem;
            margin-top: -2rem;

            @media (max-width: 1200px) {
                width: 30rem;
            }

            @media (max-width: 900px) {
                width: 20rem;
                font-size: 1rem;
            }

            @media (max-width: 600px) {
                width: 90vw;
                font-size: 0.95rem;
            }
        }

        .cards {
            display: grid;
            flex-direction: row;
            justify-content: center;
            width: 100%;
            gap: 5rem;
            margin-top: 4rem;
            padding: 0 30rem;
            grid-template-columns: repeat(3, 1fr);

            @media (max-width: 1500px) {
                padding: 0 10rem;
                gap: 2rem;
            }

            @media (max-width: 1200px) {
                padding: 0 2rem;
                gap: 1.5rem;
            }

            @media (max-width: 900px) {
                grid-template-columns: repeat(2, 1fr);
                padding: 0 1rem;
                gap: 1rem;
            }

            @media (max-width: 600px) {
                grid-template-columns: 1fr;
                padding: 0 0.5rem;
                gap: 1rem;
                margin-top: 2rem;
            }

            .card {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                padding: 2rem;
                background: var(--background);
                border: 1px solid var(--gray);
                border-radius: 0.5rem;
                width: 21rem;
                height: 15rem;
                transition: transform 0.5s ease;
                cursor: pointer;

                &:hover {
                    border: 1px solid var(--gray-dark);
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }

                .header {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                }

                i {
                    font-size: 1rem;
                    color: var(--font);

                    @media (max-width: 900px) {
                        font-size: 0.9rem;
                    }

                    @media (max-width: 600px) {
                        font-size: 0.8rem;
                    }
                }

                h3 {
                    font-size: 1.2rem;
                    color: var(--font);
                    font-weight: 600;

                    @media (max-width: 900px) {
                        font-size: 1rem;
                    }

                    @media (max-width: 600px) {
                        font-size: 0.95rem;
                    }
                }

                p {
                    font-size: 0.9rem;
                    color: var(--font);
                    font-weight: 300;

                    @media (max-width: 900px) {
                        font-size: 0.85rem;
                    }

                    @media (max-width: 600px) {
                        font-size: 0.8rem;
                    }
                }

                .tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;

                    span {
                        background: var(--foreground);
                        color: var(--font);
                        padding: 0.3rem 0.6rem;
                        border-radius: 0.3rem;
                        font-size: 0.8rem;

                        @media (max-width: 600px) {
                            font-size: 0.7rem;
                        }
                    }
                }

                @media (max-width: 1200px) {
                    width: 17rem;
                    height: 13rem;
                    padding: 1.2rem;
                }

                @media (max-width: 900px) {
                    width: 14rem;
                    height: 11rem;
                    padding: 1rem;
                }

                @media (max-width: 600px) {
                    width: 100%;
                    min-width: 0;
                    height: auto;
                    padding: 0.8rem;
                }
            }
        }

        @media (max-width: 900px) {
            height: auto;
            padding-top: 1rem;
        }

        @media (max-width: 600px) {
            height: auto;
            padding-top: 0.5rem;
        }
    }

    .about {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        margin-top: 10rem;
        padding-top: 2rem;
        height: 55vh;
        background: var(--foreground);

        h1 {
            font-size: 2.5rem;
            color: var(--font);
            font-weight: 700;
            margin-top: 2rem;

            @media (max-width: 900px) {
                font-size: 2rem;
            }

            @media (max-width: 600px) {
                font-size: 1.5rem;
            }
        }

        p {
            font-size: 1.2rem;
            color: var(--font);
            font-weight: 400;
            text-align: center;
            width: 55rem;
            margin-top: 0rem;

            @media (max-width: 1200px) {
                width: 35rem;
            }

            @media (max-width: 900px) {
                width: 22rem;
                font-size: 1rem;
            }

            @media (max-width: 600px) {
                width: 90vw;
                font-size: 0.95rem;
            }
        }

        .values {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 3rem;
            margin-top: 2rem;

            @media (max-width: 900px) {
                gap: 1.5rem;
            }

            @media (max-width: 600px) {
                flex-direction: column;
                gap: 1rem;
                margin-top: 1rem;
            }

            .value {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.5rem;
                border-radius: 0.5rem;
                width: 15rem;
                height: 10rem;

                @media (max-width: 900px) {
                    width: 10rem;
                    height: 7rem;
                }

                @media (max-width: 600px) {
                    width: 90vw;
                    height: auto;
                }
            }
        }

        @media (max-width: 900px) {
            margin-top: 5rem;
            height: auto;
        }
        @media (max-width: 600px) {
            margin-top: 2rem;
            height: auto;
            padding-top: 1rem;
        }
    }

    .footer {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
        align-items: center;
        text-align: left;
        gap: 20rem;
        padding: 0 10rem;
        margin-top: 2rem;

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
        }

        .right {
            i {
                font-size: 1.5rem;
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
        margin-top: 2rem;
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

export default HomeDetails;
