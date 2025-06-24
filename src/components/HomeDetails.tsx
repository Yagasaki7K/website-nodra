import styled from 'styled-components';

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

            //effect bouncing
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
                }
            }
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
        }

        h4 {
            font-size: 1.2rem;
            color: var(--font);
            font-weight: 400;
            text-align: center;
            width: 40rem;
            margin-top: -2rem;
        }

        .cards {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 100%;
            gap: 5rem;
            margin-top: 4rem;

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
                }

                h3 {
                    font-size: 1.5rem;
                    color: var(--font);
                    font-weight: 600;
                }

                p {
                    font-size: 1rem;
                    color: var(--font);
                    font-weight: 400;
                }
            }
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
        }

        h4 {
            font-size: 1.2rem;
            color: var(--font);
            font-weight: 400;
            text-align: center;
            width: 40rem;
            margin-top: -2rem;
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
                }

                h3 {
                    font-size: 1.2rem;
                    color: var(--font);
                    font-weight: 600;
                }

                p {
                    font-size: 0.9rem;
                    color: var(--font);
                    font-weight: 300;
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
                    }
                }
            }
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
        }

        p {
            font-size: 1.2rem;
            color: var(--font);
            font-weight: 400;
            text-align: center;
            width: 55rem;
            margin-top: 0rem;
        }

        .values {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 3rem;
            margin-top: 2rem;

            .value {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.5rem;
                border-radius: 0.5rem;
                width: 15rem;
                height: 10rem;
            }
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
            }
        }

        .center {
            h1 {
                font-size: 1.5rem;
                color: var(--font);
                font-weight: 700;
            }
        }

        .right {
            i {
                font-size: 1.5rem;
                color: var(--font);
            }
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
    }
`

export default HomeDetails;
