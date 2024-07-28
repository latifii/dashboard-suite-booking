import styled, { css } from "styled-components";

// تعریف نوع‌های props
interface RowProps {
  type?: "horizontal" | "vertical";
}

// استفاده از نوع‌های props در کامپوننت استایل‌دار
const Row = styled.div<RowProps>`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

// تنظیم default props
Row.defaultProps = {
  type: "vertical",
};

export default Row;
