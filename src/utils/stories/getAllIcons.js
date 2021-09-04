import * as icons from '@studio/components/icons';

/**
 * getAllIcons
 * Retrieve all icons and return their names
 *
 * @returns {Array} Array with all icon names
 */
export const getAllIcons = () => {
  const iconsToExclude = ['default', 'icon'];

  return Object.keys(icons).filter((iconName) => !iconsToExclude.includes(iconName.toLowerCase()));
};

/**
 * isIconValid
 * Check if given icon name exists on our library
 *
 * @param {String} iconName Name of icon to check if exists
 * @returns {Boolean} True if there is an icon with given name on our library
 */
export const isIconValid = (iconName) => {
  return getAllIcons().includes(iconName);
};
