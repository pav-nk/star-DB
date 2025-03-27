export default class SwapiService {
  _apiBase = "https://starwars-databank-server.vercel.app/api/v1";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  }

  async getAllCharacters() {
    const res = await this.getResource(`/characters?limit=20`);
    return res.data.map(this._transformData);
  }

  async getCharacter(id) {
    const character = await this.getResource(`/characters/${id}`);
    return this._transformData(character);
  }

  async getAllLocations() {
    const res = await this.getResource(`/locations?limit=20`);
    return res.data.map(this._transformData);
  }

  async getLocation(id) {
    const location = await this.getResource(`/locations/${id}/`);
    return this._transformData(location);
  }

  async getAllOrganizations() {
    const res = await this.getResource(`/organizations?limit=20`);
    return res.data.map(this._transformData);
  }

  async getOrganization(id) {
    const organization = this.getResource(`/organizations/${id}/`);
    return this._transformData(organization);
  }

  async getAllDroids() {
    const res = await this.getResource(`/droids?limit=20`);
    return res.data.map(this._transformData);
  }

  async getDroid(id) {
    const droid = await this.getResource(`/droids/${id}`);
    return this._transformData(droid);
  }

  _transformData({ _id, name, description, image }) {
    return {
      id: _id,
      name,
      description,
      image,
    };
  }
}
