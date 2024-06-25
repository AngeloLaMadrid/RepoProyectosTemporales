document.addEventListener('DOMContentLoaded', () => {
  const tabItems = document.querySelectorAll('.tab-item');
  const tabContentItems = document.querySelectorAll('.tab-content-item');

  function selectItem(e) {
    console.log('Tab funcionando:', this.id);
    // Remover 'tab-border' de todos los elementos
    tabItems.forEach(item => item.classList.remove('tab-border'));
    // Remover 'show' de todos los elementos de contenido
    tabContentItems.forEach(item => item.classList.remove('show'));

    // Agregar 'tab-border' al elemento seleccionado
    this.classList.add('tab-border');
    // Obtener el elemento de contenido correspondiente y agregar 'show'
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    if (tabContentItem) {
      console.log('Mostrando contenido:', tabContentItem.id);
      tabContentItem.classList.add('show');
    } else {
      console.log('No hay contenido:', this.id);
    }
  }

  // Agregar event listeners a cada tab item
  tabItems.forEach(item => {
    console.log('Se añadio un click:', item.id);
    item.addEventListener('click', selectItem);
  });
});
