import * as media from '@studio/theme/breakpoints';

export const multiline = (xs = 1, s, m, l) => {
  const maxLinesS = s || xs;
  const maxLinesM = m || maxLinesS;
  const maxLinesL = l || maxLinesM;

  return `
    overflow: hidden;
    display: -webkit-box; /* stylelint-disable-line value-no-vendor-prefix */
    -moz-box-orient: vertical; /* stylelint-disable-line value-no-vendor-prefix */
    -webkit-box-orient: vertical; /* stylelint-disable-line value-no-vendor-prefix */
    box-orient: vertical;
    -webkit-line-clamp: ${xs}; /* stylelint-disable-line value-no-vendor-prefix */

    ${media.smallMedia} {
      -webkit-line-clamp: ${maxLinesS};
    }

    ${media.mediumMedia} {
      -webkit-line-clamp: ${maxLinesM};
    }

    ${media.largeMedia} {
      -webkit-line-clamp: ${maxLinesL};
    }
  `;
};
