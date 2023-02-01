import {createGlobalStyle} from 'styled-components'
export const Globalstyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
:root{
    /* primary */
--Grayish-blue: hsl(237, 18%, 59%); 
--Soft-red: hsl(345, 95%, 68%);

/* neutral */
--White: hsl(0, 0%, 100%);
--Dark-desaturated-blue: hsl(236, 21%, 26%);
--Very-dark-blue: hsl(235, 16%, 14%);
--Very-dark-mostly-black-blue: hsl(234, 17%, 12%);
--size:14px;
}
body{
    font-family: 'Red Hat Text', sans-serif;
    color: var(--White);
}
`