import styled from 'styled-components'

// const IGContainer: React.FC = () => {

// }

const IGContainer = styled.div`
max-width: 1024px;
margin: 0 auto; // 將內容置中
@media only screen and (max-width: 1024px) {
    max-width: 100%;
  }
`

export default IGContainer