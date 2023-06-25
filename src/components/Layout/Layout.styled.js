import styled from 'styled-components';

export const PagesContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;

  max-width: 600px;
  margin: 0 auto;
`;

export const Container = styled.div`
  max-width: 960px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Wrap = styled.div`
  background-color: #f5f4fa;
`;
