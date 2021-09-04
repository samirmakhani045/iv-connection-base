import React from 'react';
import PropTypes from 'prop-types';
import { components } from 'react-select';

import { useTranslation } from '@studio/hooks/useTranslation';

import * as icons from '@studio/components/icons';

import { IconWrapper, NoIcon, Pill, Span } from './DropdownComponents.styles';

const DropdownValueContainer = (props) => {
  const { isDisabled, hasValue, isMulti, withIcon, children } = props;
  const { t } = useTranslation('common.forms.dropdown');
  const { ValueContainer, SingleValue } = components;
  const data = props.getValue();
  const { label, icon, pill } = data?.[0] || {};
  const Elem = icons[icon];
  const shouldRenderElem = Elem && hasValue && data?.length === 1;
  const shouldRenderPill = pill && data?.length === 1;

  const renderLabel = () => {
    if (!hasValue) {
      return children;
    }

    if (isMulti && data?.length > 1) {
      return (
        <Span data-testid="dropdownValueContainerLabelMulti">
          {t('multiSelected', { count: data.length })}
        </Span>
      );
    }

    return <Span data-testid="dropdownValueContainerLabelSingle">{label}</Span>;
  };

  const renderSearchInput = () => {
    if (!hasValue) {
      return null;
    }

    return children.slice(-1);
  };

  return (
    <ValueContainer
      data-testid="dropdownValueContainer"
      isDisabled={isDisabled}
      hasValue={hasValue}
      isMulti={isMulti}
      {...props}
    >
      <SingleValue {...props}>
        {withIcon && (
          <IconWrapper data-testid="dropdownValueContainerIcon">
            {shouldRenderElem ? <Elem /> : <NoIcon />}
          </IconWrapper>
        )}
        {renderLabel()}
        {renderSearchInput()}
        {shouldRenderPill && <Pill data-testid="dropdownValueContainerPill">{pill}</Pill>}
      </SingleValue>
    </ValueContainer>
  );
};

DropdownValueContainer.propTypes = {
  /** Is the dropdown disabled */
  isDisabled: PropTypes.bool,
  /** Does the dropdown has a selected value */
  hasValue: PropTypes.bool,
  /** Render option for multiselect dropdown */
  isMulti: PropTypes.bool,
  /** Render icon on the left side of the dropdown */
  withIcon: PropTypes.bool,
  /** Get data from selected option. Array of { value, label, icon, pill } */
  getValue: PropTypes.func,
  /** Provided prop from react-select */
  children: PropTypes.node,
};

DropdownValueContainer.defaultProps = {
  isMulti: false,
};

export default DropdownValueContainer;
