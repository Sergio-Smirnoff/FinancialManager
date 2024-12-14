import React from "react";
import { InnerLayout } from "../../styles/Layouts";
import styled from "styled-components";

function Income() {
    return (
        <IncomeStyled>
            <InnerLayout>
                <h2>Income</h2>
            </InnerLayout>
        </IncomeStyled>
    );
}

const IncomeStyled = styled.div`

`;

export default Income;