import React from 'react';
import { PresentationButtonsContainer } from './PresentationButtons.style';
import { TouchableOpacity } from 'react-native';
import SVG from 'src/components/SVG/SVG';

type Props = {
  setCard: () => void;
  setGrid: () => void;
  gridPresentation: boolean;
};

const PresentationButtons: React.FC<Props> = ({ setCard, setGrid, gridPresentation }) => {
  return (
    <PresentationButtonsContainer>
      <TouchableOpacity
        onPress={setGrid}
        style={{ marginRight: 15.81 }}
        accessibilityLabel={'Present Nfts in grid mode'}
      >
        <SVG
          icon="gridNftPresentation"
          color={gridPresentation ? 'cardinalTeal' : 'lightBackgroundGrey'}
          width={24}
          height={24}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={setCard} accessibilityLabel={'Present Nfts in card mode'}>
        <SVG
          icon="cardNftPresentation"
          color={gridPresentation ? 'lightBackgroundGrey' : 'cardinalTeal'}
          width={24}
          height={24}
        />
      </TouchableOpacity>
    </PresentationButtonsContainer>
  );
};

export default PresentationButtons;
