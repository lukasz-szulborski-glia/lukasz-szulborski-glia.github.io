// modal.js

class Modal {
    constructor() {
      this.modalContainer = null;
      this.modalContent = null;
      this.styleSheet = null;
    }

    mount() {
      if (!this.modalContainer) {
        this.createModal();
        this.loadStyles();
      }
      document.body.appendChild(this.modalContainer);
    }

    unmount() {
      if (this.modalContainer) {
        document.body.removeChild(this.modalContainer);
      }
    }

    createModal() {
      this.modalContainer = document.createElement('div');
      this.modalContainer.className = 'modal-container';

      this.modalContent = document.createElement('div');
      this.modalContent.className = 'modal-content';

      this.modalContainer.appendChild(this.modalContent);
    }

    loadStyles() {
      this.styleSheet = document.createElement('link');
      this.styleSheet.rel = 'stylesheet';
      this.styleSheet.href = 'modal-styles.css';
      document.head.appendChild(this.styleSheet);
    }

    setContent(content) {
      this.modalContent.innerHTML = content;
    }
  }

  // Usage example
  const modal = new Modal();

  // Mount the modal
  document.getElementById('showModalBtn').addEventListener('click', () => {
    modal.mount();
    modal.setContent('<h2>Modal Content</h2><p>This is the modal content.</p>');
  });

  // Unmount the modal
  document.getElementById('closeModalBtn').addEventListener('click', () => {
    modal.unmount();
  });
