import { notice, success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { keyDown } from 'materialize-css';

export default {
  showNotice() {
    notice({
      title: 'Write repository name!',
      delay: 2000,
      width: 50,
    });
  },

  showSuccess() {
    success({
      title: 'Yahoooo! Found...',
      delay: 2000,
    });
  },

  showError() {
    error({
      title: `No repository found!`,
      delay: 2000,
      width: 50,
    });
  },
};