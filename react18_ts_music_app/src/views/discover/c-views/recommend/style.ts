import styled from 'styled-components'
import recommend_background from '@/assets/img/wrap-bg.png'

export const RecommendWrapper = styled.div`
  > .content {
    border: 1px solid #d3d3d3;
    background: url(${recommend_background});
    display: flex;
  }

  .left {
    padding: 20px;
    width: 729px;
  }

  .right {
    margin-left: 1px;
    border-width: 0 1px;
  }
`
