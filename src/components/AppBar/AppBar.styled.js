import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

// export const StyledNavLink = styled(NavLink)`
//   color: black;
//   text-decoration: none;

//   &.active {
//     color: green;
//   }
// `;

export const AppBarContainer = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 16px;
  /* border-bottom: 1px solid #2a363b; */
  padding: 20px;
  min-height: 40px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

// .header {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 16px;
//   border-bottom: 1px solid #2a363b;
// }
