import config from "../../config.json";
import styled from "styled-components";

export default function Header(){

    const StyledHeader = styled.div`
        section img {
            width: 80px;
            height: 80px;
            border-radius: 50%
        }

        header {
            height: 300px;
            overflow: hidden;
        }

        header img {
            width: 100%;
        }

        .user-info {
            display: flex;
            align-items: center;
            width: 100%;
            padding: 16px 32px;
            gap: 16px
        }
    `;

    return (
        <StyledHeader>
            <header>
                <img src={config.banner}/>
            </header>
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`}/>
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}