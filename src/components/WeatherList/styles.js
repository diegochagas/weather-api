import styled from 'styled-components';

export const Table = styled.table`
  td,
  th {
    vertical-align: middle !important;
    text-align: center !important;
  }

  td:first-of-type,
  td:first-of-type > div {
    height: 200px;
    width: 250px;
  }
`;
