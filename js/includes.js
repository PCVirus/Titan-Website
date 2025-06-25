document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-include]').forEach(async el => {
    const file = el.getAttribute('data-include');
    try {
      const resp = await fetch(file);
      if (!resp.ok) throw new Error(resp.status + ' ' + resp.statusText);
      el.outerHTML = await resp.text();
    } catch (e) {
      console.error('Include failed for', file, e);
    }
  });
});
