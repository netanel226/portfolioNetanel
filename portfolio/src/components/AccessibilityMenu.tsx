import React, { useEffect } from 'react';

const AccessibilityMenu: React.FC = () => {
  useEffect(() => {
    // Load UserWay script
    const script = document.createElement('script');
    script.src = 'https://cdn.userway.org/widget.js';
    script.async = true;
    // Add configuration to always enable the widget
    script.setAttribute('data-account', 'YOUR_ACCOUNT_ID'); // Replace with your UserWay account ID
    // Position the widget at bottom left
    script.setAttribute('data-position', 'bottom_left');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Return null since we don't need to render anything
  // UserWay will add its own button to the page
  return null;
};

export default AccessibilityMenu;
