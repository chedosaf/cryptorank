import { StyledPageButton } from './styles';

interface IPageButtonProps {
  onClick?: () => void;
}

const PageButton = ({ onClick }: IPageButtonProps) => {
  return <StyledPageButton onClick={onClick}></StyledPageButton>;
};

export default PageButton;
