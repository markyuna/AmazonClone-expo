// app/components/ExternalLink.tsx
import { Link as RouterLink, useNavigation } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import React, { forwardRef } from 'react';
import { Platform } from 'react-native';

const ExternalLink = forwardRef(
  ({ asChild, href, onPress, ...rest }: { asChild?: boolean; href?: string; onPress?: () => void } & React.ComponentProps<typeof RouterLink>, ref) => {
    const navigation = useNavigation();

    const handleClick = () => {
      if (asChild && href) {
        navigation.navigate(href);
      } else if (onPress) {
        onPress();
      }
    };

    if (Platform.OS === 'web' && href) {
      return (
        <RouterLink href={href} rel="noopener noreferrer" target="_blank" {...rest}>
          {rest.children}
        </RouterLink>
      );
    }

    return <RouterLink {...rest} onPress={handleClick} href={ref} />;
  }
);

export default ExternalLink;
