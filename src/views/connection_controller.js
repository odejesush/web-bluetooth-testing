
const requestDevice() {
}

const filterContainerTemplate = html`
    <div id="filterContainer">
      <input type="checkbox" name="accept-all-devices" />
      <input type="text" name="name" />
      <input type="text" name="namePrefix" />
      <div id="servicesContainer">
        <input type="text" name="service" />
        <input type="button" value="Add Service Filter" />
      </div>
    </div>
    `;