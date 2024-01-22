import ConverterIcon from '@/icons/ConverterIcon.svg';

import { StyledImage } from '../../styles';

interface IConvertButtonProps {
  handleClick: () => void;
}

const ConvertButton = ({ handleClick }: IConvertButtonProps) => {
  return (
    <button onClick={handleClick}>
      <StyledImage
        src={ConverterIcon}
        width={32}
        height={32}
        alt='Switch Curriensies'
      />
    </button>
  );
};

export default ConvertButton;
