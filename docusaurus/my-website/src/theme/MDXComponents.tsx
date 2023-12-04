import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Icon as IconifyIcon } from '@iconify/react'; // Import the entire Iconify library.

library.add(fab, fas); // Add all Font Awesome icons to the library.

export default {
  ...MDXComponents,
  FontAwesomeIcon: FontAwesomeIcon, // Make the FontAwesomeIcon component available in MDX as <FontAwesomeIcon />.
  IconifyIcon: IconifyIcon, // Make the Iconify Icon component available in MDX as <IconifyIcon />.
};
