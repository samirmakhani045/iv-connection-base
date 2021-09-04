import React from 'react';
import PropTypes from 'prop-types';

import { useUser } from '@studio/hooks/useUser';
import * as colors from '@studio/theme/colors';

import { Ul, Li, LiWrapper, StyledIcon, IconFill, Pill, Badge } from './SidebarMenu.styles';

const SidebarMenu = (props) => {
  const { data } = props;
  const { hasPermissions } = useUser();

  const renderMenuItem = (menuOption) => {
    const { icon, fill, title, badge, pill, disabled } = menuOption;

    return (
      <LiWrapper isDisabled={disabled}>
        {icon && (
          <StyledIcon
            name={icon}
            size={16}
            color={disabled ? colors.textSecondary : colors.textPrimary}
          />
        )}
        {!icon && fill && <IconFill fill={fill} />}
        <span>{title}</span>
        {pill && <Pill>{pill}</Pill>}
        {badge && <Badge isDisabled={disabled}>{badge}</Badge>}
      </LiWrapper>
    );
  };

  const renderMenuOptions = (menuOptions) => {
    if (!menuOptions?.length) return null;

    return (
      <Ul>
        {menuOptions.map((menuOption, index) => {
          if (!hasPermissions(menuOption?.permissions)) return null;

          return (
            <Li key={index} isActive={menuOption.active}>
              {renderMenuItem(menuOption)}
              {menuOption?.options && renderMenuOptions(menuOption.options)}
            </Li>
          );
        })}
      </Ul>
    );
  };

  return <nav data-testid="menuWrapper">{renderMenuOptions(data)}</nav>;
};

SidebarMenu.propTypes = {
  /** Normalized data that feeds dashboard sidebar menu */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      /** Icon placed on the left side of the menu option */
      icon: PropTypes.string,
      /** Menu text */
      title: PropTypes.string,
      /** Set this menu option as active/selected */
      active: PropTypes.bool,
      /** Disables this menu option */
      disabled: PropTypes.bool,
      /** Counter on the right side of menu option */
      badge: PropTypes.string,
      /** Pill on the right side of menu option */
      pill: PropTypes.string,
      /** Menu children options */
      options: PropTypes.array,
      /** User roles to whom this option is visible */
      permissions: PropTypes.array,
    }),
  ),
};

export default SidebarMenu;
