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

        img {
            width: 45rem;
            height: auto;
        }

        p {
            margin-bottom: 1rem;
            color: var(--font);
            font-weight: 600;
        }

        button {
            background: var(--font);
            color: var(--background);
            border: none;
            padding: 0.5rem 1.5rem;
            font-size: 1rem;
            cursor: pointer;
            border-radius: 0.5rem;
            transition: background 0.3s ease;

            &:hover {
                background: var(--black);
                color: var(--background);
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            }
        }
    }
`

export default HomeDetails;
