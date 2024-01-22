import StyledImage from '@/components/Image/styles';
import ConverterIcon from '@/icons/ConverterIcon.svg';

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
