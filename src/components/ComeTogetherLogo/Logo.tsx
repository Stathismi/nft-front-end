import React from 'react';

import { StyledLogoImage } from 'src/components/ComeTogetherLogo/Logo.style';
import assets from 'src/assets/images/logos';
/**
 * Component that renders the logo image for the main tab navigator {@see MainTabNavigator}
 * screens({@see Tickets} {@see Discover}) title
 */
const Logo: React.FC = () => <StyledLogoImage source={assets.logo} resizeMode="contain" />;

export default Logo;
